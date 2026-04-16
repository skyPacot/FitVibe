"use client";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { db, auth } from "../../lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [name, setName] = useState("");

  const loadWorkouts = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "workouts"),
      where("userId", "==", user.uid)
    );

    const snap = await getDocs(q);
    setWorkouts(snap.docs.map((d) => d.data()));
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  const addWorkout = async () => {
    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, "workouts"), {
      name,
      duration: "45 min",
      userId: user.uid,
      createdAt: new Date(),
    });

    setName("");
    loadWorkouts();
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Header />

        {/* INPUT */}
        <div className="flex gap-3 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Workout name"
            className="px-4 py-2 border rounded-lg"
          />

          <button
            onClick={addWorkout}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            + Add Workout
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">Workout</th>
                <th className="p-4">Duration</th>
              </tr>
            </thead>

            <tbody>
              {workouts.map((w, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{w.name}</td>
                  <td className="p-4">{w.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}