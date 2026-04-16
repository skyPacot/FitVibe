// "use client";

// import { useRouter } from "next/navigation";

// export default function Sidebar() {
//   const router = useRouter();

//   const menu = [
//     "Dashboard",
//     "Workout Logs",
//     "Meal Plans",
//     "Goals",
//     "Friends",
//     "Settings",
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-purple-900 text-white p-6">

//       <h1 className="text-2xl font-bold mb-8">FitVibe</h1>

//       <div className="space-y-3">
//         {menu.map((item) => (
//           <button
//             key={item}
//             className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-700 transition"
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Workout Logs", path: "/workouts" },
    { name: "Meal Plans", path: "/meals" },
    { name: "Goals", path: "/goals" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-purple-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">FitVibe</h1>

      <div className="space-y-3">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => router.push(item.path)}  // ✅ THIS IS THE FIX
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {item.name}
          </button>
        ))}
      </div>

    </div>
  );
}