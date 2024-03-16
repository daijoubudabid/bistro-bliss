import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../Assets/logo/logo.png';

export const NavBar2 = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Contact', link: '/Contact' },
  ];
  let [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='fixed left-0 top-0 z-20 w-full shadow-md'>
      <div className='items-center justify-between bg-white px-7 py-4 md:flex md:px-10'>
        <div className='flex w-[300px] cursor-pointer items-center gap-1 text-2xl font-bold'>
          <Link to={'/'}>
            <img
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className='w-[200px] sm:w-[200px] md:w-[220px]'
              src={logo}
              alt=''
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-5 h-9 w-9 cursor-pointer md:hidden'
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in-out md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? 'top-16' : 'top-[-600px]'
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                closeMenu();
                window.scrollTo(0, 0);
              }}
              className='my-7 py-0 text-[16px] font-semibold sm:py-0 sm:text-[16px] md:my-0 md:ml-8 md:py-2 md:text-[14px] lg:text-[16px]'
            >
              <NavLink
                to={link.link}
                className={`duration-500 hover:text-[#AD343E] ${
                  location.pathname === link.link
                    ? 'text-[#AD343E]'
                    : 'text-[#2c2f24]'
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <Link to={'/book'}>
            <button
              onClick={() => {
                closeMenu();
                window.scrollTo(0, 0);
              }}
              className='whitespace-nowrap rounded-full border-0 border-[#2C2F24] bg-[white] px-0 py-0 text-[16px] font-semibold text-[#2C2F24] transition duration-300 hover:text-[#ad343e] sm:text-[16px] md:static md:ml-8 md:border-2 md:px-6 md:py-4 md:text-[14px] md:hover:border-[#AD343E] md:hover:bg-[#AD343E] md:hover:text-[white] lg:text-[16px]'
            >
              Book A Table
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};
