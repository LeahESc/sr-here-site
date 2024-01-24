import Link from 'next/link';
// import { PowerIcon } from '@heroicons/react/24/outline';
import { poppins } from './fonts';

export default function NavBar() {
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
      href: '/pickle_ball',
      // icon: UserGroupIcon 
    },
  ];
  return (
    <nav className="bg-orange-200 mx-auto p-3 justify-content-end fixed w-full z-20 top-0 start-0 border-b border-pink-200">
      <div className="flex place-content-end mr-4 space-x-8 p-4 md:p-0 font-medium sm:space-x-2 md:space-x-8">
        {links.map(link => (
            <Link 
              key={link.name}
              href={link.href}
              className="flex inline-block text-violet-300"
            >
              <p className={`${poppins.className} text-2xl font-bold hover:text-orange-100`}>{link.name}</p>
            </Link>
        ))}
      </div>
  </nav>
  );
}
