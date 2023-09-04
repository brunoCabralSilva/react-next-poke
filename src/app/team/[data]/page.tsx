import Nav from '@/components/nav';
import Image from 'next/image';

export default function DataTeam({ params } : { params: { data: string } }) {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen w-full p-3 text-white text-8xl relative">
      <Image
        src={`/images/${ params.data }.jpg`}
        alt="Pokeball in the hand of someone"
        className="absolute w-full h-screen object-cover object-top"
        width={ 1280 }
        height={ 1184 }
      />
      <Nav />
    </div>
  );
}
