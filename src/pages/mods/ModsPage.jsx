import Subtitle from "../typography/Subtitle";
import Mods from "../mods_cards/Mods";
import ModsList from "./ModsList";

export default function ModsPage(){
  return(
    <div className="flex gap-10 items-start">
      <section className="weapon-list ml-4 w-[15em]">
        <ModsList />
      </section>
      <div className="flex justify-center w-full">
        <div className="flex justify-between gap-2 flex-col">
          <div className="flex items-center justify-center mt-10">
            <Subtitle text={"All mods"} />
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