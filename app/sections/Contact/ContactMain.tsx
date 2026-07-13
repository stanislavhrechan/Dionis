"use client";

import { useState } from "react";
import GlowButton from "@/app/components/HoverButton";
export default function ContactForm() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        website: "",
        budget: "",
        message: "",
        source: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    async function handleSubmit( e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        setStatus("Sending...");

        const res = await fetch("/api/contact", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        });


        if(res.ok){
            setStatus("Message sent!");
            setForm({
                firstName:"",
                lastName:"",
                email:"",
                company:"",
                website:"",
                budget:"",
                message:"",
                source:""
            });
        } else {
            setStatus("Something went wrong");
        }
    }


return (

<section className="px-6 md:px-40 py-5 md:py-10">

    <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="my-5 hidden md:block">

            <h2 className="font-instrument text-4xl">
                Pošlite nám e-mail
            </h2>

            <p className="mt-3 max-w-sm">
                Máte otázku? Ozvite sa nám. Vždy sa radi porozprávame.
            </p>


            <div className="">
                <GlowButton
                className="
                    mt-4 px-4 md:px-8 py-1 md:text-xl rounded-full bg-[#f1ede3] text-black uppercase font-instrument cursor-pointer
                "
                >
                    INFO@DIONIS.SK
                </GlowButton>
            </div>



            <h2 className="font-instrument text-4xl mt-10">
                Spojte sa s nami
            </h2>

            <p className="mt-3">
                Majte prehľad o novinkách v oblasti marketingu.
            </p>
            <div className="">
                <a href="https://www.instagram.com/dionis.marketing?igsh=OXp6ZDkzbnh0dHcy">
                <GlowButton
                className="
                    mt-4 px-4 md:px-8 py-1 md:text-xl rounded-full bg-[#f1ede3] text-black uppercase font-instrument cursor-pointer
                "
                >
                    Instagram
                </GlowButton>
                </a>
            </div>

        </div>


        <form 
            onSubmit={handleSubmit}
            className=""
            >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                <Input 
                    label="Krstné meno"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                />


                <Input 
                    label="Priezvisko"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                />
            </div>
            



            <div className="col-span-1 md:col-span-2 my-5">
                <Input 
                    label="Váš e-mail"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                <Input 
                    label="Názov spoločnosti"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                />


                <Input 
                    label="Webová stránka spoločnosti"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                />
            </div>
            <div className="my-5">
                <label className="text-2xl font-instrument">
                    Zadanie/Požiadavka
                </label>

                <div className="relative">
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Chcel by som..."
                        maxLength={500}
                        className="
                        w-full
                        h-30
                        mt-5
                        bg-transparent
                        border-b
                        border-black/60
                        outline-none
                        resize-none
                        relative
                    "
                    />


                    <div className="absolute bottom-3 right-0 font-dm-mono text-xs text-right text-gray-500">
                        {form.message.length}/500
                    </div>
                </div>
            </div>
            

            <GlowButton
                className="
                    md:mt-4 px-8 py-2 md:text-xl w-full rounded-full bg-[#245372] text-white uppercase font-instrument cursor-pointer col-span-2
                "
                >
                    Poslať správu
            </GlowButton>
            <p className="col-span-2">
                {status}
            </p>
        </form>

        <div className="mt-10 block md:hidden">

            <h2 className="font-instrument text-4xl">
                Pošlite nám e-mail
            </h2>

            <p className="mt-3 max-w-sm">
                Máte otázku? Ozvite sa nám. Vždy sa radi porozprávame.
            </p>


            <div className="">
                <GlowButton
                className="
                    mt-4 px-4 md:px-8 py-1 md:text-xl rounded-full bg-[#f1ede3] text-black uppercase font-instrument cursor-pointer
                "
                >
                    INFO@DIONIS.SK
                </GlowButton>
            </div>



            <h2 className="font-instrument text-4xl mt-10">
                Spojte sa s nami
            </h2>

            <p className="mt-3">
                Majte prehľad o novinkách v oblasti marketingu.
            </p>
            <div className="">
                <GlowButton
                className="
                    mt-4 px-4 md:px-8 py-1 md:text-xl rounded-full bg-[#f1ede3] text-black uppercase font-instrument cursor-pointer
                "
                >
                    Instagram
                </GlowButton>
            </div>
            <div className="">
                <GlowButton
                className="
                    mt-4 px-4 md:px-8 py-1 md:text-xl rounded-full bg-[#f1ede3] text-black uppercase font-instrument cursor-pointer
                "
                >
                    Facebook
                </GlowButton>
            </div>

        </div>
    </div>
</section>

)

}

type InputProps = {
    label: string;
    name: string;
    value: string;
    type?: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
};

function Input({
    label,
    name,
    value,
    onChange,
    type = "text"
}: InputProps){

    return (

        <div>
            <label className="font-instrument text-2xl">
                {label}
            </label>

            <input
                type={type}

                name={name}

                value={value}

                onChange={onChange}

                className="
                    w-full
                    mt-3
                    bg-transparent
                    border-b
                    border-black/60
                    pb-3
                    outline-none
                    placeholder:text-gray-400
                "

                placeholder={
                    label==="Váš e-mail"
                        ? "napr. samuel@mail.com"
                        : 
                    label==="Krstné meno"
                        ? "napr. Samuel"
                        :
                    label==="Priezvisko"
                        ? "napr. Cernak"
                        :
                    label==="Názov spoločnosti"
                    ? "napr. Company"
                        :
                    label==="Webová stránka spoločnosti"
                        ? "napr. company.com"
                        :
                        ""
                    }
            />
        </div>
    )
}