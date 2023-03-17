import { requireAuthentication } from "@/utils/requireAuthentication";
import { useSession } from "next-auth/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../typography/Title";

export default function Profile() {
  const { data } = useSession();
  const image = data.user.image;
  return (
    <main className="bg-60-white dark:bg-60-dark">
      <Navbar />
      <Title text={"Your mods"} />
      <section>Section for mods</section>
      <Title text={"Profile options"} />
      <form className="w-[40rem] rounded ml-10 gap-4 flex flex-col bg-30-white dark:bg-30-dark text-60-dark dark:text-60-white p-10">
        <label className="w-max" htmlFor="image">
          <div className="relative">
            <img
              className="rounded-full w-26 cursor-pointer"
              src={`${data?.user?.image}`}
              alt="User"
            />
            <span className="absolute cursor-pointer font-bold py-[3.5rem] left-0 right-0 -top-[1.6px] hover:rounded-full mx-auto my-auto text-center text-sm opacity-0 hover:opacity-100 hover:backdrop-brightness-50">
              Change avatar
            </span>
          </div>
        </label>
        <input className="hidden" id="image" type="file" />
        {image.includes("discord") ? (
          <>
            <h1 className="text-sm font-bold bg-10-white dark:bg-10-dark p-1 rounded-md w-max text-white">
              Discord or Google login cannot change their username, email or
              password
            </h1>
            <label className="text-xl" htmlFor="title">
              Username
            </label>
            <div className="relative">
              <div className="input-icon"></div>
              <input
                disabled
                value={`${data?.user?.name}`}
                onChange={(event) => setTitle(event.target.value)}
                className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 disabled:opacity-40"
                id="title"
                type="text"
              />
            </div>

            <label className="text-xl" htmlFor="description">
              Email
            </label>
            <input
              disabled
              required
              value={`${data?.user?.email}`}
              onChange={(event) => setDescription(event.target.value)}
              id="description"
              className=" input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 disabled:opacity-40"
            />
          </>
        ) : (
          <>
            <label className="text-xl" htmlFor="title">
              Username
            </label>
            <div className="relative">
              <div className="input-icon"></div>
              <input
                value={`${data?.user?.name}`}
                onChange={(event) => setTitle(event.target.value)}
                className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                id="title"
                type="text"
              />
            </div>

            <label className="text-xl" htmlFor="description">
              Email
            </label>
            <input
              required
              value={`${data?.user?.email}`}
              onChange={(event) => setDescription(event.target.value)}
              id="description"
              className=" input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 "
            />
          </>
        )}

        <label className="text-xl" htmlFor="youtube-link">
          Change password
        </label>

        <input
          required
          className=" input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
        />

        <label className="text-xl" htmlFor="download_link">
          Confirm new password
        </label>
        <div className="relative">
          <div className="input-icon"></div>
          <input
            className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
            type="text"
          />
        </div>
      </form>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(context) {
  return await requireAuthentication(context, (session) => {
    return {
      props: { session: null },
    };
  });
}
