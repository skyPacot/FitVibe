
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

// export default function MealsPage() {
//   const [queryText, setQueryText] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [savedMeals, setSavedMeals] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // 🔍 SEARCH API
//   const searchFood = async () => {
//     if (!queryText) return alert("Enter a food name");

//     try {
//       setLoading(true);

//       const res = await fetch(
//         `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${queryText}&search_simple=1&json=1`
//       );

//       const data = await res.json();

//       setResults(data.products?.slice(0, 6) || []);
//     } catch (error) {
//       console.error(error);
//       alert("API error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 💾 SAVE TO FIREBASE
//   const saveMeal = async (item: any) => {
//     const user = auth.currentUser;
//     if (!user) return alert("Not logged in");

//     await addDoc(collection(db, "meals"), {
//       name: item.product_name || "Unknown",
//       calories: item.nutriments?.energy_kcal || 0,
//       userId: user.uid,
//       createdAt: new Date(),
//     });

//     loadMeals(); // refresh
//   };

//   // 📥 LOAD SAVED MEALS
//   const loadMeals = async () => {
//     const user = auth.currentUser;
//     if (!user) return;

//     const q = query(
//       collection(db, "meals"),
//       where("userId", "==", user.uid)
//     );

//     const snap = await getDocs(q);
//     setSavedMeals(snap.docs.map((d) => d.data()));
//   };

//   useEffect(() => {
//     loadMeals();
//   }, []);

//   return (
//     <div className="flex bg-gray-100 min-h-screen">

//       <Sidebar />

//       <div className="flex-1 p-8">

//         <Header />

//         <h1 className="text-xl font-semibold mb-6">Meal Plans</h1>

//         {/* SEARCH */}
//         <div className="bg-white p-6 rounded-xl shadow mb-6">

//           <h2 className="font-semibold text-purple-600 mb-4">
//             Food Search (API)
//           </h2>

//           <div className="flex gap-3">
//             <input
//               placeholder="e.g. chicken"
//               className="w-full p-3 border rounded-lg"
//               onChange={(e) => setQueryText(e.target.value)}
//             />

//             <button
//               onClick={searchFood}
//               className="bg-purple-600 text-white px-4 rounded-lg"
//             >
//               Search
//             </button>
//           </div>

//           {loading && <p className="mt-3 text-sm">Loading...</p>}

//           {/* RESULTS */}
//           <div className="mt-4 space-y-3 text-sm">

//             {results.map((item, i) => (
//               <div
//                 key={i}
//                 className="p-4 border rounded-lg bg-gray-50"
//               >
//                 <p className="font-semibold">
//                   {item.product_name || "Unknown"}
//                 </p>

//                 <p className="text-gray-500">
//                   Calories: {item.nutriments?.energy_kcal || "N/A"}
//                 </p>

//                 <button
//                   onClick={() => saveMeal(item)}
//                   className="text-purple-600 text-xs mt-2"
//                 >
//                   Save Meal
//                 </button>
//               </div>
//             ))}

//           </div>

//         </div>

//         {/* SAVED MEALS */}
//         <div className="bg-white p-6 rounded-xl shadow">

//           <h2 className="font-semibold text-purple-600 mb-4">
//             Saved Meals
//           </h2>

//           {savedMeals.length === 0 ? (
//             <p className="text-gray-400">No meals saved yet</p>
//           ) : (
//             savedMeals.map((meal, i) => (
//               <div key={i} className="border-b py-2 text-sm">
//                 {meal.name} — {meal.calories} kcal
//               </div>
//             ))
//           )}

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

export default function MealsPage() {
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [meals, setMeals] = useState<any[]>([]);

  const loadMeals = async () => {
    const snap = await getDocs(collection(db, "meals"));
    setMeals(snap.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const addMeal = async () => {
    if (!mealName || !calories) return alert("Fill all fields");

    await addDoc(collection(db, "meals"), {
      name: mealName,
      calories: Number(calories),
    });

    setMealName("");
    setCalories("");
    loadMeals();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Header />

        <h1 className="text-xl font-semibold mb-6">Meal Planner</h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <input
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Meal name"
            className="w-full p-3 border rounded mb-3"
          />

          <input
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Calories"
            type="number"
            className="w-full p-3 border rounded mb-3"
          />

          <button
            onClick={addMeal}
            className="w-full bg-purple-600 text-white py-2 rounded"
          >
            Add Meal
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          {meals.map((meal, i) => (
            <div key={i} className="border-b py-2 flex justify-between">
              <span>{meal.name}</span>
              <span>{meal.calories} kcal</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}