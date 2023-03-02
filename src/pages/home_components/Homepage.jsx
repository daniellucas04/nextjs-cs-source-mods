import Subtitle from "../typography/Subtitle";
import Title from "../typography/Title";
import Video from "./Video";
import HotContent from "./HotContent";

/* TODO
    [X] Cards de demonstração dos mods;
    [X] Criar um componente para pegar videos do YT dinamicamente
    [ ] Widget do Discord
*/

export default function Homepage() {
  return (
    <main className="w-full h-max">
      <Title text={"Look out these community mods!"} />
      <section className="p-5 mt-10">
        <Subtitle title={"Hottest mods"} />
        <HotContent img={"https://i.imgur.com/3hBx2uC.jpeg"} />
      </section>
    </main>
  );
}
