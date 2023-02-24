import { useState } from "react";
import { FiLink, FiUploadCloud } from "react-icons/fi";
import { BsImage } from "react-icons/bs";
import { MdTitle } from "react-icons/md";
import { requireAuthentication } from "@/utils/requireAuthentication";
import Title from "@/pages/typography/Title";
import Mods from "@/pages/mods_cards/Mods";
import Navbar from "../Navbar";

export default function Upload() {
  const [title, setTitle] = useState("without title");
  const [description, setDescription] = useState("without description");
  const [videoID, setVideoID] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
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
      <div className="flex items-start mt-10 justify-evenly">
        <section>
          <main className="flex flex-col justify-center">
            <div className="w-full h-min mb-10 flex justify-center">
              <form className="w-[40rem] rounded ml-10 gap-4 flex flex-col bg-secondary p-10">
                <label className="text-xl" htmlFor="title">
                  Title
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <MdTitle />
                  </div>
                  <input
                    required
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
                  required
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
                    required
                    className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    id="youtube-link"
                    type="text"
                  />
                </div>

                <label
                  className="text-xl flex-col w-full h-[6rem] flex items-center bg-primary justify-center border-2 border-dashed border-indigo-600 rounded-xl cursor-pointer hover:text-indigo-300 transition-colors ease-in-out"
                  htmlFor="image"
                >
                  Select an image
                  <span className="text-xs text-gray-400/60">
                    or drag the file here
                  </span>
                </label>
                <input
                  required
                  onChange={onImageChange}
                  className="hidden bg-primary p-4 pl-10 w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400"
                  id="image"
                  type="file"
                />

                <label className="text-xl" htmlFor="download_link">
                  Download link
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <FiUploadCloud />
                  </div>
                  <input
                    required
                    className="input bg-primary w-full ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    type="text"
                    id="download_link"
                  />
                </div>
              </form>
            </div>
          </main>
        </section>

        {/* Preview section */}
        <section className="flex flex-col items-center gap-2">
          <Mods title={title} description={description} src={image} href={""} />
          <button
            onClick={handleSubmit}
            className="bg-white text-s-text dark:bg-secondary dark:text-white hover:dark:text-s-text font-bold hover:text-p-text w-full px-4 py-2 ring-1 ring-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md"
          >
            Upload mod
          </button>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return await requireAuthentication(context, (session) => {
    return {
      props: { session: null },
    };
  });
}
