"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Image from "next/image";
import bgImage from "../../../../public/assets/Signup.png";
import { FaArrowRight } from "react-icons/fa";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/globals.css"; // Make sure this line is correct if you use global styles

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

  return (
    <div className="h-screen flex  bg-[#111D27] overflow-hidden">
      {/* Left image carousel */}
      <div className="w-1/2 hidden lg:block relative">
        <button
          onClick={() => router.push("/")}
          className="absolute flex gap-2 top-6 left-6 p-2 px-4 text-[#CBA135] bg-[#D9D9D9] z-10 shadow-md hover:bg-gray-50 transition"
        >
          Back to Website <FaArrowRight className="text-lg" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-full custom-swiper"
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

      {/* Right form section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center py-8 px-8 gap-10 overflow-y-auto">
        <div className="w-full text-center mb-2">
          <h2 className="text-3xl font-semibold uppercase text-[#CBA135] mb-2">
            Create account
          </h2>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center w-full">
          <input
            type="text"
            placeholder="Full Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#a77f1b] outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#CBA135] outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#CBA135] outline-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#CBA135] outline-none"
            required
          />

          <button
            type="submit"
            className="bg-transparent border w-3/4 border-[#CBA135] text-3xl p-4 text-[#CBA135] hover:opacity-90 transition"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}







































// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// import { auth, googleProvider, db } from "../../firebase";
// import Image from "next/image";
// import bgImage from "../../../../public/assets/Signup.png";
// import Link from "next/link";
// import { FaGoogle, FaFacebookF, FaArrowRight } from "react-icons/fa";

// export default function RegisterPage() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [agreed, setAgreed] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       await setDoc(doc(db, "users", user.uid), {
//         name: user.displayName || "",
//         email: user.email,
//         role: "user",
//         createdAt: serverTimestamp(),
//       });
//       alert("Signed up with Google!");
//       router.push("/");
//     } catch (error: any) {
//       console.error("Google Sign-In Error:", error);
//       setError(error.message || "Something went wrong.");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (!agreed) {
//       setError("You must agree to the Terms & Conditions.");
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         name: `${firstName} ${lastName}`,
//         email: user.email,
//         role: "user",
//         createdAt: serverTimestamp(),
//       });

//       alert("Account created successfully!");
//       router.push("/login");
//     } catch (err: any) {
//       console.error("Registration Error:", err);
//       setError(err.message || "Registration failed.");
//     }
//   };

//   return (
//     <div className="h-screen flex bg-[#111D27]">
//       {/* Left image */}
//       <div className="w-1/2 hidden lg:block relative p-8">
//         <button
//           onClick={() => router.push("/")}
//           className="absolute flex gap-2 top-6 left-6 p-2 px-4 text-[#CBA135] bg-[#D9D9D9]   shadow-md hover:bg-gray-50 transition"
//         >
//           Back to Website <FaArrowRight className="text-lg" />
//         </button>
//         <Image
//           src={bgImage}
//           alt="Login Visual"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Right form section */}
//       <div className="w-full lg:w-1/2 flex flex-col items-center  py-8 px-8 gap-10">
//         <div className="w-full items-center text-center mb-2 justify-start">
//           <h2 className="text-3xl font-semibold uppercase text-[#CBA135] mb-2">
//             Create account
//           </h2>
//         </div>

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center w-full">
//           {/* <div className="flex gap-4"> */}
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#a77f1b] outline-none"
//               required
//             />
            
//           {/* </div> */}

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#CBA135] outline-none"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#CBA135] outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-5 rounded bg-transparent border-2 w-3/4 border-[#CBA135] text-[#CBA135] outline-none"
//             required
//           />

//           {/* <label className="flex items-center gap-2 text-sm">
//             <input
//               type="checkbox"
//               checked={agreed}
//               onChange={(e) => setAgreed(e.target.checked)}
//               className="accent-[#CBA135]"
//             />
//             I agree to the{" "}
//             <span className="text-[#CBA135] underline cursor-pointer">
//               Terms & Conditions
//             </span>
//           </label> */}

//           <button
//             type="submit"
//             className="bg-transparent border w-3/4 border-[#CBA135] text-3xl  p-4 text-[#CBA135]  hover:opacity-90 transition"
//           >
//             Create account
//           </button>
//         </form>

//         {/* <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300" />
//           <span className="mx-4 text-sm text-gray-500 whitespace-nowrap">
//             or register with
//           </span>
//           <div className="flex-grow h-px bg-gray-300" />
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="flex-1 flex items-center justify-center gap-2 border border-[#CBA135] rounded py-2 hover:bg-[#CBA135] hover:text-white transition"
//           >
//             <FaGoogle className="w-5 h-5" />
//             Google
//           </button>
//           <button
//             type="button"
//             className="flex-1 flex items-center justify-center gap-2 border border-[#CBA135] rounded py-2 hover:bg-[#CBA135] hover:text-white transition"
//           >
//             <FaFacebookF className="w-5 h-5 text-blue-600" />
//             Facebook
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// }
