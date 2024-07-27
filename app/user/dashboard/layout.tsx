"use client";

import DashboardSidePanel from "@/components/dashboard_side_panel/side_panel";
import DashboardTopBar from "@/components/dashboard_top_bar/top_bar";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";

export default function Dashboard({ children }: any) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged((currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        router.push("/login"); // Redirect to login page if not logged in
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  });

  useEffect(() => {
    if (user) {
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [user]);
  return (
    <main>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-row">
          <div className="w-[260px] fixed left-0">
            <DashboardSidePanel />
          </div>
          <div className="ml-[260px] w-full flex-1 bg-gray-100">
            <DashboardTopBar />
            <div className="w-full px-7 py-1 justify-center">{children}</div>
          </div>
        </div>
      )}
    </main>
  );
}
