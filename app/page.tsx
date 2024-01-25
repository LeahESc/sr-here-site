import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full justify-items-center">
      <div className="w-full mx-auto pt-24 bg-gradient-to-b from-rose-100 to-pink-600 border-b border-pink-600">
        <div className="md:flex md:flex-wrap mx-auto">
          <Image
            className="mx-auto shrink-0"
            src="/sara_hero.png"
            alt="Sara Rue Hero Image"
            width={750}
            height={550}
            priority
          />
          <Image
            className="mx-auto top-36 z-5 max-xl:absolute shrink-0"
            src="/coming_soon.png"
            alt="Coming Soon!"
            width={550}
            height={650}
            priority
          />
        </div>
      </div>
      <div className="w-full mx-auto pt-24 bg-gradient-to-b from-rose-100 to-orange-600 border-b border-violet-600">
        <div className="md:flex md:flex-wrap mx-auto">
          <Image
            className="mx-auto shrink-0"
            src="/sara_hero.png"
            alt="Sara Rue Hero Image"
            width={750}
            height={550}
            priority
          />
          <Image
            className="z-5 sm:relative shrink-0"
            src="/coming_soon.png"
            alt="Coming Soon!"
            width={550}
            height={650}
            priority
          />
        </div>
      </div>
    </div>
  );
}
