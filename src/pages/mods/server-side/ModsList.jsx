import Link from "next/link";

const modsList = [
  {
    category: "Featured",
    mods: [
      "Configs for CS",
      "Maps for CS",
      "Sprays for CS",
      "Menu backgrounds",
      "HUD for CS",
    ],
  },
  {
    category: "Players Model",
    mods: [
      "CT models",
      "T models",
      "CT/T packs",
      "Hostage skins",
      "Admin skins",
      "Zombie skins",
    ],
  },
  {
    category: "Server tools",
    mods: [
      "Server-side weapons",
      "Plugins for CS",
      "SorceMod plugins",
      "Server Anti-Cheats",
      "Ready-made servers",
    ],
  },
  {
    category: "Misc",
    mods: [
      "Sounds",
      "Flashlights",
      "Programs",
      "Scopes",
      "Effects",
      "Blood decals",
    ],
  },
];

export default function ModsList() {
  return (
    <>
      {modsList.map((item, idx) => (
        <div key={idx} className="w-[7em] transition">
          <h1 className="text-base text-60-dark dark:text-60-white font-bold flex w-max p-1 cursor-default">
            {item.category}
          </h1>
          <ul className="flex flex-col h-min gap-1 rounded-xl px-1">
            {item.mods.map((mod, idx) => (
              <Link
                href={""}
                className="text-sm w-max ml-1 text-60-dark dark:text-60-white text-primary-text hover:underline hover:text-secondary-text cursor-pointer"
                key={idx}
              >
                {mod}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
