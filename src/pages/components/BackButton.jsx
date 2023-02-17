import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from 'next/link'

export default function BackButton({ text, href }){
  return(
    <Link
        href={href}
        className="text-lg font-bold ml-4 mt-3 flex gap-1 items-center"
      >
        <MdOutlineArrowBackIosNew size={20} /> {text}
    </Link>
  )
}