import Link from "next/link";
import Image from "next/image";
import { CiLogin } from "react-icons/ci";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 bg-neutral-900 md:h-52 rounded-lg p-4 items-end">
        <h1 className="text-white text-2xl">LOGO</h1>
      </div>

      <div className="flex items-center grow mt-4 gap-4 flex-col md:flex-row">
        <div className="flex flex-col justify-center gap-6 bg-neutral-100 px-6 py-10 rounded-lg md:w-2/5">
          <p className="text-xl md:text-2xl md:leading-normal">
            <strong>Welcome to acme.</strong> This is the example for the{" "}
            <a
              href="https://www.nextjs.com"
              className="text-blue-900 underline"
            >
              Next.js learn course
            </a>
            , Brought to you by vercel.
          </p>

          <Link
            href="/login"
            className="flex self-center items-center gap-1 rounded-lg px-6 py-3 bg-neutral-900 text-white"
          >
            <span>Login</span> <CiLogin className="text-white text-xl" />
          </Link>
        </div>

        <div>
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="screenshots of the acme dashboard for desktop"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="screenshots of the acme dashboard for mobile"
          />
        </div>
      </div>
    </main>
  );
}
