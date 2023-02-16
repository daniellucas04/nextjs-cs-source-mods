import { AiFillEye } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { BsChatRightDotsFill } from "react-icons/bs";
import { TbArrowBigUpLines, TbArrowBigDownLines } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

export default function Mods({ title }) {
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
    <aside className="bg-light-dark w-[29rem] flex">
      <div className="h-full p-2 bg-secondary">
        <span className="flex flex-col items-center gap-1">
          <button
            id="upVote"
            onClick={() => {
              setIsUpVoted(!isUpVoted);
              setIsDownVoted(true);
              handleClickUpVote();
            }}
          >
            <TbArrowBigUpLines className="hover:text-red-500" size={20} />
          </button>
          <span className="text-xs">213</span>
          <button
            id="downVote"
            onClick={() => {
              setIsDownVoted(!isDownVoted);
              setIsUpVoted(true);
              handleClickDownVote();
            }}
          >
            <TbArrowBigDownLines className="hover:text-blue-500" size={20} />
          </button>
        </span>
      </div>
      <Link className="w-[46rem]" href={"/"}>
        <div className="px-4 w-full h-full">
          <span>
            <h1 className="text-xl font-bold py-3">
              {title}
            </h1>
            <img className="w-full" src="https://picsum.photos/1920/1080" />
          </span>
          <div className="flex justify-between mt-3 p-2">
            <span className="flex items-center flex-col cursor-default">
              <span className="flex items-center gap-1">
                <AiFillEye />
                1231
              </span>
              views
            </span>
            <span className="flex items-center flex-col cursor-default">
              <span className="flex items-center gap-1">
                <MdDownload />
                1231
              </span>
              downloads
            </span>
            <span className="flex items-center flex-col cursor-default">
              <span className="flex items-center gap-1">
                <BsChatRightDotsFill />
                1231
              </span>
              comments
            </span>
          </div>
        </div>
      </Link>
    </aside>
  );
}
