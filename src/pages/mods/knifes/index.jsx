import Mods from "../../mods_cards/Mods";
import KnifeList from "./KnifesList";
import Subtitle from "@/pages/typography/Subtitle";
import Navbar from "@/pages/Navbar";
import { useEffect, useState } from "react";

export default function KnifePage() {
  const [mods, setMods] = useState([]);

  async function getMods() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await fetch("http://localhost:3000/api/getdata", postData);
    const response = await result.json();
    setMods(response.mods);
  }

  useEffect(() => {
    getMods();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex gap-10 items-start">
        <section className="weapon-list ml-4 w-[15em]">
          <KnifeList />
        </section>
        <div className="flex justify-center w-full">
          <div className="flex justify-between gap-2 flex-col">
            <div className="flex items-center justify-center mt-10">
              <Subtitle text={"All knifes mods"} />
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-5">
              {mods.map((mod) => (
                <Mods
                  key={mod.idMod}
                  uploadDate={mod.DataUpload}
                  title={mod.TituloMod}
                  description={mod.DescricaoMod}
                  src={"https://github.com/daniellucas04.png"}
                  href={"/"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
