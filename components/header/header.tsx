"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase/config";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const homeMenuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
    },
  ];

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
    <section
      id="header"
      className="px-16 py-4 flex flex-row justify-between items-center bg-primary"
    >
      <div className="text-3xl text-white">Label Star</div>
      <div className="flex flex-row gap-4 text-white">
        {homeMenuItems.map((e) => (
          <div key={e.path}>
            <Link href={e.path}>
              <h3
                className={`text-md hover:underline hover:text-yellow-300 cursor-pointer ${
                  e.path == pathname ? "text-yellow-300" : "text-white"
                }`}
              >
                {e.title}
              </h3>
            </Link>
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
  );
}
