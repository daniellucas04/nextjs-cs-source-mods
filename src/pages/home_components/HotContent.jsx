import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const arrHot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function HotContent({ img }) {
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
