import { AiFillEye } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { BsChatRightDotsFill } from "react-icons/bs";
import { TbArrowBigUpLines, TbArrowBigDownLines } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

export default function Mods({
  uploadDate,
  title,
  description,
  href,
  category,
}) {
  const [isUpVoted, setIsUpVoted] = useState(true);
  const [isDownVoted, setIsDownVoted] = useState(true);

  function handleClickUpVote() {
    let upVote = document.getElementById("upVote");
    if (isUpVoted) {
      upVote.classList.add("up-vote");
      let downVote = document.getElementById("downVote");
      downVote.classList.remove("down-vote");
    } else {
      upVote.classList.remove("up-vote");
    }
  }

  function handleClickDownVote() {
    let downVote = document.getElementById("downVote");
    if (isDownVoted) {
      downVote.classList.add("down-vote");
      let upVote = document.getElementById("upVote");
      upVote.classList.remove("up-vote");
    } else {
      downVote.classList.remove("down-vote");
    }
  }

  return (
    <aside className="bg-30-white dark:bg-30-dark w-[30rem] flex rounded">
      <Link
        className="w-[46rem] text-60-white"
        href={{
          pathname: href,
        }}
      >
        <div className="relative">
          <div className="absolute bg-black/40 backdrop-blur-sm p-3 flex justify-between w-full">
            <div>
              <span>{uploadDate}</span>
              <h1 className="text-2xl font-bold py-4 truncate max-w-[25rem]">
                {title}
                <span className="ml-4 bg-10-white text-white dark:bg-10-dark uppercase text-base p-1 rounded">
                  {category}
                </span>
              </h1>
              <p className="text-base text-gray-300 pb-2 truncate max-w-[25rem]">
                {description}
              </p>
            </div>
            <div className="p-2">
              <span className="flex flex-col items-center gap-1">
                <button
                  id="upVote"
                  onClick={() => {
                    setIsUpVoted(!isUpVoted);
                    setIsDownVoted(true);
                    handleClickUpVote();
                  }}
                >
                  <TbArrowBigUpLines className="hover:text-red-500" size={25} />
                </button>
                <span className="text-xs">0</span>
                <button
                  id="downVote"
                  onClick={() => {
                    setIsDownVoted(!isDownVoted);
                    setIsUpVoted(true);
                    handleClickDownVote();
                  }}
                >
                  <TbArrowBigDownLines
                    className="hover:text-blue-500"
                    size={25}
                  />
                </button>
              </span>
            </div>
          </div>
          <img
            className="w-full h-[20rem] object-cover rounded-sm"
            src={"https://picsum.photos/200/300"}
          />
          <div className="flex justify-between font-semibold text-60-dark dark:text-60-white mt-3 p-4">
            <span className="flex items-center flex-col cursor-default">
              <span className="flex items-center gap-1">
                <AiFillEye />0
              </span>
              views
            </span>
            <span className="flex items-center flex-col cursor-default">
              <span className="flex items-center gap-1">
                <MdDownload />0
              </span>
              downloads
            </span>
            <span className="flex items-center flex-col cursor-default">
              <span className="flex items-center gap-1">
                <BsChatRightDotsFill />0
              </span>
              comments
            </span>
          </div>
        </div>
      </Link>
    </aside>
  );
}
