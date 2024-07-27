"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { addData } from "@/lib/firebase/firestore/user_apis";
import Loader from "@/components/loader/loader";

export default function Register() {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassowrd] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onClickSignup = async (e: any) => {
    e.preventDefault();
    try {
      setLoader(true);
      if (password == cPassword) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (result.user != null) {
          const data = {
            uid: auth.currentUser?.uid,
            name: name,
            email: email,
          };
          const isDataUploaded = await addData(
            "users",
            auth.currentUser?.uid,
            data
          );
          console.log(isDataUploaded);
          if (isDataUploaded != null) {
            router.replace("/user/dashboard");
            sessionStorage.setItem("user", "true");
          }
        } else {
          setError("sorry");
          console.log("sorry");

          setLoader(false);
        }
      } else {
        setError("Password and confirm password didn't match");
        setLoader(false);
      }
      // User signed up successfullys
    } catch (error) {
      console.log(error);
      setError("unknown error occured");
      setLoader(false);
    }
  };
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <section className="bg-slate-50 flex flex-col justify-center items-center h-screen w-screen">
          <div className="w-[400px] bg-white rounded-md border-black shadow-black flex flex-col items-center gap-2 p-10">
            <h3 className="text-3xl text-primary pb-2">REGISTER</h3>

            <Input
              placeholder="Full Name"
              type="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              hidden={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              hidden={true}
              value={cPassword}
              onChange={(e) => setCPassowrd(e.target.value)}
            />
            <Button className="w-full" onClick={onClickSignup}>
              Sign up
            </Button>
            {error && <p className=" text-red-600">{error}</p>}
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
      )}
    </div>
  );
}
