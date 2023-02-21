import Subtitle from "../typography/Subtitle";
import Title from "../typography/Title";
import Search from "../search/Search";
import Video from "./Video";
import HotContent from "./HotContent";

/* TODO
    [X] Cards de demonstração dos mods;
    [X] Criar um componente para pegar videos do YT dinamicamente
    [ ] Widget do Discord
    [ ] Imagens dos Mapas
*/

const arrVideo = [0, 1, 2, 3];

export default function Homepage() {
  return (
    <main className="w-full h-min">
      <div className="flex justify-end p-10">
        <Search placeholder={"css skin pack"} />
      </div>
      <div className="mt-1">
        <span className="flex justify-center">
          <Title text={"Look out these community videos!"} />
        </span>
        <section className="my-5 p-10">
          <Subtitle title={"New videos & clips"} />
          <div className="grid grid-cols-4 w-full grid-rows-1">
            {arrVideo.map((idx) => (
              <Video
                key={idx}
                title={"Highlight Video"}
                description={
                  "5k on de_mix_train_css5k on de_mix_train_css5k on de_mix_train_css5k on de_mix_train_css5k on de_mix_train_css"
                }
                src={"https://picsum.photos/1920/1080"}
              />
            ))}
          </div>
        </section>
        <section className="my-5 p-10">
          <Subtitle title={"Hottest mods"} />
          <HotContent img={"https://i.imgur.com/3hBx2uC.jpeg"} />
        </section>
      </div>
    </main>
  );
}
