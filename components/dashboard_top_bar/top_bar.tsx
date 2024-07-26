import icons from "@/lib/utils/icons";
import Image from "next/image";

export default function DashboardTopBar(){
    return(
        <section className="p-2 px-4 flex flex-row justify-end items-center">
            <Image src={icons.profileIcon} width={32} height={32} alt="Profile Icon"/>
        </section>
    );
}