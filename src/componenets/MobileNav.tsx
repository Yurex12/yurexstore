import { HiLogout } from 'react-icons/hi';
import { links } from '../constants';
import { useOutsideClick } from '../hooks/useOutsideClick';

type MobileNavProps = {
  closeNav: () => void;
};

function MobileNav({ closeNav }: MobileNavProps) {
  const ref = useOutsideClick(closeNav);

  return (
    <div className='fixed top-0 left-0 w-full h-screen backdrop-blur-sm  z-50 transition-all duration-1000 text-white'>
      <div
        className='fixed top-0 left-0 w-[222px] h-screen transform bg-brandBlack shadow-lg transition-all duration-1000'
        ref={ref}
      >
        <ul className='divide-y-[1px] divide-slate-400 px-6 h-[90vh]'>
          {links.map((link) => (
            <li key={link.id} className='px-1'>
              <a href={`#${link.id}`} className='block w-full py-4 text-[14px]'>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button className='flex items-center p-1 space-x-3 border-2 justify-center w-7/12 mx-auto rounded-lg'>
          <a href='#'>Logout</a>
          <HiLogout className='text-sm' />
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
