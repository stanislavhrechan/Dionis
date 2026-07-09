import nodemailer from "nodemailer";


export async function POST(req, Request) {

    try {

        const data = await req.json();


        const {
            firstName,
            lastName,
            email,
            company,
            website,
            message,
        } = data;



        if(!firstName || !lastName || !email || !message) {

            return Response.json(
                {
                    error: "Required fields missing"
                },
                {
                    status:400
                }
            );

        }



        const transporter = nodemailer.createTransport({

            host: "smtp.gmail.com",

            port: 465,

            secure:true,


            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }

        });




        await transporter.sendMail({

            from: `"Dionis Website" <${process.env.EMAIL_USER}>`,

            to: process.env.EMAIL_TO,


            replyTo: email,


            subject:
            `Nová správa od ${firstName} ${lastName}`,


            html:`

                <h2>Nový kontakt z webu Dionis</h2>


                <p>
                    <strong>Meno:</strong>
                    ${firstName} ${lastName}
                </p>


                <p>
                    <strong>Email:</strong>
                    ${email}
                </p>


                <p>
                    <strong>Firma:</strong>
                    ${company || "-"}
                </p>


                <p>
                    <strong>Web:</strong>
                    ${website || "-"}
                </p>


                <hr/>


                <h3>Správa:</h3>


                <p>
                    ${message}
                </p>

            `

        });



        return Response.json({

            success:true,
            message:"Email sent successfully"

        });



    } catch(error) {


        console.error(error);


        return Response.json(

            {
                success:false,
                error:"Failed to send email"
            },

            {
                status:500
            }

        );

    }

}