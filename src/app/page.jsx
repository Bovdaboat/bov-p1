import Image from 'next/image'
import Navbar from "@/app/comp/Navbar";
import Hero from "@/app/comp/Hero";
import Footer from "@/app/comp/Footer";


export default function Home() {
  return (
      <>
    <Navbar />
          <Hero />
          <Footer />
        </>
  )
}
