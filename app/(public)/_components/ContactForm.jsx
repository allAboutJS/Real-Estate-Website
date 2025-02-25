"use client";

import Input from "@/app/_components/Input";
import uploadMessage from "../_actions/uploadMessage";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import TextArea from "@/app/_components/TextArea";

export default function ContactForm() {
    const {
        register,
        reset,
        formState: { errors, isSubmitting },
        handleSubmit
    } = useForm({ mode: "all" });
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fullnameRegexp = /^[A-Za-z]+(?: [A-Za-z'-]+)*$/;
    const phoneNumberRegexp = /^\+?[0-9]{1,14}$/;
    const messageRegexp = /^[\s\S]{1,500}$/;

    const submitForm = async (form) => {
        try {
            const { success } = await uploadMessage(form);
            success
                ? (toast.success("Your message was sent successfully! You'll be contacted soon."), reset())
                : toast.error("Message not sent! Try again soon.");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form
            action={handleSubmit(submitForm)}
            className="mt-6 bg-gray-50 px-4 py-8 max-w-md mx-auto text-sm space-y-3 shadow-lg rounded-2xl"
        >
            <Input
                type="text"
                label="Fullname"
                placeholder="John Smith"
                id="full-name"
                name="fullname"
                pattern={fullnameRegexp}
                errorMessage="Your fullname is required."
                register={register}
                errors={errors}
            />
            <Input
                type="email"
                label="Email"
                placeholder="mail@provider.com"
                id="email"
                name="email"
                pattern={emailRegexp}
                errorMessage="Your email is required."
                register={register}
                errors={errors}
            />
            <Input
                type="tel"
                label="Phone Number"
                placeholder="+234000000000"
                id="phone-number"
                name="phoneNumber"
                pattern={phoneNumberRegexp}
                errorMessage="Your phone number is required."
                register={register}
                errors={errors}
            />
            <TextArea
                type="textarea"
                label="Message"
                placeholder="Write a message..."
                id="message"
                name="message"
                validations={{
                    pattern: {
                        value: messageRegexp,
                        message: "Input is invalid."
                    },
                    required: {
                        value: true,
                        message: "Enter your message."
                    },
                    maxLength: {
                        value: 500,
                        message: "Max character length exceeded."
                    }
                }}
                register={register}
                errors={errors}
            />
            <button
                disabled={isSubmitting}
                className="p-2 bg-blue-600 text-white w-full disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
            >
                {isSubmitting ? "PLEASE WAIT..." : "SEND"}
            </button>
        </form>
    );
}
