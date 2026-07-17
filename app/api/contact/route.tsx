import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const {firstName, lastName, email, message } = await req.json();
        if(!firstName || !lastName || !email || !message) {
            return new Response(
                JSON.stringify({error: "All fields are required"}),
                {status: 400}
            );
        }
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Dionis Contact Form" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_TO,
            subject: `New contact from ${firstName} ${lastName}`,
            text: `
        Name: ${firstName} ${lastName}
        Email: ${email}

        ${message}
        `,
            html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
        });

        return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        { status: 200 }
        );
    } catch(err) {
        console.error(err);
        return new Response(
            JSON.stringify({error: "Failed to send email"}),
            {status: 500}
        );
    }

}