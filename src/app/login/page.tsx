'use client'

import authService from "@/services/auth"
import { Alert } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [alert, setAlert] = useState(false);
    const [loading, setloading] = useState(false);
    const router = useRouter();

    const signup = (formData: FormData) => {
        setloading(true);
        authService.signin(formData).then((response) => {
            if (!response.error) {
                localStorage.setItem('token', response.data.access_token);
                router.push('/production');
                setloading(false);
            } else {
                setAlert(true);
                setloading(false);
            }
        })
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action={signup} method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Login
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {alert && <Alert message="Credenciais Incorretas" type="warning" showIcon closable />}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                style={{ opacity: loading ? 0.5 : undefined }}
                                className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Acessar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}