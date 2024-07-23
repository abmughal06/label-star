import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login(){
    return(
        <section className="bg-slate-50 flex flex-col justify-center items-center h-screen w-screen">
        <div className="w-[400px] bg-white rounded-md border-black shadow-black flex flex-col items-center gap-2 p-10">
          <h3 className="text-3xl text-primary pb-2">REGISTER</h3>
          <Input placeholder="Full Name" type="name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" hidden={true} />
          <Input placeholder="Confirm Password" type="password" hidden={true} />
          <Button className="w-full">Sign up</Button>
          <p>
            Already have an account?{" "}
            <span>
              <Link
                href={"/login"}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Login here
              </Link>
            </span>{" "}
          </p>
        </div>
      </section>
    );
}