import { themeCheck } from "@/utils/themeChanger";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./home_components/Homepage";

export default function Main() {
  useEffect(() => {
    themeCheck();
  }, []);

  return (
    <main className="h-screen bg-60-white dark:bg-60-dark">
      <Navbar />
      <div>
        <Homepage />
      </div>
      <Footer />
    </main>
  );
}
