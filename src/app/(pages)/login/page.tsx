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
    <div className="h-screen flex bg-[#1E2B45] overflow-hidden">
      {/* Left Side Image */}
      <div className="w-3/7 hidden ml-10 my-10  lg:block relative">
        <button
          onClick={() => router.push("/")}
          className="absolute flex gap-2 top-3 left-10 p-2 px-4 text-[#A5893A] bg-[#38454F] z-10 shadow-md hover:bg-gray-50 transition"
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
      <div className="w-full flex-1 h-screen lg:w-1/2 flex md:px-20   flex-col justify-center items-center  overflow-y-auto relative">
        <div className=" px-10 w-full py-10 h-full my-20   relative text-center">
          <h2 className="text-3xl font-semibold text-[#CBA135] ">
            Login your account
          </h2>
          <p className="text-sm text-white mb-6">
            Don’t have an account?
            <Link href="/register" className="text-[#CBA135] underline ml-1">
              Register
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
                className="p-3 w-full text-sm md:text-base  border-b-2 border-[#CBA135]  text-[#CBA135] outline-none"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
                className="p-3 w-full text-sm md:text-base border-b-2 border-[#CBA135]  text-[#CBA135] outline-none"
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
              className="bg-[#CBA135] text-white  text-base md:text-lg lg:text-xl py-3 rounded hover:opacity-90 transition"
            >
              Login account
            </button>
          </form>

          {/* Decorative Bars and Corners */}
          <div className="h-5 border-2 border-[#CBA135] absolute top-0 left-[3rem] right-[3rem]"></div>
          <div className="h-5 border-2 border-[#CBA135] absolute bottom-0 left-[3rem] right-[3rem]"></div>
          <div className="w-5 h-[calc(100%-6rem)] border-2 border-[#CBA135] absolute left-0 top-[3rem]"></div>
          <div className="w-5 h-[calc(100%-6rem)] border-2 border-[#CBA135] absolute right-0 top-[3rem]"></div>

          <div className="absolute border-t-2 border-r-2 border-[#CBA135] w-12 h-12 left-0 bottom-0 rounded-tr-[2.3rem]">
            <div className="absolute w-8 h-8 left-0 bottom-0 rounded-tr-full border-2 border-[#CBA135]"></div>
          </div>
          <div className="absolute border-t-2 border-l-2 border-[#CBA135] w-12 h-12 right-0 bottom-0 rounded-tl-[2.3rem]">
            <div className="absolute w-8 h-8 right-0 bottom-0 rounded-tl-full border-2 border-[#CBA135]"></div>
          </div>
          <div className="absolute border-b-2 border-l-2 border-[#CBA135] w-12 h-12 right-0 top-0 rounded-bl-[2.3rem]">
            <div className="absolute w-8 h-8 right-0 top-0 rounded-bl-full border-2 border-[#CBA135]"></div>
          </div>
          <div className="absolute border-b-2 border-r-2 border-[#CBA135] w-12 h-12 left-0 top-0 rounded-br-[2.3rem]">
            <div className="absolute w-8 h-8 left-0 top-0 rounded-br-full border-2 border-[#CBA135]"></div>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6 text-white">
            <div className="flex-grow h-px bg-gray-500" />
            <span className="mx-4 text-sm whitespace-nowrap">
              or login with
            </span>
            <div className="flex-grow h-px bg-gray-500" />
          </div>

          {/* Social Buttons */}
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
  );
}
