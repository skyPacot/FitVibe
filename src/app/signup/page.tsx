"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-100">
      <div className="bg-white p-8 rounded-3xl w-[350px] shadow-xl">

        <h1 className="text-2xl font-bold text-purple-600 mb-5">
          Create Account 💜
        </h1>

        <input
          className="w-full p-3 border rounded-xl mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 border rounded-xl mb-5"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-purple-600 text-white p-3 rounded-xl"
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}