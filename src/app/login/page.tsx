"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import { supabase } from "../../../supabaseClient";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const router = useRouter(); 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsEmailError(false);
    setIsPasswordError(false);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      if (error.message.includes('invalid email')) {
        setIsEmailError(true);
      }
      if (error.message.includes('invalid password')) {
        setIsPasswordError(true);
      }
    } else {
      // Handle successful login (e.g., redirect to dashboard)
      router.push("/")
    }
  };

  const handleResetPassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      setError(error.message);
    } else {
      setError('Password reset email sent!');
    }
  };
  return (
    <div className="flex h-screen w-full justify-center items-center mt-10">
      <div className="w-[500px] flex flex-col gap-y-12 ">
      <div className="flex flex-col gap-y-4"><h3 className="text-[3.5rem] font-sans font-semibold text-center">Login</h3>
      <div className="flex gap-x-1 justify-center font-sans text-lg tracking-wide">
      <p>Don&apos;t have an account?</p> <Link href={"/signup"} className="underline underline-offset-8">Sign up here</Link>
      </div></div>
      <div className="flex flex-col gap-y-4 items-center">
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: isEmailError ? 'red' : 'initial' }}
        placeholder="Email"
        required
        className="w-full rounded-full border border-black text-lg px-4 py-3 focus:outline-none "
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ borderColor: isPasswordError ? 'red' : 'initial' }}
        placeholder="Password"
        required
        className="w-full rounded-full border border-black text-lg px-4 py-3 focus:outline-none "
      />
       {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin}  className="w-full uppercase tracking-wide rounded-full border border-black  bg-black text-white active:bg-white active:text-black hover:bg-gray-700  text-sm px-4 py-3 ">
       Sign in
      </button>
      <button onClick={handleResetPassword} className="underline underline-offset-8 mt-4 ">Forgot your password?</button>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;

