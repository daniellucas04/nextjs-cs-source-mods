import Link from "next/link";

const glovesList = [
  {
   gloves: 'Bloodhound Gloves',
  },
  {
    gloves: 'Broken Fang Gloves',
   },
   {
    gloves: 'Driver Gloves',
   },
   {
    gloves: 'Hand Wraps',
   },
   {
    gloves: 'Hydra Gloves',

   },
   {
    gloves:'Moto Gloves',
   },
   {
    gloves:'Specialist Gloves',
   },
   {
    gloves:'Sport Gloves',
   },
]
export default function GlovesList(){
  return(
    <>
    <h1 className="text-base font-bold">Gloves</h1>
      <ul className="flex flex-col h-min gap-1 rounded-xl px-1">
        {glovesList.map((item, idx) => (
          <Link href={`/weapons/usp`} className="text-sm ml-1 w-max text-primary-text hover:underline hover:text-secondary-text cursor-pointer" key={idx}>
            {item.gloves}
          </Link>
        ))}
      </ul>
    </>
      )
    }