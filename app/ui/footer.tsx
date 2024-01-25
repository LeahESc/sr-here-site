import Link from 'next/link';
import Image from 'next/image';
import { XMarkIcon, CameraIcon } from '@heroicons/react/24/solid';
import { poppins } from './fonts';

export default function Footer() {
  const links = [
    { name: 'Instagram',
      href: 'https://www.instagram.com/sararue', 
      icon: '/instagram.png' 
    },
    {
      name: 'X',
      href: 'https://twitter.com/sararueforreal?lang=en',
      icon: '/x.png',
    },
  ];
  return (
    <div className="bg-violet-400 mx-auto p-3 justify-content-center fixed w-full bottom-0 end-0 border-b border-pink-200">
      <div className="flex place-content-center mr-4 space-x-8 p-4 md:p-0 font-medium sm:space-x-2 md:space-x-8">
        {links.map(link => (
            <Link 
              key={link.name}
              href={link.href}
              className="flex inline-block"
            >
              <span className={`hover:text-orange-100`}>
              <Image
                className=""
                src={link.icon}
                alt={link.name}
                width={25}
                height={25}
                priority
              />
              </span>
            </Link>
        ))}
      </div>
  </div>
  );
}


