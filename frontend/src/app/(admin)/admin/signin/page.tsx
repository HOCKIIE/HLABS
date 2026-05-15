"use client"

import React, { useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import { useTheme } from 'next-themes';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from '@/services/Auth';
import { useAuth } from "@/contexts/AdminContext";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});


const Signin = () => 
{
    const { refreshUser } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect');
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme ?? 'light' : theme;


    const togglePassword = (e: React.MouseEvent<HTMLInputElement>) => {
        const self = (e.target as HTMLInputElement).closest('.absolute')?.previousElementSibling;
        (self as HTMLInputElement).type = (self as HTMLInputElement).type == "password" ? "text" : "password";
    }
    const {  register, handleSubmit, formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const [status, setStatus] = useState<string | null>('error');
    const [message , setMessage] = useState<string | null>(null);
    const onSubmit = async (data: { email: string; password: string }): Promise<void> => {
        setMessage(null);
        try {
            const request = await loginUser(data.email, data.password);
            if(request.status == 'success'){
                setStatus('success')
                setMessage('Success, The system is redirecting.')
                const redirectTo = typeof redirect === 'string' ? redirect : '/admin';
                await refreshUser();
                router.push(redirectTo);
            }else{
                setStatus('error')
                setMessage("Login failed. Please try again.");
            }
        } catch {
            setStatus('error')
            setMessage("Login failed. Please try again.");
        }
    };

    return (
    <>
        <div className="p-5 lg:bg-transparent lg:dark:bg-transparent bg-lightprimary lg:fixed top-0 z-50 w-full"></div>
        <div className="relative overflow-hidden lg:h-screen">
            <div className="grid grid-cols-12 gap-3 lg:h-screen bg-white dark:bg-dark">
                <div className="xl:col-span-8 lg:col-span-7 col-span-12 bg-lightprimary dark:bg-lightprimary lg:block hidden relative overflow-hidden">
                </div>
                <div className="xl:col-span-4 lg:col-span-5 col-span-12 sm:px-12 p-5">
                    <div className="flex lg:h-screen items-center px-3 lg:justify-start justify-center">
                        <div className="max-w-105 w-full mx-auto">
                            <h3 className="text-2xl font-bold">Welcome to TailwindAdmin</h3>
                            <p className="text-darklink text-sm font-medium">Your Admin Dashboard</p>
                            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ld mb-2 block">Email</label>
                                    <input 
                                        {...register("email")}
                                        className="flex h-10 w-full border rounded-lg px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:rounded-sm file:text-sm file:font-medium file:text-primary file:bg-lightprimary focus-visible:outline-0 border-ld bg-transparent text-ld placeholder:text-bodytext dark:placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-0" 
                                        placeholder="Enter your email" 
                                        type="email" />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ld mb-2 block">Password</label>
                                    <input 
                                        {...register("password")}
                                        placeholder="Enter your password" 
                                        type="password"
                                        className="flex h-10 w-full border rounded-lg px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:rounded-sm file:text-sm file:font-medium file:text-primary file:bg-lightprimary focus-visible:outline-0 border-ld bg-transparent text-ld placeholder:text-bodytext dark:placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-0" 
                                    />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                                </div>
                                <div className="flex justify-between my-5">
                                    <div className="flex items-center gap-2">
                                        <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4.5 w-4.5 shrink-0 rounded-sm border-[1.5px] border-ld disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white hover:cursor-pointer" id="remember"></button>
                                        <input aria-hidden="true" 
                                            tabIndex={-1} type="checkbox" value="on" 
                                            style={{
                                                position: 'absolute',
                                                pointerEvents: 'none',
                                                opacity: 0,
                                                margin: 0,
                                                transform: 'translateX(-100%)',
                                                width: '18px',
                                                height: '18px'
                                            }} />
                                        <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ld block mb-0" htmlFor="remember"> Remember this Device</label>
                                    </div><button type="button" className="text-primary text-sm font-medium" data-href="/auth/auth1/forgot-password" data-discover="true">Forgot Password?</button>
                                </div>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:cursor-pointer bg-primary text-white hover:bg-primaryemphasis h-10 px-4 py-2 w-full" 
                                >{isSubmitting ? "Signing In..." : "Sign In"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Signin