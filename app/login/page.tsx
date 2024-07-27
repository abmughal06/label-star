"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSignin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password).then((e) => {
        if (e.user != null) {
          router.replace("/user/dashboard");
        } else {
          setError("Unknown error occured");
          setLoading(false);
        }
      });
    } catch (e: any) {
      setError("Unknown error occured");
      setLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="bg-slate-50 flex flex-col justify-center items-center h-screen w-screen">
          <div className="w-[400px] bg-white rounded-md border-black shadow-black flex flex-col items-center gap-2 p-10">
            <h3 className="text-3xl text-primary pb-2">LOGIN</h3>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              type="password"
              hidden={true}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button className="w-full" onClick={handleSignin}>
              Login
            </Button>
            {error && <p className=" text-red-600">{error}</p>}
            <p>
              Don&apos;t have an account?{" "}
              <span>
                <Link
                  href={"/register"}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Register here
                </Link>
              </span>{" "}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
