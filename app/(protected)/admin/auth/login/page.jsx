"use client";

import { useFormStatus } from "react-dom";
import login from "./_actions/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
    const router = useRouter();

    const handleLogin = async (form) => {
        const { success, error } = await login(form);
        success ? (toast.success("Login successful!"), router.push("../dashboard")) : toast.error(error);
    };

    return (
        <main className="flex justify-center items-center min-h-screen bg-blue-50 p-4">
            <div className="max-w-xl w-full p-4 bg-white shadow-md space-y-6 rounded-2xl">
                <div>
                    <Image src="/images/logo.png" height={80} width={80} alt="" className="block mx-auto" />
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-semibold">Admin Sign In</h1>
                    <p>Sign in to your account securely</p>
                </div>
                <form action={handleLogin} className="space-y-3">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            className="min-w-0 bg-slate-100 rounded-md p-2"
                            type="email"
                            placeholder="mail@provider.com"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Password</label>
                        <input
                            className="min-w-0 bg-slate-100 rounded-md p-2"
                            type="password"
                            placeholder="P@ssw0rd"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <SubmitButton />
                </form>
            </div>
        </main>
    );
}
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            className="p-2 bg-blue-600 text-white w-full disabled:cursor-not-allowed disabled:opacity-50 rounded-lg"
        >
            {pending ? "PLEASE WAIT..." : "LOGIN"}
        </button>
    );
}
