import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.LEAD_EMAIL ?? "trade@caterchoice.co.uk";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, businessName, businessType, monthlySpend, message } = body;

    if (!name || !email || !phone || !businessName || !businessType || !monthlySpend) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      // Dev mode — log and return success
      console.log("📧 Lead received (no RESEND_API_KEY set):", body);
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "Cater Choice Leads <leads@caterchoice.co.uk>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `🆕 New Trade Lead: ${businessName} (${businessType})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #16a34a; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">New Trade Enquiry</h1>
            <p style="margin: 4px 0 0; opacity: 0.8; font-size: 14px;">From Cater Choice landing page</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Name", name],
                ["Email", email],
                ["Phone", phone],
                ["Business Name", businessName],
                ["Business Type", businessType],
                ["Monthly Spend", monthlySpend],
                ["Message", message || "—"],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; width: 140px; vertical-align: top;">${label}</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #111827;">${value}</td>
                </tr>
              `).join("")}
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #dcfce7; border-radius: 8px; border: 1px solid #bbf7d0;">
              <p style="margin: 0; font-size: 13px; color: #15803d; font-weight: 600;">⚡ Respond within 2 hours for best conversion rate</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
