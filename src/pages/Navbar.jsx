import Link from "next/link";
import Logo from "./components/Logo";

// Change Theme Button

export default function Navbar() {
  return (
    <nav className="flex bg-secondary py-10 flex-wrap w-full items-center justify-between px-[5.5rem]">
      <Logo />
      <ul className="flex gap-10 items-center">
        <Link href="/mods/weapons" className="text-p-text hover:text-s-text">
          Weapons
        </Link>
        <Link href="/mods/knifes" className="text-p-text hover:text-s-text">
          Knifes
        </Link>
        <Link href="/mods/gloves" className="text-p-text hover:text-s-text">
          Gloves
        </Link>
        <Link href="/mods/server-side" className="text-p-text hover:text-s-text">
          Mods
        </Link>
        <Link href="/upload" className="text-p-text hover:text-s-text">
          Upload your mod
        </Link>
      </ul>
      <div className="flex gap-5 items-center">
        <Link
          href="/auth/login"
          className="button-link text-primary-text hover:text-secondary-text bg-primary px-4 py-2 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md"
        >
          Login
        </Link>
        <Link
          href="/auth/signup"
          className="button-link text-primary-text hover:text-secondary-text bg-primary px-4 py-2 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
