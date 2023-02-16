import Link from "next/link"
import Footer from "./components/Footer"
import Navbar from "./Navbar"
import Homepage from "./home_components/Homepage"

const arrVideo = [0, 1, 2, 3]

export default function Main(){
  return(
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  )
}
