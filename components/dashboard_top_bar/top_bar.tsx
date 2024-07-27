import icons from "@/lib/utils/icons";
import { FaCircleUser } from "react-icons/fa6";

export default function DashboardTopBar(){
    return(
        <section className="m-4 flex flex-row justify-end items-center text-primary text-3xl">
            <FaCircleUser />
        </section>
    );
}