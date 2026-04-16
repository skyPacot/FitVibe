// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "@/lib/firebase";
// import { auth } from "../../lib/firebase";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push("/dashboard");
//     } catch (err: any) {
//       alert("Invalid login");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-purple-100">
//       <div className="bg-white p-8 rounded-3xl w-[350px] shadow-xl">

//         <h1 className="text-2xl font-bold text-purple-600 mb-5">
//           Login 💜
//         </h1>

//         <input
//           className="w-full p-3 border rounded-xl mb-3"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           className="w-full p-3 border rounded-xl mb-5"
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-purple-600 text-white p-3 rounded-xl"
//         >
//           Login
//         </button>

//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../lib/firebase";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push("/dashboard");
//     } catch (err: any) {
//       console.log("FIREBASE ERROR:", err.code, err.message);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4">
//       <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
//           <p className="text-sm text-gray-400 mt-2">
//             Sign in to continue to your dashboard
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label className="text-sm text-gray-300">Email</label>
//             <input
//               type="email"
//               className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-300">Password</label>
//             <input
//               type="password"
//               className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && (
//             <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium text-white disabled:opacity-50"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-xs text-gray-500 mt-6">
//           Secure login powered by Firebase Authentication
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-200" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-400 blur-3xl opacity-30 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 blur-3xl opacity-20 rounded-full" />

      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative z-10">
        <div className="text-center">

          <h1 className="text-6xl font-extrabold text-purple-700 tracking-tight">
            FitVibe 💜
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Track your fitness journey
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Stay consistent. Stay strong.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">

        <div className="w-full max-w-md p-8">

          <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8">

            {/* HEADER */}
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back
            </h1>
            <p className="text-gray-500 mt-1 mb-6">
              Login to continue your progress
            </p>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 mb-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD */}
            <div className="relative mb-5">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-sm text-gray-500"
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition shadow-md active:scale-[0.98]"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* SIGNUP */}
            <p className="text-sm text-center text-gray-500 mt-6">
              Don’t have an account?{" "}
              <span
                onClick={() => router.push("/signup")}
                className="text-purple-600 font-semibold cursor-pointer"
              >
                Sign up
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}