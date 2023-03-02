import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  const { data } = useSession();

  return (
    <nav className="flex bg-60-white dark:bg-60-dark py-10 w-full items-center justify-between px-[5.5rem]">
      <Logo />
      <ul className="flex gap-10 text-30-dark dark:text-60-white items-center">
        <Link href="/mods/weapons" className="link-hover">
          Weapons
        </Link>
        <Link href="/mods/knifes" className="link-hover">
          Knifes
        </Link>
        <Link href="/mods/gloves" className="link-hover">
          Gloves
        </Link>
        <Link href="/mods/server-side" className="link-hover">
          Server side
        </Link>
        {data && (
          <Link
            href="/upload"
            className="button-action px-2 py-2 rounded-md shadow-md"
          >
            Upload your mod
          </Link>
        )}
      </ul>
      {data ? (
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-4">
            <span>
              <h1 className="text-xl text-60-dark dark:text-60-white">
                Hi, {data?.user?.name}
              </h1>
              <p className="text-xs text-gray-400">{data?.user?.email}</p>
            </span>

            <img
              className="rounded-full w-[4.0rem] h-[4.0rem]"
              src={data?.user?.image}
              alt="Profile picture"
            />
          </span>
          <button
            onClick={() => signOut()}
            className="button-action px-4 py-2 rounded-md shadow-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <Link
            href="/auth/login"
            className="button-action font-semibold px-5 py-2 rounded-md shadow-md"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="button-action font-semibold px-5 py-2 rounded-md shadow-md"
          >
            Sign Up
          </Link>
        </div>
      )}
      <ToggleTheme />
    </nav>
  );
}
