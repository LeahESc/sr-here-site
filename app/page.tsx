import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-between py-20 bg-gradient-to-b from-violet-100 to-violet-400">
      {/* <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex"> */}
        <div className="flex justify-items-start pl-4">
          <Image
            className="md:3/5 hover:drop-shadow"
            src="/sara_hero.png"
            alt="Sara Rue Hero Image"
            width={580}
            height={700}
            priority
          />
        </div>
      {/* </div> */}
    </div>
  );
}
