import WeaponList from "./WeaponList";
import Subtitle from "@/pages/typography/Subtitle";
import Mods from "../../mods_cards/Mods";
import Navbar from "@/pages/components/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/pages/components/Footer";

export default function WeaponPage() {
  const [weapons, setWeapons] = useState([]);

  async function getMods() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await fetch(
      "http://localhost:3000/api/getweapons",
      postData
    );
    const response = await result.json();
    setWeapons(response.weapons);
  }

  useEffect(() => {
    getMods();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex gap-10 items-start bg-60-white dark:bg-60-dark">
        <section className="weapon-list ml-4 w-[15em]">
          <WeaponList />
        </section>
        <div className="flex justify-center w-full">
          <div className="flex justify-between gap-2 flex-col">
            <div className="flex items-center justify-center mt-10">
              <Subtitle title={"All weapons mods"} />
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-5">
              {weapons.map((weapon) => (
                <Mods
                  key={weapon.IdMod}
                  title={weapon.Title}
                  description={weapon.Description}
                  src={weapon.Thumbnail}
                  category={weapon.Category}
                  href={`/mods/${weapon.Title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
