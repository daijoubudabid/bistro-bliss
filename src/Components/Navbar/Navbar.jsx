import { useState } from 'react';

const Nav = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: "BLOG'S", link: '/' },
    { name: 'CONTACT', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='fixed left-0 top-0 w-full shadow-md z-[999]'>
      <div className='items-center justify-between bg-white px-7 py-4 md:flex md:px-10'>
        <div
          className='flex cursor-pointer items-center font-[Poppins] text-2xl font-bold 
      text-gray-800'
        >
          <span className='mr-1 pt-2 text-3xl text-indigo-600'>
            <ion-icon name='logo-ionic'></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer text-3xl md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? 'top-[70px] ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='my-7 text-xl md:my-0 md:ml-8'>
              <a
                href={link.link}
                className='text-gray-800 duration-500 hover:text-gray-400'
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            className='rounded bg-indigo-600 px-6 py-2 font-[Poppins] text-white duration-500 hover:bg-indigo-400 
    md:ml-8'
          >Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
