import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL || "hello@aivine.ai";

// Initialize Resend if API key is provided
const resend = apiKey ? new Resend(apiKey) : null;

interface EmailPayload {
  to?: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailPayload) {
  const recipient = to || contactEmail;

  if (resend) {
    try {
      const response = await resend.emails.send({
        from: "AI VINE Portal <portal@aivine.ai>",
        to: recipient,
        subject,
        html,
        text: text || "This is an automated message from AI VINE.",
      });

      if (response.error) {
        console.error("Resend API error:", response.error);
        throw new Error(response.error.message);
      }

      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error in Resend email send:", error);
      throw error;
    }
  } else {
    // Development Mock Logger Fallback
    console.log("---------------- MOCK EMAIL SENT ----------------");
    console.log(`From: portal@aivine.ai`);
    console.log(`To: ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body (HTML):\n${html}`);
    if (text) console.log(`Body (Text): ${text}`);
    console.log("-------------------------------------------------");
    
    // Simulate slight network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return {
      success: true,
      data: { id: `mock-email-id-${Math.random().toString(36).substr(2, 9)}` },
    };
  }
}
