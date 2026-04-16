// "use client";

// import { auth } from "../lib/firebase";
// import { useTheme } from "../context/ThemeContext";

// export default function Header() {
//   return (
//     <div className="flex justify-between items-center mb-6">

//       <h2 className="text-xl font-semibold">
//         Welcome 👋
//       </h2>

//       <button
//         onClick={() => auth.signOut()}
//         className="bg-white px-4 py-2 rounded-lg shadow text-purple-600 hover:bg-purple-100"
//       >
//         Logout
//       </button>

//     </div>
//   );
// }
// "use client";

// import { auth } from "../lib/firebase";
// import { useTheme } from "../context/ThemeContext";

// export default function Header() {
//   const { dark, toggleTheme } = useTheme();

//   return (
//     <div className="flex justify-between items-center mb-6">

//       {/* LEFT SIDE */}
//       <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//         Welcome 👋
//       </h2>

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-3">

//         {/* DARK MODE TOGGLE */}
//         <button
//              onClick={toggleTheme}
//              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
//         >
//             {dark ? "☀️ Light" : "🌙 Dark"}
//         </button>

//         {/* LOGOUT BUTTON */}
//         <button
//           onClick={() => auth.signOut()}
//           className="px-4 py-2 rounded-lg bg-white shadow text-purple-600 
//                      hover:bg-gray-100 transition
//                      dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
//         >
//           Logout
//         </button>

//       </div>

//     </div>
//   );
// }

"use client";

import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // 👈 redirect after logout
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed");
    }
  };

  return (
    <div className="flex justify-between items-center mb-6">

      <h2 className="text-xl font-semibold text-gray-800">
        Welcome 👋
      </h2>

      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-white shadow text-purple-600 hover:bg-gray-100 transition"
      >
        Logout
      </button>

    </div>
  );
}