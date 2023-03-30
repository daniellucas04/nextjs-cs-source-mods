import { serverSide, knifes, gloves, weapons } from "./modsList";
import { Subtitle } from "@/pages/components/typography/Typography";
import { Navbar } from "@/pages/components/Components";
import Link from "next/link";
import Mods from "@/pages/mods/card/Mods";
import { useEffect, useState } from "react";

export default function List() {
  // const [knifes, setKnifes] = useState([]);

  // async function getMods() {
  //   const postData = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const result = await fetch("http://localhost:3000/api/getknifes", postData);
  //   const response = await result.json();
  //   setKnifes(response.knifes);
  // }

  // useEffect(() => {
  //   getMods();
  // }, []);
  console.log(knifes);

  return (
    <>
      <Navbar />
      <div className="flex gap-10 items-start bg-60-white dark:bg-60-dark">
        <section className="weapon-list ml-4 w-[15em]">
          {/* <ModSummary modInList={knifes} /> */}
        </section>
        <div className="flex justify-center w-full">
          <div className="flex justify-between gap-2 flex-col">
            <div className="flex items-center justify-center mt-10">
              <Subtitle title={"All gloves mods"} />
            </div>
            <div className="mt-4 grid grid-cols-3 grid-rows-1 gap-5">
              {/* {[0, 1, 2, 3, 4, 5].map((knife) => (
                <Mods
                  key={knife.IdMod}
                  uploadDate={knife.UploadDate.split("T")[0]}
                  title={knife.Title}
                  description={knife.Description}
                  category={knife.Category}
                  src={knife.Thumbnail}
                  href={`/mods/${knife.Title}`}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ModSummary({ modInList }) {
  return (
    <div>
      {modInList.map((item, idx) => (
        <div key={idx} className="w-[7em] transition">
          <h1 className="text-base text-60-dark dark:text-60-white font-bold flex w-max p-1 cursor-default">
            {item.category}
          </h1>
          <ul className="flex flex-col h-min gap-1 rounded-xl px-1">
            {item.modInList.map((idx) => (
              <Link
                href={""}
                className="text-sm w-max ml-1 text-60-dark dark:text-60-white text-primary-text hover:underline hover:text-secondary-text cursor-pointer"
                key={idx}
              >
                {knife}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
