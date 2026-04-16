"use client";

import { db, auth } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function addWorkout(data: {
  name: string;
  sets: number;
  reps: number;
  duration: number;
}) {
  const user = auth.currentUser;
  if (!user) return;

  await addDoc(collection(db, "workouts"), {
    ...data,
    userId: user.uid,
    createdAt: new Date(),
  });
}

export async function addMeal(data: {
  name: string;
  calories: number;
}) {
  const user = auth.currentUser;
  if (!user) return;

  await addDoc(collection(db, "meals"), {
    ...data,
    userId: user.uid,
    createdAt: new Date(),
  });
}