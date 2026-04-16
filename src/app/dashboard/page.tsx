
// "use client";

// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
// import { useState, useEffect } from "react";
// import { db, auth } from "../../lib/firebase";
// import {
//   addDoc,
//   collection,
//   getDocs,
//   query,
//   where,
// } from "firebase/firestore";

// export default function Dashboard() {
//   const [food, setFood] = useState("");
//   const [foods, setFoods] = useState<any[]>([]);
//   const [quote, setQuote] = useState("");

//   // 🔹 LOAD FOODS
//   const loadFoods = async () => {
//     const user = auth.currentUser;
//     if (!user) return;

//     const q = query(
//       collection(db, "foods"),
//       where("userId", "==", user.uid)
//     );

//     const snap = await getDocs(q);
//     setFoods(snap.docs.map((d) => d.data()));
//   };

//   useEffect(() => {
//     loadFoods();
//   }, []);

  

//   //  ADD FOOD
//   const addFood = async () => {
//     const user = auth.currentUser;
//     if (!user) return alert("Not logged in");

//     if (!food) return;

//     await addDoc(collection(db, "foods"), {
//       name: food,
//       userId: user.uid,
//       createdAt: new Date(),
//     });

//     setFood("");
//     loadFoods();
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen">

//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* MAIN */}
//       <div className="flex-1 p-8">

//         <Header />

//         {/* STATS */}
//         <div className="grid grid-cols-3 gap-6 mb-8">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-400 text-sm">Workouts</p>
//             <h2 className="text-2xl font-bold text-purple-600">12</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-400 text-sm">Calories</p>
//             <h2 className="text-2xl font-bold text-purple-600">2400</h2>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="text-gray-400 text-sm">Streak</p>
//             <h2 className="text-2xl font-bold text-purple-600">5 days</h2>
//           </div>

//         </div>

//         {/* CHART + ACHIEVEMENTS */}
//         <div className="grid grid-cols-3 gap-6">

//           {/* CHART */}
//           <div className="col-span-2 bg-white p-6 rounded-xl shadow">
//             <h2 className="font-semibold text-purple-600 mb-4">
//               Weekly Progress
//             </h2>

//             <div className="flex items-end gap-3 h-40">
//               <div className="bg-purple-300 w-8 h-20 rounded"></div>
//               <div className="bg-purple-400 w-8 h-28 rounded"></div>
//               <div className="bg-purple-500 w-8 h-16 rounded"></div>
//               <div className="bg-purple-600 w-8 h-32 rounded"></div>
//               <div className="bg-purple-700 w-8 h-24 rounded"></div>
//             </div>
//           </div>

//           {/* ACHIEVEMENTS */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="font-semibold text-purple-600 mb-4">
//               Achievements
//             </h2>

//             <div className="grid grid-cols-3 gap-3 text-center">
//               <div className="bg-purple-100 p-3 rounded-lg">🏆</div>
//               <div className="bg-purple-100 p-3 rounded-lg">🔥</div>
//               <div className="bg-purple-100 p-3 rounded-lg">💪</div>
//               <div className="bg-purple-100 p-3 rounded-lg">⭐</div>
//               <div className="bg-purple-100 p-3 rounded-lg">🚀</div>
//               <div className="bg-purple-100 p-3 rounded-lg">🥇</div>
//             </div>
//           </div>

//         </div>

//         {/* 🔥 NUTRITION QUICK LOG (FUNCTIONAL) */}
//         <div className="bg-white p-6 rounded-xl shadow mt-6">

//           <h2 className="font-semibold text-purple-600 mb-4">
//             Nutrition Quick Log
//           </h2>

//           <div className="flex gap-3 mb-3">
//             <input
//               value={food}
//               onChange={(e) => setFood(e.target.value)}
//               placeholder="Enter food..."
//               className="w-full p-3 border rounded-lg"
//             />

//             <button
//               onClick={addFood}
//               className="bg-purple-600 text-white px-4 rounded-lg"
//             >
//               Add
//             </button>
//           </div>

//           <div className="space-y-2 text-sm text-gray-600">
//             {foods.length === 0 ? (
//               <p>No food logged</p>
//             ) : (
//               foods.map((f, i) => (
//                 <div key={i} className="border-b py-1">
//                   🍽️ {f.name}
//                 </div>
//               ))
//             )}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { db, auth } from "../../lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [food, setFood] = useState("");
  const [foods, setFoods] = useState<any[]>([]);
  const [quote, setQuote] = useState("");

  const loadFoods = async () => {
    const snap = await getDocs(collection(db, "foods"));
    setFoods(snap.docs.map((doc) => doc.data()));
  };

  const addFood = async () => {
    if (!food) return;

    await addDoc(collection(db, "foods"), {
      name: food,
      createdAt: new Date(),
    });

    setFood("");
    loadFoods();
  };

  const loadQuote = async () => {
    try {
        const res = await fetch("/api/quote");

        const data = await res.json();

        setQuote(data.quote);
    } catch (err) {
        console.error(err);
        setQuote("Stay focused 💪");
    }
  };


  useEffect(() => {
    loadFoods();
    loadQuote();
    loadCalories();
    loadWeights();
  }, []);

  const [calories, setCalories] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);
  const [weight, setWeight] = useState("");
  const [weights, setWeights] = useState<any[]>([]);

  const addCalories = async () => {
    if (!calories) return;

    await addDoc(collection(db, "calories"), {
        value: Number(calories),
        createdAt: new Date(),
    });

    setCalories("");
    loadCalories();
  };

  const loadCalories = async () => {
    const snap = await getDocs(collection(db, "calories"));

    const data = snap.docs.map((doc) => doc.data());

    const total = data.reduce((sum, item: any) => sum + item.value, 0);

    setTotalCalories(total);
  };


  const addWeight = async () => {
    if (!weight) return;

    await addDoc(collection(db, "weights"), {
        value: Number(weight),
        createdAt: new Date(),
    });

    setWeight("");
    loadWeights();
  };

  const loadWeights = async () => {
    const snap = await getDocs(collection(db, "weights"));
    setWeights(snap.docs.map((doc) => doc.data()));
  } ;


  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Header />

        <h1 className="text-xl font-semibold mb-6">Dashboard</h1>

        {/* API */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-purple-600 font-semibold mb-2">
            Motivation 💬
          </h2>
          <p className="text-sm text-gray-600">
            {quote || "Loading..."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">

        {/* CALORIE TRACKER */}
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-purple-600 mb-4">
                Calorie Intake 🔥
            </h2>

            <input
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Enter calories"
                type="number"
                className="w-full p-3 border rounded mb-3"
            />

            <button
                onClick={addCalories}
                className="bg-purple-600 text-white px-4 py-2 rounded"
            >
                Add Calories
            </button>

            <p className="mt-3 text-sm text-gray-600">
                Total: {totalCalories} kcal
            </p>
        </div>

        {/* WEIGHT TRACKER */}
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-purple-600 mb-4">
             Weight Tracker ⚖️
            </h2>

            <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight (kg)"
                type="number"
                className="w-full p-3 border rounded mb-3"
            />

            <button
                onClick={addWeight}
                className="bg-purple-600 text-white px-4 py-2 rounded"
            >
                Add Weight
            </button>

            <div className="mt-3 text-sm text-gray-600">
                {weights.map((w, i) => (
                    <p key={i}>⚖️ {w.value} kg</p>
                ))}
                </div>
            </div>

        </div>

        {/* FOOD LOG */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-purple-600 font-semibold mb-4">
            Nutrition Quick Log
          </h2>

          <div className="flex gap-3 mb-3">
            <input
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter food..."
              className="w-full p-3 border rounded"
            />

            <button
              onClick={addFood}
              className="bg-purple-600 text-white px-4 rounded"
            >
              Add
            </button>
          </div>

          {foods.map((f, i) => (
            <div key={i} className="border-b py-2 text-sm">
              🍽️ {f.name}
            </div>
          ))}

        </div>

      </div>
    </div>
    
  );
}