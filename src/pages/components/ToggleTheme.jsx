import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useEffect } from "react";

export default function ToggleTheme() {
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
    <div className="cursor-pointer bg-60-dark dark:bg-60-white rounded-full p-2 transition-all ease-in-out">
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
  );
}
