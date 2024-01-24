import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-between py-36 bg-gradient-to-b from-orange-100 to-violet-300">
      {/* <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex"> */}
        <div className="flex sm:flex-wrap justify-items-start sm:pl-2 md:pl-4">
          <Image
            className=""
            src="/sara_hero.png"
            alt="Sara Rue Hero Image"
            width={750}
            height={550}
            priority
          />
          <Image
            className="ml-6 sm:ml-4"
            src="/coming_soon.png"
            alt="Coming Soon!"
            width={550}
            height={650}
            priority
          />
        </div>
      {/* </div> */}
    </div>
  );
}
