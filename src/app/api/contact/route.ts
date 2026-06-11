import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  type: z.enum(["hire", "join", "general"]),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, type, message } = result.data;
    
    // Customize email subject and header based on submission type
    const typeLabels = {
      hire: "Employer Hiring Inquiry",
      join: "Candidate Join Inquiry",
      general: "General Inquiry",
    };
    
    const subject = `AI VINE: New ${typeLabels[type]} from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #FAFAF7; color: #1A2E22;">
        <div style="background-color: #2D6A4F; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="color: #F5F0E8; margin: 0; font-family: serif;">AI VINE CONTACT FORM SUBMISSION</h2>
        </div>
        <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; border-top: none;">
          <p style="font-size: 16px; font-weight: bold; margin-bottom: 20px; color: #2D6A4F;">
            You have received a new ${typeLabels[type]}.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #4A3F8F;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${phone || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Inquiry Type:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-transform: uppercase; font-size: 12px; font-weight: bold; color: #4A3F8F;">${type}</td>
            </tr>
          </table>
          
          <h3 style="color: #2D6A4F; font-size: 14px; margin-top: 25px; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
        </div>
        <div style="text-align: center; margin-top: 25px; font-size: 11px; color: #64748b;">
          &copy; ${new Date().getFullYear()} AI VINE &bull; USA
        </div>
      </div>
    `;

    await sendEmail({ subject, html });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
