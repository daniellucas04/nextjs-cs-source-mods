import { useSession } from "next-auth/react";
import { FcCalendar } from "react-icons/fc";
import query from "@/lib/database";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Video from "../home_components/Video";

export default function modPage({ getMod }) {
  const { data } = useSession();

  return (
    <main className="bg-60-white dark:bg-60-dark">
      <Navbar />
      <div className="flex justify-between mt-10">
        {getMod.map((item) => (
          <div key={item.IdMod} className="ml-10">
            <h1 className="text-4xl text-60-dark dark:text-60-white underline decoration-10-white dark:decoration-10-dark">
              {item.Title}
            </h1>
            <div className="text-10-white dark:text-10-dark text-md flex items-center mt-2 gap-4">
              <span className="flex gap-2 text-xl items-center">
                <img
                  src={data?.user?.image}
                  className="rounded-full h-14"
                  alt="user"
                />
                {data?.user?.name}
              </span>
              <span className="flex gap-2 items-center">
                <FcCalendar />
                {item.UploadDate}
              </span>
            </div>
            <img
              className="h-[25rem] mt-4 rounded-md border border-30-white dark:border-30-dark"
              src={"https://i.imgur.com/3hBx2uC.jpeg"}
              alt="mod"
            />
            {item.VideoId ? (
              <>
                <h1 className="text-2xl mt-4 underline decoration-10-white dark:decoration-10-dark">
                  YouTube Video
                </h1>
                <Video src={item.VideoId} width={"711"} height={"400"} />
              </>
            ) : (
              <></>
            )}
            <div className="w-[40rem] mt-4 mb-6 text-xl border rounded-md border-30-white dark:border-30-dark shadow-md min-h-max p-4 flex flex-col gap-4">
              <h1 className="text-2xl underline decoration-30-white dark:decoration-30-dark text-10-white dark:text-10-dark">
                Mod description
              </h1>
              <p className="text-60-dark dark:text-60-white">
                {item.Description}
              </p>
            </div>
            <Link
              className="button-action px-10 py-4 rounded-md shadow-md font-semibold"
              href={item.DownloadLink}
              target="_blank"
            >
              Download
            </Link>
          </div>
        ))}
        <section className="mr-4 fixed right-0 bottom-4 rounded-md text-60-dark dark:text-60-white bg-[#1e2124]">
          <h1 className="text-2xl text-center p-1 text-60-white underline decoration-10-white dark:decoration-10-dark">
            Discord Server
          </h1>
          <iframe
            className="rounded-md mt-1"
            src="https://discord.com/widget?id=951266069341954108&theme=dark&username=Lei"
            width="350"
            height="600"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </section>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const param = context.query.title;
  const getMod = await query({
    query: "SELECT * FROM mods WHERE Title = ?",
    values: [param],
  });

  return {
    props: {
      getMod,
    },
  };
}
