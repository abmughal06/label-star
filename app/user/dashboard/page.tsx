"use client";

import DashboardSidePanel from "@/components/dashboard_side_panel/side_panel";
import DashboardTopBar from "@/components/dashboard_top_bar/top_bar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setLoading] = useState();
  const handleSignOut = async () => {
    try {
      await signOut(auth).then((e) => {
        router.replace("/");
      });
    } catch (e) {}
  };
  return (
    <section className="flex flex-row">
      
    </section>
  );
}
