import { requireAuthentication } from "@/utils/requireAuthentication";
import { useSession } from "next-auth/react";
import { Navbar, Footer, HotContent } from "../components/Components";
import { Title } from "../components/typography/Typography";

export default function Profile() {
  const { data } = useSession();
  console.log(data?.user?.image);

  return (
    <main className="bg-60-white dark:bg-60-dark">
      <Navbar />
      <Title text={"Your mods"} />
      <HotContent img="https://imgs.search.brave.com/TODHgwtOHOpbDIiKLBJHYvP_kvnhLdS_3vlHfOwDx2c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jeWJl/cnBvc3QuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDkv/Y3MtMi5qcGc" />
      <div className="flex flex-col justify-center items-center">
        <Title text={"Profile options"} />
        <form className="w-[40rem] rounded gap-4 flex flex-col bg-30-white dark:bg-30-dark text-60-dark dark:text-60-white p-10">
          <div className="flex justify-center">
            <img
              className="rounded-full w-36"
              src={`${data?.user?.image}`}
              alt="User"
            />
          </div>
          <input className="hidden" id="image" type="file" />
          {data?.user?.image.includes("google") ||
          data?.user?.image.includes("discord") ? (
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
                  className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 disabled:opacity-40 disabled:hover:cursor-not-allowed"
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
                className=" input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 disabled:opacity-40 disabled:hover:cursor-not-allowed"
              />

              <label className="text-xl" htmlFor="youtube-link">
                Change password
              </label>

              <input
                disabled
                required
                className=" input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 disabled:opacity-40 disabled:hover:cursor-not-allowed"
              />

              <label className="text-xl" htmlFor="download_link">
                Confirm new password
              </label>
              <div className="relative">
                <div className="input-icon"></div>
                <input
                  disabled
                  className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10 disabled:opacity-40 disabled:hover:cursor-not-allowed"
                  type="text"
                />
              </div>
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
              <label className="text-xl" htmlFor="change-password">
                Change password
              </label>

              <input
                id="change-password"
                required
                className=" input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
              />

              <label className="text-xl" htmlFor="confirm-password">
                Confirm new password
              </label>
              <div className="relative">
                <div className="input-icon"></div>
                <input
                  id="confirm-password"
                  className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                  type="text"
                />
              </div>
            </>
          )}
        </form>
      </div>
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
