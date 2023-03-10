import Link from "next/link";

export default function Footer() {
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
