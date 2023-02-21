import Link from "next/link";
import Logo from "./components/Logo";
import { getSession, signOut, useSession } from "next-auth/react";
// Change Theme Button

export default function Navbar() {
  const { data } = useSession();

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
        <Link
          href="/mods/server-side"
          className="text-p-text hover:text-s-text"
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
            <h1 className="text-xl">Hi, {data?.user?.name}</h1>
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
    </nav>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
