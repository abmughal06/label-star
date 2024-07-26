"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  });

  return (
    <main className="">
      <section
        id="header"
        className="px-16 py-4 flex flex-row justify-between items-center bg-primary"
      >
        <div className="text-3xl text-white">Label Star</div>
        <div className="flex flex-row gap-3 text-white">
          {["Home", "About", "Pricing", "Privacy Policy"].map((e) => (
            <div key={e}>
              <h3 className="text-md hover:underline hover:opacity-80 cursor-pointer">
                {e}
              </h3>
            </div>
          ))}
          {user == null ? (
            <Link href={"/login"}>
              <h3 className="text-md hover:underline hover:opacity-80 cursor-pointer text-yellow-300">
                Login/Signup
              </h3>
            </Link>
          ) : (
            <Link href={"/user/dashboard"}>
              <h3 className="text-md hover:underline hover:opacity-80 cursor-pointer text-yellow-300">
                Dashboard
              </h3>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
