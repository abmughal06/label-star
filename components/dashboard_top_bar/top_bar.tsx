"use client"

import { FaCircleUser } from "react-icons/fa6";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { auth } from "@/lib/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function DashboardTopBar({ title }: any) {
  const router = useRouter();
  const handleSignout = async () => {
    try {
      await signOut(auth).then((e: any) => {
        if (e) {
          router.replace("/");
        }
      });
    } catch (e) {}
  };
  return (
    <section className=" m-4 flex flex-row justify-between items-center text-primary text-3xl">
      <h2 className="text-2xl font-medium">{title}</h2>
      <Menubar className="bg-transparent border-none p-0 shadow-none">
        <MenubarMenu>
          <MenubarTrigger>
            <FaCircleUser className="text-3xl" />
          </MenubarTrigger>
          <MenubarContent className="mr-5">
            <MenubarItem className="cursor-pointer">Profile Settings</MenubarItem>
            <MenubarItem onClick={handleSignout} className="cursor-pointer">
              <span className="text-red-500">
                Signout
              </span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </section>
  );
}
