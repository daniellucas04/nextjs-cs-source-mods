import Link from "next/link";
import Youtube from "react-youtube";

import {
  MdOutlineArrowBackIosNew,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { Dropdown } from "flowbite-react";
import { IoIosSettings } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { changeTheme } from "@/utils/themeChanger";

export function Navbar() {
  const { data } = useSession();
  const router = useRouter();

  function redirectUser() {
    router.push("/profile");
  }

  return (
    <nav
      id="target-navbar"
      className="flex bg-60-white dark:bg-60-dark py-10 w-full items-center justify-between px-[5.5rem]"
    >
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
        <div className="flex gap-1 items-center md:order-2">
          <img
            className="h-16 rounded-full"
            src={data?.user?.image}
            alt="user photo"
          />
          <Dropdown color="light" label="Profile">
            <Dropdown.Header>
              <span className="block text-sm">{data?.user?.name}</span>
              <span className="block truncate text-sm font-medium">
                {data?.user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={redirectUser} icon={IoIosSettings}>
              Options
            </Dropdown.Item>
            <Dropdown.Item icon={FaExchangeAlt} onClick={changeTheme}>
              Change Theme
            </Dropdown.Item>
            <Dropdown.Item onClick={signOut} icon={BiLogOut}>
              Sign Out
            </Dropdown.Item>
          </Dropdown>
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
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 bg-60-white md:flex md:items-center md:justify-between md:p-6 dark:bg-60-dark">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {year}{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          CSS: Mods™
        </a>
        . All Rights Reserved. <span className="font-bold">MIT License</span>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export function BackButton({ text, href }) {
  return (
    <Link
      href={href}
      className="text-lg font-bold ml-4 mt-3 flex gap-1 items-center"
    >
      <MdOutlineArrowBackIosNew size={20} /> {text}
    </Link>
  );
}

export function Logo() {
  return (
    <Link className="p-2 relative" href="/">
      <div>
        <span className="text-xl flex font-bold gap-10 uppercase text-10-white dark:text-10-dark">
          <span>Source</span> <span>Mods</span>
        </span>
      </div>
      <div className="-rotate-[90deg] absolute top-0 bottom-0 right-[3.5rem]">
        <img src={`https://i.imgur.com/A0J8ApZ.png`} alt="Logo" width={86} />
      </div>
    </Link>
  );
}

export function Video({ src, width, height }) {
  const opts = {
    height: height,
    width: width,
  };

  return (
    <div className="bg-primary rounded-sm">
      <div className="mt-4">
        <Youtube videoId={src} opts={opts} />
      </div>
    </div>
  );
}

const arrHot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export function HotContent({ img }) {
  function slideLeft() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  }

  function slideRight() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  }

  return (
    <>
      <div className="relative flex items-center bg-30-white dark:bg-30-dark py-2">
        <MdChevronLeft
          className="opacity-50 cursor-pointer text-60-dark dark:text-60-white hover:opacity-100"
          onClick={slideLeft}
          size={60}
        />
        <Link
          href="/mods"
          id="slider"
          className="w-full flex scrollbar-hide h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {arrHot.map((idx) => (
            <img
              key={idx}
              src={img}
              className="w-[420px] h-[250px] inline-block p-2 hover:scale-105 ease-in-out duration-300"
            />
          ))}
        </Link>
        <MdChevronRight
          className="opacity-50 cursor-pointer text-60-dark dark:text-60-white hover:opacity-100"
          onClick={slideRight}
          size={60}
        />
      </div>
    </>
  );
}
