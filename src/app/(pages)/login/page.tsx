"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "../../../../public/assets/Login.png";
import Link from "next/link";
import { FaArrowRight, FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex bg-[#111D27] overflow-hidden">
      {/* Left Side Image */}
      <div className="w-1/2 hidden lg:block relative">
        <button
          onClick={() => router.push("/")}
          className="absolute flex gap-2 top-4 left-4 p-2 px-4 text-[#CBA135] bg-[#D9D9D9] shadow-md hover:bg-gray-50 transition"
        >
          Back to Website <FaArrowRight className="text-lg" />
        </button>
        <Image
          src={image}
          alt="Login Visual"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side Login Form */}
      <div className="w-full h-full lg:w-1/2 flex flex-col justify-center items-center py-10 px-8 gap-10 overflow-y-auto relative">
        <div className="w-fit h-fit  rounded-full border border-[#CBA135] p-1 absolute left-2 top-2 rotate-120">
          <div className="relative flex justify-center items-center w-10 h-10 rounded-full">
            {/* Two radial lines */}
            <div className="absolute w-[1.5px] h-6 bg-[#CBA135] origin-bottom rotate-[45deg]"></div>
            <div className="absolute w-[1.5px] h-6 bg-[#CBA135] origin-bottom -rotate-[45deg]"></div>

            {/* Circular Arc */}
            <div className="absolute arc-sector w-10 h-10 border-[1.5px] border-[#CBA135] rounded-full clip-sector rotate-[-45deg]"></div>
          </div>
        </div>

        {/* Main Login Box */}
        <div className="border-2 border-[#CBA135] p-4 w-full flex items-center justify-center">
          <div className="border-2 border-[#CBA135] p-4 w-full flex items-center justify-center">
            <div className="w-full max-w-md text-center">
              <h2 className="text-3xl font-semibold text-[#CBA135] mb-4">
                Login your account
              </h2>
              <p className="text-sm text-white mb-6">
                Don’t have an account?
                <Link
                  href="/register"
                  className="text-[#CBA135] underline ml-1"
                >
                  Register
                </Link>
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-5 rounded bg-transparent border-2 border-[#CBA135] text-[#CBA135] outline-none"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="p-5 rounded bg-transparent border-2 border-[#CBA135] text-[#CBA135] outline-none"
                  required
                />

                <div className="flex justify-end text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-[#CBA135] underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="bg-transparent border border-[#CBA135] text-2xl p-3 text-[#CBA135] hover:opacity-90 transition"
                >
                  Login account
                </button>
              </form>

              <div className="flex items-center my-6 text-white">
                <div className="flex-grow h-px bg-gray-500" />
                <span className="mx-4 text-sm whitespace-nowrap">
                  or login with
                </span>
                <div className="flex-grow h-px bg-gray-500" />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="flex-1 flex items-center justify-center gap-2 border-[#CBA135] border rounded py-2 text-white hover:bg-[#CBA135] transition"
                >
                  <FaGoogle className="w-5 h-5" />
                  Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-[#CBA135] rounded py-2 text-white hover:bg-[#CBA135] transition">
                  <FaFacebook className="w-5 h-5 text-blue-600" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
