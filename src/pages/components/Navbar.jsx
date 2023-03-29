import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import { Dropdown } from "flowbite-react";
import { IoIosSettings } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { changeTheme } from "@/utils/themeChanger";

export default function Navbar() {
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
