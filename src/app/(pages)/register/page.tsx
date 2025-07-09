"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase";
import Image from "next/image";
import bgImage from "../../../../public/assets/Signup.png";
import { FaArrowRight, FaFacebook, FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreed) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: `${firstName}`,
        email: user.email,
        role: "user",
        createdAt: serverTimestamp(),
      });

      alert("Account created successfully!");
      router.push("/login");
    } catch (err: any) {
      console.error("Registration Error:", err);
      setError(err.message || "Registration failed.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Assuming you import and configure googleProvider
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex bg-[#1E2B45] overflow-hidden">
      {/* Left Carousel */}
      <div className="w-3/7 hidden ml-10 my-10  lg:block relative">
        <button
          onClick={() => router.push("/")}
          className="absolute flex gap-2 top-3 left-10 p-2 px-4 text-[#A5893A] bg-[#38454F] z-10 shadow-md hover:bg-gray-50 transition"
        >
          Back to Website <FaArrowRight className="text-lg" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <Image
                src={bgImage}
                alt={`Slide ${i}`}
                className="object-cover w-full h-full"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Form */}
      <div className="w-full flex-1 lg:w-1/2 flex flex-col md:px-10 px-2 items-center justify-center overflow-y-auto">
        <div className="w-full  px-4 md:px-10 relative py-12 md:py-9 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase text-[#CBA135] mb-4">
            Create account
          </h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-center w-full"
          >
            <div className="w-11/12 flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 w-full text-sm md:text-base border-b-2 border-[#CBA135]  text-[#CBA135] outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 w-full text-sm md:text-base border-b-2 border-[#CBA135]  text-[#CBA135] outline-none"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 text-sm md:text-base border-b-2 border-[#CBA135]  w-11/12 text-[#CBA135] outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 text-sm md:text-base border-b-2 border-[#CBA135]  w-11/12 text-[#CBA135] outline-none"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 text-sm md:text-base border-b-2 border-[#CBA135]  w-11/12  text-[#CBA135] outline-none"
              required
            />

            <button
              type="submit"
              className="bg-[#CBA135] text-white w-11/12 text-base md:text-lg lg:text-xl py-3 rounded hover:opacity-90 transition"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex mx-5 items-center my-6 text-white">
            <div className="flex-grow h-px bg-gray-500" />
            <span className="mx-4 text-xs md:text-sm whitespace-nowrap">
              or Signup with
            </span>
            <div className="flex-grow h-px bg-gray-500" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 mx-5">
            <button
              onClick={handleGoogleLogin}
              className="flex-1 flex items-center justify-center gap-2 border-[#CBA135] border rounded py-2 text-sm md:text-base text-white hover:bg-[#CBA135] transition"
            >
              <FaGoogle className="w-4 h-4" />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-[#CBA135] rounded py-2 text-sm md:text-base text-white hover:bg-[#CBA135] transition">
              <FaFacebook className="w-4 h-4 text-blue-600" />
              Facebook
            </button>
          </div>

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
        </div>
      </div>
    </div>
  );
}
