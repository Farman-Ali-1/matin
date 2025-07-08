// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { auth } from "./firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "./firebase"; // make sure db is exported from firebase config

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         try {
//           const userDocRef = doc(db, "users", user.uid);
//           const userDoc = await getDoc(userDocRef);

//           if (userDoc.exists()) {
//             const userData = userDoc.data();
//             const role = userData.role;

//             if (role === "admin") {
//               router.push("/dashboard");
//             } else {
//               router.push("/home");
//             }
//           } else {
//             console.error("User document not found");
//             router.push("/login");
//           }
//         } catch (error) {
//           console.error("Error fetching user role:", error);
//           router.push("/login");
//         }
//       } else {
//         router.push("/login");
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (loading) return null; // or return a loader

//   return null;
// }

"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return <div></div>;
}
