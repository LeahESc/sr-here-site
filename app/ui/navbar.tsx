'use client';
import Link from 'next/link';
import { poppins } from './fonts';
import clsx from 'clsx'; 
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname()
  const links = [
    { name: 'HOME',
      href: '/', 
      // icon: HomeIcon 
    },
    {
      name: 'ABOUT',
      href: '/about',
      // icon: DocumentDuplicateIcon,
    },
    { 
      name: 'WORK',
      href: '/work',
      // icon: UserGroupIcon 
    },
    { 
      name: 'PICKLE',
      href: '/pickleball',
      // icon: UserGroupIcon 
    },
  ];
  return (
    <nav className="bg-white mx-auto py-8 z-20 justify-content-center fixed w-full z-20 top-0 start-0">
      <div className="flex place-content-center mr-4 space-x-8 p-4 md:p-0 font-medium sm:space-x-2 md:space-x-8">
        {links.map(link => (
            <Link 
              key={link.name}
              href={link.href}
              className={clsx(
                'flex inline-block text-gray-800',
                {
                  'text-pink-600' : pathname === link.href,
                },
              )}
              // className="flex inline-block text-gray-800"
            >
              <p className={`${poppins.className} text-2xl hover:text-pink-400`}>{link.name}</p>
            </Link>
        ))}
      </div>
  </nav>
  );
}
