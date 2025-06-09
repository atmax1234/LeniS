import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
};

const generateEmailContent = (data: Record<string, string>) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n\n`),
    ""
  );

  const htmlData = `
    <div style="font-family: sans-serif; line-height: 1.4">
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Nachricht:</strong><br/>${data.message}</p>
    </div>
  `;

  return {
    text: stringData,
    html: htmlData,
  };
};

export async function POST(req: NextRequest) {
  const response = {
    success: "Form submitted successfully",
  };

  if (req.method === "POST") {
    const data = await req.json();

    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { message: "Bad Request" },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: `Kontaktanfrage von ${data.name}`,
      });

      return NextResponse.json(response, {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    } catch (error) {
      console.error("Email send failed:", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500, headers: { "content-type": "application/json" } }
      );
    }
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} Not Allowed` },
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}