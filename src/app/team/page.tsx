import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"

export default function Team() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen w-full p-3">
      <Nav />
      <div className="w-full bg-black text-white text-center border-2 border-white px-2 py-3 text-4xl flex items-center justify-center h-40 mb-3">
        <h1>Choose your Team</h1>
      </div>
      <div className="grid grid-cols-3 text-white h-70vh gap-3 w-full">
        <Link
          href="/team/instinct"
          className="border-2 border-white hover:border-yellow-700"
        >
          <Image
            src="/images/instinct.jpg"
            alt="instinct"
            className="h-96 object-cover"
            width={ 1280 }
            height={ 720 }
          />
        </Link>
        <Link
          href="/team/valor"
          className="border-2 border-white hover:border-red-700 cursor-pointer"
        >
          <Image
            src="/images/valor.jpg"
            alt="valor"
            className="h-96 object-cover"
            width={ 1280 }
            height={ 720 }
          />
        </Link>
        <Link
          href="/team/mystic"
          className="border-2 border-white hover:border-blue-700"
        >
          <Image
            src="/images/mystic.jpg"
            alt="mystic"
            className="h-96 object-cover"
            width={ 1280 }
            height={ 720 }
          />
        </Link>
      </div>
    </div>
  )
}
  