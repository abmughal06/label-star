"use client";

import { getDocument } from "@/lib/firebase/firestore/user_apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { usePathname } from "next/navigation";
import { FaPix } from "react-icons/fa6";

export default function DashboardSidePanel() {
  const [userName, setUserName] = useState("");
  const pathname = usePathname();

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

  const menuItems = [
    {
      title: "Dashboard",
      path: "/user/dashboard",
    },
    {
      title: "Create Label",
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
      title: "Plans",
      path: "/user/dashboard/plans",
    },
  ];

  return (
    <section className="w-[260px] h-screen bg-primary text-white">
      <div className="px-5">
        <Link href={"/"}>
          <h2 className="pt-8 pb-1 text-white text-2xl font-semibold">
            LABEL STAR
          </h2>
        </Link>
        <h3 className="text-yellow-300 text-md font-medium">{`Welcome ${userName? userName: "..."}`}</h3>
      </div>
      <div className="h-[0.5px] bg-gray-300 w-full mt-8 mb-4"></div>
      {menuItems.map((e) => (
        <SidePanelTile
          key={e.path}
          path={e.path}
          title={e.title}
          selected={pathname == e.path}
        />
      ))}
    </section>
  );
}

function SidePanelTile({ title, path, selected }: any) {
  return (
    <Link href={path}>
      <div
        className={`flex flex-row items-center justify-start gap-5 p-3 my-2 mx-4 cursor-pointer text-sm font-medium ${
          selected ? "text-black" : "text-white"
        } ${selected ? "bg-yellow-300" : "bg-transparent"}`}
      >
        <FaPix />
        <h1>{title}</h1>
      </div>
    </Link>
  );
}
