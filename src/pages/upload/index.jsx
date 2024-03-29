import Mods from "@/pages/mods/card/Mods";

import { useState } from "react";
import { FiLink, FiUploadCloud } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { MdTitle } from "react-icons/md";
import { requireAuthentication } from "@/utils/requireAuthentication";
import { Title } from "../components/typography/Typography";
import { Navbar } from "../components/Components";

export default function Upload() {
  const [title, setTitle] = useState("without title");
  const [description, setDescription] = useState("without description");
  const [image, setImage] = useState("without thumbnail");
  const [videoId, setVideoId] = useState("without video");
  const [downloadLink, setDownloadLink] = useState("without link to download");
  const [category, setCategory] = useState("without category");

  const [imagePreview, setImagePreview] = useState(null);
  const [added, setAdded] = useState(false);

  const uploadDate = new Date().toISOString().split("T")[0];

  async function addModToDatabase() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        uploadDate: uploadDate,
        downloadLink: downloadLink,
        videoId: videoId,
        category: category,
        image: image,
      }),
    };

    if (title.length < 4) return;
    await fetch("http://localhost:3000/api/getmods", postData)
      .then((response) => response.json())
      .then((data) => console.log(data));

    setAdded(true);
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <main className="bg-60-white dark:bg-60-dark">
      <Navbar />
      <Title text={"Complete the form to upload your mod"} />
      <div className="flex items-start mt-10 justify-evenly ">
        <section>
          <main className="flex flex-col justify-center">
            <div className="w-full h-min mb-10 flex justify-center">
              <form className="w-[40rem] rounded ml-10 gap-4 flex flex-col bg-30-white dark:bg-30-dark text-60-dark dark:text-60-white p-10">
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
                    className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
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
                  className="input resize-none rounded-md bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-1 "
                />

                <label className="text-xl" htmlFor="category">
                  Category
                </label>

                <div className="relative">
                  <div className="input-icon">
                    <BiCategory />
                  </div>
                  <select
                    onChange={(event) => setCategory(event.target.value)}
                    className="input text-base font-semibold bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    id="category"
                  >
                    <option defaultValue={0}>Select a Category</option>
                    <option value="0" disabled>
                      ------------ Weapons and Skins ------------
                    </option>
                    <option value="pistols">Pistols</option>
                    <option value="rifles">Rifles</option>
                    <option value="snipers">Snipers</option>
                    <option value="submachines">Submachines</option>
                    <option value="shotguns">Shotguns</option>
                    <option value="knifes">Knifes</option>
                    <option value="gloves">Gloves</option>
                    <option value="0" disabled>
                      ------------ Server Side ------------
                    </option>
                    <option value="featured">Featured</option>
                    <option value="players-models">Players Models</option>
                    <option value="server-tools">Server Tools</option>
                    <option value="misc">Misc</option>
                  </select>
                </div>

                <label className="text-xl" htmlFor="youtube-link">
                  YouTube Video (Video ID)
                </label>
                <div className="relative">
                  <div className="input-icon">
                    <FiLink />
                  </div>
                  <input
                    onChange={(event) => setVideoId(event.target.value)}
                    required
                    className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
                    id="youtube-link"
                    type="text"
                  />
                </div>

                <label
                  className="text-xl flex-col w-full h-[6rem] flex items-center bg-60-white dark:bg-60-dark justify-center border-2 border-dashed border-indigo-600 rounded-xl cursor-pointer hover:text-10-white dark:hover:text-10-dark"
                  htmlFor="image"
                >
                  Select an image
                  <span className="text-xs text-gray-500/60">
                    or drag the file here
                  </span>
                </label>
                <input
                  required
                  onChange={(event) => {
                    onImageChange(event);
                    setImage(event.target.value);
                  }}
                  className="hidden bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400"
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
                    onChange={(event) => setDownloadLink(event.target.value)}
                    required
                    className="input bg-60-white dark:bg-60-dark w-full border border-60-dark focus:ring-2 focus:ring-indigo-400 p-3 pl-10"
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
          {added ? <h1>Success</h1> : null}
          <Mods
            title={title}
            description={description}
            src={imagePreview}
            category={category}
            href={""}
          />
          <button
            onClick={addModToDatabase}
            className="button-action w-full px-4 py-3 font-semibold rounded-md"
          >
            Upload mod
          </button>
        </section>
      </div>
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
