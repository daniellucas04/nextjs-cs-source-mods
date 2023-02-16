import Link from "next/link"

const knifeList = [
  {
    category: "Knifes",
    knife: [
      "Nomad Knife",
      "Skeleton Knife", 
      "Survival Knife", 
      "Paracord Knife", 
      "Classic Knife", 
      "Bayonet Knife",
      "Bowie Knife",
      "Butterfly Knife",
      "Falchion Knife",
      "Flip Knife",
      "Gut Knife",
      "Huntsman Knife",
      "Karambit Knife",
      "M9 Bayonet Knife",
      "Navaja Knife",
      "Shadow Daggers Knife",
      "Stilleto Knife",
      "Talon Knife",
      "Ursus Knife"
    ]  
  }
]

export default function KnifeList() {
  
  return(
    <>
      {knifeList.map((item, idx) => (
        <div key={idx} className="w-[7em] transition">
          <h1 className="text-base font-bold w-max flex p-1 cursor-default" >{item.category}</h1>
          <ul className="flex flex-col h-min gap-1 rounded-xl px-1">
            {item.knife.map((knife, idx) => (
              <Link href={`/knifes/usp`} className="text-sm ml-1 w-max text-primary-text hover:underline hover:text-secondary-text cursor-pointer" key={idx}>
                {knife}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}