"use client";
import { useState, FormEvent, useEffect } from 'react';
import { signUp } from '../../../auth';
import Link from 'next/link';
import { supabase } from '../../../supabaseClient';

const SignUp = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Use useEffect to ensure this code runs only in the browser
  useEffect(() => {
    const matchPass = document.getElementById("confirmPassword");
    if (confirmPassword !== password && confirmPassword !== "") {
      if (matchPass) {
        matchPass.style.borderColor = "red";
      }
    }
    if (confirmPassword === password && confirmPassword !== "") {
      if (matchPass) {
        matchPass.style.borderColor = "green";
      }
    } else {
      if (matchPass) {
        matchPass.style.borderColor = "";
      }
    }
  }, [confirmPassword, password]); // Re-run when confirmPassword or password changes

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { user, error: signUpError } = await signUp(email, password);
    if (signUpError) {
      console.log(signUpError);
      setError(signUpError.message);
    } else {
      await supabase.auth.updateUser({
        data: { full_name: fullName },
      });
      console.log("User signed up:", user);
      // Optionally redirect or show a success message
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center mt-20">
      <div className="w-[500px] flex flex-col gap-y-10">
        <h3 className="text-[3.5rem] font-sans font-semibold text-center">Create account</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 items-center">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            required
            className="w-full rounded-full border border-black text-lg px-4 py-3 focus:outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-full border border-black text-lg px-4 py-3 focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
            className="w-full rounded-full border border-black text-lg px-4 py-3 focus:outline-none"
          />
          <input
            type="password"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            required
            className="w-full rounded-full border border-black text-lg px-4 py-3 focus:outline-none"
          />
          {error && <div className="text-sm text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full uppercase bg-black text-white active:bg-white active:text-black hover:bg-gray-700  tracking-wide rounded-full border border-black text-sm px-4 py-3 "
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-x-1 justify-center font-sans text-lg tracking-wide">
          <p>Already have an account?</p>
          <Link href={"/login"} className="underline underline-offset-8">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;