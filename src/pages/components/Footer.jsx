import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-secondary">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {year}{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          CSS: Mods™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link href="#" class="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
