import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./home_components/Homepage";

export default function Main() {
  return (
    <main className="h-screen bg-60-white dark:bg-60-dark">
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}
