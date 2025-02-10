"use client";

import uploadMessage from "../_actions/uploadMessage";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit
    } = useForm({ mode: "all" });
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fullnameRegexp = /^[A-Za-z]+(?: [A-Za-z'-]+)*$/;
    const phoneNumberRegexp = /^\+?[1-9]\d{1,14}$/;
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
            className="mt-6 bg-gray-50 p-4 max-w-md mx-auto text-sm space-y-3 shadow-lg"
        >
            <div className="input-field">
                <label htmlFor="full-name">Full Name</label>
                <input
                    className="min-w-0 bg-slate-100 rounded-sm p-1"
                    type="text"
                    placeholder="John Smith"
                    id="full-name"
                    {...register("fullname", {
                        pattern: {
                            value: fullnameRegexp,
                            message: "Input is invalid."
                        },
                        required: {
                            value: true,
                            message: "Your fullname is required."
                        },
                        maxLength: {
                            value: 100,
                            message: "Too long."
                        }
                    })}
                />
                {errors["fullname"] && <small className="text-red-600">{errors["fullname"]?.message}</small>}
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                    className="min-w-0 bg-slate-100 rounded-sm p-1"
                    type="email"
                    placeholder="mail@provider.com"
                    id="email"
                    {...register("email", {
                        pattern: {
                            value: emailRegexp,
                            message: "Input is invalid."
                        },
                        required: {
                            value: true,
                            message: "Your email is required."
                        },
                        maxLength: {
                            value: 100,
                            message: "Too long."
                        }
                    })}
                />
                {errors["email"] && <small className="text-red-600">{errors["email"]?.message}</small>}
            </div>
            <div className="input-field">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                    className="min-w-0 bg-slate-100 rounded-sm p-1"
                    type="tel"
                    placeholder="+234000000000"
                    id="phone-number"
                    {...register("phoneNumber", {
                        pattern: {
                            value: phoneNumberRegexp,
                            message: "Input is invalid."
                        },
                        required: {
                            value: true,
                            message: "Your phone number is required."
                        },
                        maxLength: {
                            value: 14,
                            message: "Too long."
                        }
                    })}
                />
                {errors["phoneNumber"] && <small className="text-red-600">{errors["phoneNumber"]?.message}</small>}
            </div>
            <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea
                    className="min-w-0 bg-slate-100 rounded-sm p-1 min-h-20"
                    placeholder="Write a message..."
                    id="message"
                    {...register("message", {
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
                    })}
                ></textarea>
                {errors["message"] && <small className="text-red-600">{errors["message"]?.message}</small>}
            </div>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            className="p-2 bg-black text-white w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
            {pending ? "PLEASE WAIT..." : "SEND"}
        </button>
    );
}
