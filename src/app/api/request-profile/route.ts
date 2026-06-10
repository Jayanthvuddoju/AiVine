import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { z } from "zod";

const requestProfileSchema = z.object({
  vendorName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  roleHiring: z.string().min(2, "Role being hired for is required"),
  candidateId: z.string().min(1, "Candidate ID is required"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = requestProfileSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { vendorName, company, email, phone, roleHiring, candidateId, message } = result.data;
    const subject = `AI VINE: Full Profile Request for Candidate ${candidateId} from ${company}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #FAFAF7; color: #1A2E22;">
        <div style="background-color: #4A3F8F; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-family: serif;">FULL CANDIDATE PROFILE REQUEST</h2>
        </div>
        <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; border-top: none;">
          <p style="font-size: 16px; font-weight: bold; margin-bottom: 20px; color: #4A3F8F;">
            A vendor has requested the unmasked resume/profile details for Candidate: <span style="background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px; font-family: monospace; font-size: 14px;">${candidateId}</span>.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 150px;">Vendor Contact:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${vendorName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2D6A4F; font-weight: bold;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Hiring For Role:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${roleHiring}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Requested Candidate:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #2D6A4F;">${candidateId}</td>
            </tr>
          </table>
          
          <h3 style="color: #4A3F8F; font-size: 14px; margin-top: 25px; margin-bottom: 10px;">Message / Job Description:</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message || "No additional message details provided."}</div>
        </div>
        <div style="text-align: center; margin-top: 25px; font-size: 11px; color: #64748b;">
          &copy; ${new Date().getFullYear()} AI VINE &bull; USA & HYDERABAD
        </div>
      </div>
    `;

    await sendEmail({ subject, html });

    return NextResponse.json({ success: true, message: "Profile request submitted successfully!" });
  } catch (error) {
    console.error("Request Profile API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
