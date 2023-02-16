import Link from "next/link"

const weaponList = [
  {
   category: 'Pistols',
   weapons: ['USP', 'Glock', 'Desert Eagle', 'P228', 'Five-seven', 'Elites',]
  },
  {
    category: 'Rifles',
    weapons: ['Galil', 'Famas', 'AK-47', 'M4A1', 'SIG-552', 'AUG']
   },
   {
    category: 'Snipers',
    weapons: ['AWP', 'Scout', 'G3SG1', 'SIG 550']
   },
   {
    category: 'Submachines',
    weapons: ['MAC-10', 'UMP', 'MP5', 'P90', 'TMP',]
   },
   {
    category: 'Shotguns',
    weapons: ['M3', 'XM1014', 'M249']
   }
]

export default function WeaponList() {
  
  return(
    <>
      {weaponList.map((item, idx) => (
        <div key={idx} className="w-[7em] transition">
          <h1 className="text-base font-bold w-max flex p-1 cursor-default" >{item.category}</h1>
          <ul className="flex flex-col h-min gap-1 rounded-xl px-1">
            {item.weapons.map((weapon, idx) => (
              <Link href={`/weapons/usp`} className="text-sm ml-1 w-max text-primary-text hover:underline hover:text-secondary-text cursor-pointer" key={idx}>
                {weapon}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}