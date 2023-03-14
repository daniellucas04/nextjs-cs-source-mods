import Subtitle from "../typography/Subtitle";
import HotContent from "./HotContent";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Title from "../typography/Title";

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
            <h1 className="text-60-white text-6xl w-[20rem] break-words">
              The best website to show your mod!
            </h1>
            <div>
              <BsArrowDownRight
                size={50}
                className="absolute bottom-1 left-40 text-10-white dark:text-10-dark"
              />
              <Link
                href={"/upload"}
                className="absolute text-center left-[10rem] button-action px-2 py-2 rounded-md shadow-md w-[14rem] h-[3rem] font-bold text-2xl"
              >
                Upload mods
              </Link>
            </div>
          </div>
          <div>
            <Title text={"Here you can"} />
          </div>
        </div>
      </header>
      <section className="p-5 mt-10">
        <Subtitle title={"Hottest mods"} />
        <HotContent img={"https://i.imgur.com/3hBx2uC.jpeg"} />
      </section>
    </main>
  );
}
