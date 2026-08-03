import nodemailer from "nodemailer";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { name, email, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("Contact form: SMTP environment variables are not configured.");
    return res.status(503).json({
      error:
        "Email service is not configured yet. Please use the email link below.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: contactTo,
      replyTo: trimmedEmail,
      subject: `Portfolio message from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        "",
        trimmedMessage,
      ].join("\n"),
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form send error:", error);
    return res.status(500).json({
      error: "Failed to send your message. Please try again or email directly.",
    });
  }
}
