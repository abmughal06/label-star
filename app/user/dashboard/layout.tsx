"use client";

import DashboardSidePanel from "@/components/dashboard_side_panel/side_panel";
import DashboardTopBar from "@/components/dashboard_top_bar/top_bar";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { usePathname, useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";

export default function Dashboard({ children }: any) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

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


  const menuItems = [
    {
      title: "Dashboard",
      path: "/user/dashboard",
    },
    {
      title: "Create Single Label",
      path: "/user/dashboard/create_label",
    },
    {
      title: "Bulk Labels",
      path: "/user/dashboard/bulk_labels",
    },
    {
      title: "Recent Labels",
      path: "/user/dashboard/recent_label",
    },
    {
      title: "Subscription Plans",
      path: "/user/dashboard/plans",
    },
  ];

  return (
    <main>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex min-h-screen">
          <div className="w-64 fixed h-full">
            <DashboardSidePanel />
          </div>
          <div className="ml-64 flex-1 bg-gray-100 shadow overflow-hidden">
            <DashboardTopBar title={menuItems.find((e)=> pathname == e.path)?.title}/>
            <div className="px-7 py-1 justify-center">
              {children}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
