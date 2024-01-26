import Image from "next/image";

export default function Page() {
  return (
    <div className="flex w-full justify-between py-36 bg-gradient-to-b from-green-100 to-blue-500">
      <Image
            className="mx-auto top-36 z-5 max-xl:absolute shrink-0"
            src="/coming_soon.png"
            alt="Coming Soon!"
            width={550}
            height={650}
            priority
          />
    </div>
  );
}
