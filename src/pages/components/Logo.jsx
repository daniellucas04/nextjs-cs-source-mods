import Link from "next/link";
// import Image from "next/image";

export default function Logo(){
  return(
    <Link className="p-2 relative" href='/'>
        <div className="">
          <span className="text-xl flex gap-10 uppercase text-indigo-400">
            <span>Source</span> <span>Mods</span>
          </span>
        </div>
        <div className="-rotate-[90deg] absolute top-0 bottom-0 right-[3.5rem]">
          {/* <Image src="/../../assets/m9_logo.jpg" alt="Logo" width={20} height={20} /> */}
        </div>
    </Link>
  )
}