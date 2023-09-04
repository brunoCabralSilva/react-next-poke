import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black flex items-end justify-start relative">
      <Nav />
      <h1 className="text-7xl text-white w-full relative z-10 font-bold px-10 py-10">
        Welcome
      </h1>
      <Image
        src="/images/pokeball.jpg"
        alt="Pokeball in the hand of someone"
        className="absolute w-full h-screen object-cover object-top"
        width={ 1280 }
        height={ 1184 }
      />
    </main>
  )
}
