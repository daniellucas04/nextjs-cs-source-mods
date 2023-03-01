import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useEffect } from "react";

export default function Navbar() {
  const { data } = useSession();

  useEffect(() => {
    themeCheck();
  }, []);

  function iconToggle() {
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    moon.classList.toggle("display-none");
    sun.classList.toggle("display-none");
  }

  function themeCheck() {
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const userTheme = localStorage.getItem("theme");

    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      moon.classList.add("display-none");
      return;
    }
    sun.classList.add("display-none");
  }

  function changeTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  }

  return (
    <nav className="flex shadow-lg bg-primary-white dark:bg-primary-dark py-10  w-full items-center justify-between px-[5.5rem]">
      <Logo />
      <ul className="flex gap-10 text-typography-white dark:text-typography-dark items-center">
        <Link
          href="/mods/weapons"
          className="text-typography-white dark:text-typography-dark hover:text-typography-white/60"
        >
          Weapons
        </Link>
        <Link
          href="/mods/knifes"
          className="text-typography-white dark:text-typography-dark hover:text-typography-white/60"
        >
          Knifes
        </Link>
        <Link
          href="/mods/gloves"
          className="text-typography-white dark:text-typography-dark hover:text-typography-white/60"
        >
          Gloves
        </Link>
        <Link
          href="/mods/server-side"
          className="text-typography-white dark:text-typography-dark hover:text-typography-white/60"
        >
          Server side
        </Link>
        {data && (
          <Link
            href="/upload"
            className="bg-primary-white px-2 py-2 rounded-md ring-2 ring-indigo-800 text-typography-white hover:bg-black/5"
          >
            Upload your mod
          </Link>
        )}
      </ul>
      {data ? (
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-4">
            <span>
              <h1 className="text-xl text-typography-white dark:text-typography-dark">
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
            className="button-link text-typography-white bg-primary-white px-4 py-2 ring-2 ring-indigo-500 focus:ring-2 focus:ring-indigo-400 rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
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
      )}
      <div className="cursor-pointer bg-black dark:bg-white rounded-full p-2 transition-all ease-in-out">
        <CiLight
          id="sun"
          size={35}
          className="text-typographt-white"
          onClick={changeTheme}
        />

        <MdDarkMode
          id="moon"
          size={35}
          className="text-white"
          onClick={changeTheme}
        />
      </div>
    </nav>
  );
}
