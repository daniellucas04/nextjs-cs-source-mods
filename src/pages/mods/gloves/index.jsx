import GlovesList from "./GlovesList";
import Mods from "../../mods_cards/Mods";
import Subtitle from "@/pages/typography/Subtitle";
import Navbar from "@/pages/Navbar";

export default function GlovesPage() {
  return (
    <>
    <Navbar />
      <div className="flex gap-10 items-start">
        <section className="weapon-list ml-4 w-[15em]">
          <GlovesList />
        </section>
        <div className="flex justify-center w-full">
          <div className="flex justify-between gap-2 flex-col">
            <div className="flex items-center justify-center mt-10">
              <Subtitle text={"All gloves mods"} />
            </div>
            <div className="mt-4 grid grid-cols-3 grid-rows-1 gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                <Mods key={idx} title={"Catch this mod"} description={"See the description"} src={"nada"} href={"/"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
