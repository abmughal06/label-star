"use client";

import { getDocument } from "@/lib/firebase/firestore/user_apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";

export default function DashboardSidePanel() {
  const [userName, setUserName] = useState("");

  const getUserData = async () => {
    const user = await getDocument("users", auth.currentUser?.uid);
    if (user != null) {
      console.log(user);
      const a: string = user?.result?.data()!.name;
      setUserName(a);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <section className="w-[260px] h-screen bg-primary text-white">
      <Link href={"/"}>
        <h2 className="pt-8 pb-1 text-yellow-300 text-2xl flex justify-center items-center">
          LABEL STAR
        </h2>
      </Link>
      <h3 className="flex justify-center items-center text-lg font-medium">
        {userName}
      </h3>
      <div className="h-[0.5px] bg-gray-300 w-full mt-8 mb-4"></div>
      {[
        "Dahboard",
        "Create Label",
        "Bulk Label",
        "Recent Label",
        "Recharge",
      ].map((e) => (
        <div key={e}>
          <h3>{e}</h3>
        </div>
      ))}
    </section>
  );
}
