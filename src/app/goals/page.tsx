// "use client";

// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";

// export default function GoalsPage() {
//   const goals = [
//     { name: "Weight Loss", progress: 70 },
//     { name: "Muscle Gain", progress: 45 },
//     { name: "Cardio Endurance", progress: 60 },
//   ];

//   return (
//     <div className="flex bg-gray-100 min-h-screen">

//       <Sidebar />

//       <div className="flex-1 p-8">

//         <Header />

//         <h1 className="text-xl font-semibold mb-6">Goals</h1>

//         {/* GOALS GRID */}
//         <div className="grid grid-cols-3 gap-6">

//           {goals.map((goal, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow text-center">

//               {/* CIRCLE */}
//               <div className="relative w-32 h-32 mx-auto mb-4">

//                 <div className="w-full h-full rounded-full border-[10px] border-purple-200"></div>

//                 <div
//                   className="absolute top-0 left-0 w-full h-full rounded-full border-[10px] border-purple-600"
//                   style={{
//                     clipPath: `inset(${100 - goal.progress}% 0 0 0)`,
//                   }}
//                 ></div>

//                 <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-purple-700">
//                   {goal.progress}%
//                 </div>

//               </div>

//               <h2 className="font-semibold">{goal.name}</h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 Progress toward goal
//               </p>

//             </div>
//           ))}

//         </div>

//         {/* ADD GOAL */}
//         <div className="mt-8 bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold text-purple-600 mb-4">
//             Add New Goal
//           </h2>

//           <input
//             placeholder="Goal name"
//             className="w-full p-3 border rounded-lg mb-3"
//           />

//           <input
//             type="number"
//             placeholder="Target (%)"
//             className="w-full p-3 border rounded-lg mb-3"
//           />

//           <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
//             Add Goal
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";
import { db, auth } from "../../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function GoalsPage() {
  const [goalName, setGoalName] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const addGoal = async () => {
    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, "goals"), {
      name: goalName,
      targetDate,
      userId: user.uid,
    });

    setGoalName("");
    setTargetDate("");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Header />

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-purple-600 mb-4">
            Add Goal
          </h2>

          <input
            placeholder="Goal name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3"
          />

          <input
            type="date"
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3"
          />

          <button
            onClick={addGoal}
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            Add Goal
          </button>
        </div>
      </div>
    </div>
  );
}