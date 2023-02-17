import Link from "next/link";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"

export default function Footer(){
  
  const year = new Date().getFullYear();

  return(
    <div className="flex flex-col mt-36  items-center">
    <footer className="w-full bg-secondary flex pt-10 flex-col items-center h-[20rem]">
      <div className="flex gap-3">
        <a target={"_blank"} href={'https://github.com/daniellucas04/nextjs-cs-source-mods'} className="bg-black p-2 rounded-full cursor-pointer">
          <AiOutlineGithub size={23} />
        </a>
        <a target={"_blank"} href={''} className="bg-blue-400 p-2 rounded-full cursor-pointer">
          <AiOutlineTwitter size={23} />
        </a>
        <a target={"_blank"} href={''} className="bg-pink-600 p-2 rounded-full cursor-pointer">
          <AiOutlineInstagram size={23}/>
        </a>
        <a target={"_blank"} href={''} className="bg-red-700 p-2 rounded-full cursor-pointer">
          <AiOutlineYoutube size={23} />
        </a>
      </div>
      <div className="flex gap-10 items-center my-auto justify-center text-p-text">
        <span className="bg-secondary p-2 rounded-sm hover:text-s-text cursor-pointer">
          About us
        </span>
        <span className="hover:text-s-text cursor-pointer">
          Need Help?
        </span>
        <span className="hover:text-s-text cursor-pointer">
          Guide for upload mods
        </span>
        <span className="hover:text-s-text cursor-pointer">
          Terms of Use
        </span>
      </div>
    </footer>
      <div className="w-full h-6 bg-white flex justify-center items-center">
        <span className="text-primary font-bold">
          Copyright &copy; {year} Source Mods - All rights reserved
        </span>
      </div>
    </div>
  )
}
