import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const {firstName, lastName, email, message } = await req.json();
        if(!firstName || !lastName || !email || !message) {
            return new Response(
                JSON.stringify({error: "Všetky polia sú povinné."}),
                {status: 400}
            );
        }
       
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'info@dionis.sk',
                pass: 'bvurzgufmzisrxad',
            },
        });

        await transporter.sendMail({
            from: `"Kontaktný formulár Dionis" <info@dionis.sk>`,
            replyTo: email,
            to: 'info@dionis.sk',
            subject: `Nový kontakt od ${firstName} ${lastName}`,
            text: `
        Meno: ${firstName} ${lastName}
        E-mail: ${email}

        ${message}
        `,
            html: `
                <p><strong>Meno:</strong> ${firstName} ${lastName}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Správa:</strong><br>${message}</p>
            `,
        });

        return new Response(
        JSON.stringify({ message: "E-mail bol úspešne odoslaný" }),
        { status: 200 }
        );
    } catch (err: any) {
        console.error("EMAIL ERROR:", err);

        return Response.json(
            {
            error: err?.message || "Nepodarilo sa odoslať e-mail",
            },
            { status: 500 }
        );
    }

}