import Subtitle from "../typography/Subtitle";
import HotContent from "./HotContent";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Title from "../typography/Title";
import Video from "./Video";

export default function Homepage() {
  return (
    <main className="w-full h-full">
      <header className="relative">
        <img
          className="brightness-50"
          src={
            "https://imgs.search.brave.com/s5J5CIVuZmH5ll6xUQ95G5x_lTjUN9qaKshmgokYxVQ/rs:fit:1200:564:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8ta1Z1VkJTSkRU/WmcvVGlKRXJvelpn/aUkvQUFBQUFBQUFC/cG8vSFZPbndvZ2ls/QkEvczE2MDAvQ291/bnRlci1TdHJpa2Ut/MkQtTWFwLWdnLWJh/dHRsZWZpZWxkXzIu/anBn"
          }
          width={1860}
        />
        <div className="absolute top-[30%] left-44 w-[85rem] flex justify-between">
          <div>
            <h1 className="text-60-white text-6xl w-[28rem] break-words">
              The best place to change{" "}
              <span className="text-[#cc3184] dark:text-10-dark">
                your game!
              </span>
            </h1>
            <div>
              <Link
                href={"/mods/weapons"}
                className="absolute -bottom-14 text-center bg-[#cc3184] hover:bg-[#cc3184]/80 dark:bg-10-dark dark:hover:bg-10-dark/80 text-60-white px-2 py-2 rounded-md shadow-md w-[19rem] h-[3rem] font-bold text-2xl"
              >
                Find now
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-60-white text-6xl">
              Here you{" "}
              <span className="text-[#cc3184] dark:text-10-dark">can</span>
            </h1>
            <ul className="text-xl font-semibold flex flex-col gap-2">
              <li className="text-lg">
                <span className="text-[#cc3184] dark:text-10-dark text-2xl">
                  Show
                </span>{" "}
                your best mod for the community
              </li>
              <li className="text-lg">
                <span className="text-[#cc3184] dark:text-10-dark text-2xl">
                  Make
                </span>{" "}
                your game more beautiful
              </li>
              <li className="text-lg">
                <span className="text-[#cc3184] dark:text-10-dark text-2xl">
                  Find
                </span>{" "}
                your favorite mod with facility
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="p-5 mt-10 bg-60-white dark:bg-60-dark px-14">
        <Title text={"Here are some tutorials if you are new!"} />
        <article className="text-60-dark dark:text-60-white ml-12 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mt-4">How can I upload a mod?</h1>
          <p className="text-lg break-keep w-[32rem]">
            What you have to do is{" "}
            <Link
              className="text-10-white dark:text-10-dark hover:underline decoration-10-white dark:decoration-10-dark"
              href={"/auth/login"}
            >
              login
            </Link>{" "}
            in the website or{" "}
            <Link
              className="text-10-white dark:text-10-dark hover:underline decoration-10-white dark:decoration-10-dark"
              href={"/auth/signup"}
            >
              signup
            </Link>{" "}
            if you don't have an account. After that, follow these steps:{" "}
          </p>
          <ul className="list-decimal ml-5 text-lg">
            <li>
              Go to the{" "}
              <Link
                className="text-10-white dark:text-10-dark hover:underline decoration-10-white dark:decoration-10-dark"
                href={"/upload"}
              >
                upload page
              </Link>
            </li>
            <li>Complete the form</li>
            <li>Click on the upload button</li>
          </ul>
          <p className="text-lg break-keep w-[32rem]">
            Thats it! You should be able to find your mod on the list or your{" "}
            <Link
              className="text-10-white dark:text-10-dark hover:underline decoration-10-white dark:decoration-10-dark"
              href={"/profile"}
            >
              profile page
            </Link>
          </p>
          <hr className="border-t-1 border-10-white dark:border-10-dark mt-4 opacity-25" />
        </article>
        <article className="text-60-dark dark:text-60-white ml-12 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mt-4">How can I download a mod?</h1>
          <li className="text-xl font-bold list-disc">Without filter</li>
          <ul className="list-decimal ml-5 text-lg">
            <li>
              Go to the{" "}
              <span className="text-10-white dark:text-10-dark">navbar</span>{" "}
              and find the category you want
            </li>
            <li>You should view a list with all the mods of this category</li>
            <li>Click in a mod you most liked</li>
            <li>In the mod page find the download button and click</li>
            <li>
              You been sended to a external link with the archive to download
            </li>
            <li>Take a coffe ☕ and just wait to finish your download</li>
          </ul>
          <li className="text-xl font-bold list-disc">With filter</li>
          <ul className="list-decimal ml-5 text-lg">
            <li>
              Go to the{" "}
              <span className="text-10-white dark:text-10-dark">navbar</span>{" "}
              and find the category you want
            </li>
            <li>You should view a list with all the mods of this category</li>
            <li>
              In the left side you will see a bunch of names. First separe the
              large names for categories and the little for the items
            </li>
            <li>Find the category and after find the item</li>
            <li>
              The list will be updated with only mods who has the category you
              choose
            </li>
            <li>
              Now you can click on a mod and go from step 4 onwards of the{" "}
              <span className="font-bold">Without Filter</span>
            </li>
          </ul>
          <hr className="border-t-1 border-10-white dark:border-10-dark mt-4 opacity-25" />
        </article>
        <article className="text-60-dark dark:text-60-white ml-12 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mt-4">
            How can I use a mod in my game?
          </h1>
          <h2 className="text-xl font-bold mt-4">
            We have a video for this, be prepared ☕
          </h2>
          <Video src={"M3d9D876nIA"} height="450" width="750" />
        </article>
      </section>
    </main>
  );
}
