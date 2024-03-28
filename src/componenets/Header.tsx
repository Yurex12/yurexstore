import { HiBriefcase, HiMenu, HiLogout } from 'react-icons/hi';
import { links } from '../constants';
import { useState } from 'react';
import MobileNav from './MobileNav';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsopen] = useState(false);

  const openNav = (): void => setIsopen(true);
  const closeNav = (): void => setIsopen(false);

  return (
    <header className='fixed mx-auto top-0 w-full flex items-center justify-between shadow-md bg-brandWhite'>
      <div className='max-w-[1440px] mx-auto flex items-center justify-between flex-1 px-10 py-6'>
        <Logo />

        <nav className='hidden md:flex'>
          <ul className='flex space-x-10'>
            {links.map((link) => (
              <li
                key={link.id}
                className='border-2 py-1 cursor-pointer border-b-brandWhite hover:border-2 hover:border-b-brandBrown'
              >
                {link.title}
              </li>
            ))}
          </ul>
        </nav>

        {/* navbar */}
        <div className='flex text-2xl space-x-5 items-center md:space-x-10 hover:cursor-pointer'>
          <HiBriefcase className='text-brandBrown' />

          <HiMenu className='md:hidden' onClick={openNav} />
          <button className='border border-brandBlack py-2 px-1 rounded-md hidden md:flex'>
            <HiLogout className='text-sm' />
          </button>
        </div>

        {isOpen && <MobileNav closeNav={closeNav} />}
      </div>
    </header>
  );
}
