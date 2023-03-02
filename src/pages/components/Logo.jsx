import Link from "next/link";

export default function Logo() {
  return (
    <Link className="p-2 relative" href="/">
      <div>
        <span className="text-xl flex font-bold gap-10 uppercase text-10-white dark:text-10-dark">
          <span>Source</span> <span>Mods</span>
        </span>
      </div>
      <div className="-rotate-[90deg] absolute top-0 bottom-0 right-[3.5rem]">
        <img src={`https://i.imgur.com/A0J8ApZ.png`} alt="Logo" width={86} />
      </div>
    </Link>
  );
}
