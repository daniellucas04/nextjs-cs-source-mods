import { useState } from "react";
import { FiLink, FiUploadCloud } from "react-icons/fi";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { MdTitle } from "react-icons/md";
import { getSession } from "next-auth/react";
import { requireAuthentication } from "@/utils/requireAuthentication";
import Title from "@/pages/typography/Title";
import Mods from "@/pages/mods_cards/Mods";
import Subtitle from "../typography/Subtitle";
import Navbar from "../Navbar";

export default function Upload() {
  const [title, setTitle] = useState("without title");
  const [description, setDescription] = useState("without description");
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <>
      <Navbar />
      <Title text={"Complete the form to upload your mod"} />
      <div className="flex items-center justify-evenly">
        <section>
          <main className="flex flex-col items-center justify-center">
            <div className="w-full h-screen flex justify-center items-center">
              <form
                onSubmit={handleSubmit}
                className="w-[40rem] rounded ml-10 gap-4 flex flex-col bg-secondary p-10"
              >
                <label className="text-xl" htmlFor="title">
                  Title
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <MdTitle />
                  </div>
                  <input
                    onChange={(event) => setTitle(event.target.value)}
                    className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    id="title"
                    type="text"
                  />
                </div>

                <label className="text-xl" htmlFor="description">
                  Description
                </label>
                <textarea
                  onChange={(event) => setDescription(event.target.value)}
                  id="description"
                  cols="30"
                  rows="10"
                  className="resize-none rounded bg-primary ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-1 "
                />

                <label className="text-xl" htmlFor="youtube-link">
                  Video URL (Video ID)
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <FiLink />
                  </div>
                  <input
                    className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    id="youtube-link"
                    type="text"
                  />
                </div>

                <label className="text-xl" htmlFor="image">
                  Image
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <BsFillFileEarmarkImageFill />
                  </div>
                  <input
                    onChange={onImageChange}
                    className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    id="image"
                    type="file"
                  />
                </div>

                <label className="text-xl" htmlFor="download_link">
                  Download link
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <FiUploadCloud />
                  </div>
                  <input
                    className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    type="text"
                    id="download_link"
                  />
                </div>
                <button className="button-link text-primary-text hover:text-secondary-text bg-primary px-4 py-2 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md">
                  Upload mod
                </button>
              </form>
            </div>
          </main>
        </section>

        {/* Preview section */}
        <section className="flex flex-col items-center gap-2">
          <Subtitle title={"Card Preview"} />
          <Mods title={title} description={description} src={image} href={""} />
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
