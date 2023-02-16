import WeaponList from "./WeaponList";
import Subtitle from "@/pages/typography/Subtitle";
import Mods from "../../mods_cards/Mods";

export default function WeaponPage(){

  return(
    <div className="flex gap-10 items-start">
    <section className="weapon-list ml-4 w-[15em]">
      <WeaponList />
    </section>
    <div className="flex justify-center w-full">
      <div className="flex justify-between gap-2 flex-col">
        <div className="flex items-center justify-center mt-10">
          <Subtitle text={"All weapons mods"} />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9,10].map((idx) => (
            <Mods key={idx} />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}