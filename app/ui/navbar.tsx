import Link from 'next/link';
// import { PowerIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const links = [
    { name: 'Home',
      href: '/', 
      // icon: HomeIcon 
    },
    {
      name: 'About',
      href: '/about',
      // icon: DocumentDuplicateIcon,
    },
    { 
      name: 'Work',
      href: '/work',
      // icon: UserGroupIcon 
    },
    { 
      name: 'Pickle',
      href: '/pickle_ball',
      // icon: UserGroupIcon 
    },
  ];
  return (
    <nav className="bg-violet-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-right justify-between mx-auto p-4">
        <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {links.map(link => (
            <Link 
              key={link.name}
              href={link.href}
              className="flex text-blue-600"
            >
              <p className="">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
  </nav>
  );
}
