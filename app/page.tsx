import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section
        id="header"
        className="px-16 py-4 flex flex-row justify-between items-center bg-primary"
      >
        <div className="text-3xl text-white">Label Star</div>
        <div className="flex flex-row gap-3 text-white">
          {["Home", "About", "Pricing", "Privacy Policy"].map((e) => (
            <div key={e}>
              <h3 className="text-md hover:underline hover:opacity-80 cursor-pointer">
                {e}
              </h3>
            </div>
          ))}
          <Link href={"/login"}>
            <h3 className="text-md hover:underline hover:opacity-80 cursor-pointer text-yellow-300">
              Login/Signup
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
}
