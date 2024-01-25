import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-items-center">
      <div className="w-full mx-auto py-24 bg-gradient-to-b from-orange-100 to-violet-400 border-b border-violet-600">
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
            className="mx-auto top-36 z-20 max-md:absolute md:flex shrink-0"
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
