import Link from "next/link";
import Logo from "./components/Logo";
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
    <nav className="flex bg-white dark:bg-secondary py-10 flex-wrap w-full items-center justify-between px-[5.5rem]">
      <Logo />
      <ul className="flex gap-10 text-dark dark:text-white items-center">
        <Link
          href="/mods/weapons"
          className="text-black dark:text-white hover:text-s-text"
        >
          Weapons
        </Link>
        <Link
          href="/mods/knifes"
          className="text-black dark:text-white hover:text-s-text"
        >
          Knifes
        </Link>
        <Link
          href="/mods/gloves"
          className="text-black dark:text-white hover:text-s-text"
        >
          Gloves
        </Link>
        <Link
          href="/mods/server-side"
          className="text-black dark:text-white hover:text-s-text"
        >
          Mods
        </Link>
        {data && (
          <Link
            href="/upload"
            className="bg-primary px-2 py-2 rounded-md ring-1 ring-indigo-400 text-p-text hover:text-indigo-200"
          >
            Upload your mod
          </Link>
        )}
      </ul>
      {data ? (
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-4">
            <span>
              <h1 className="text-xl text-black dark:text-white">
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
            className="button-link text-primary-text hover:text-secondary-text bg-primary px-4 py-2 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md"
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
          className="text-black"
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
