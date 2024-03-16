import { useEffect, useState } from 'react';
import { Products } from '../Products/Products';
import './MenuNav.css';

export const MenuNav = () => {
  const [activeLink, setActiveLink] = useState('All');

  const handleLinkClick = (category) => {
    setActiveLink(category);
  };

  useEffect(() => {
    handleLinkClick('All');
  }, []);

  const getLinkClass = (category) => {
    return activeLink === category
      ? 'cursor-pointer rounded-full border-2 px-4 py-2 font-semibold sm:px-8 active-link'
      : 'cursor-pointer rounded-full border-2 px-4 py-2 font-semibold sm:px-8';
  };

  return (
    <div>
      <nav className='py-7 relative top-[105px]'>
        <ul className='flex flex-wrap justify-center gap-4 sm:gap-10 md:gap-12'>
          <li
            onClick={() => handleLinkClick('All')}
            className={getLinkClass('All')}
          >
            All
          </li>
          <li
            onClick={() => handleLinkClick('Breakfast')}
            className={getLinkClass('Breakfast')}
          >
            Breakfast
          </li>
          <li
            onClick={() => handleLinkClick('Main Dishes')}
            className={getLinkClass('Main Dishes')}
          >
            Main Dishes
          </li>
          <li
            onClick={() => handleLinkClick('Drinks')}
            className={getLinkClass('Drinks')}
          >
            Drinks
          </li>
          <li
            onClick={() => handleLinkClick('Desserts')}
            className={getLinkClass('Desserts')}
          >
            Desserts
          </li>
        </ul>
      </nav>
      {activeLink === 'All' && <Products />}
      {activeLink === 'Breakfast' && <Products />}
      {activeLink === 'Main Dishes' && <Products />}{' '}
      {activeLink === 'Drinks' && <Products />}{' '}
      {activeLink === 'Desserts' && <Products />}
    </div>
  );
};
