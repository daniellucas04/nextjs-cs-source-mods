import Subtitle from "../typography/Subtitle";
import Title from "../typography/Title";
import Video from "./Video";
import HotContent from "./HotContent";

/* TODO
    [X] Cards de demonstração dos mods;
    [X] Criar um componente para pegar videos do YT dinamicamente
    [ ] Widget do Discord
*/

const arrVideo = [0, 1, 2, 3];

export default function Homepage() {
  return (
    <main className="w-full h-min bg-primary-white text-typography-white">
      <div className="w-full inline-block relative m-auto after:pt-[75%] after:block">
        {/* <img src="https://picsum.photos/1920/1080" alt="" /> */}
        <div className="absolute top-0 bottom-0 right-0 left-0 text-center">
          <section>
            <Title text={"Look out these community mods!"} />
          </section>
        </div>
        <section className="p-10 mt-20">
          <Subtitle title={"Hottest mods"} />
          <HotContent img={"https://i.imgur.com/3hBx2uC.jpeg"} />
        </section>
      </div>
    </main>
  );
}
