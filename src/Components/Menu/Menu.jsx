import { Link } from 'react-router-dom';
import breakfast from '../Assets/logo/breakfast .svg';
import desserts from '../Assets/logo/desserts.svg';
import drinks from '../Assets/logo/drinks.svg';
import main_dishes from '../Assets/logo/main-dishes.svg';

const menuItems = [
  {
    title: 'Breakfast',
    content:
      'In the new era of technology we look in the future with certainty and pride for our life.',
    svg: breakfast,
  },
  {
    title: 'Main Dishes',
    content:
      'In the new era of technology we look in the future with certainty and pride for our life.',
    svg: main_dishes,
  },
  {
    title: 'Drinks',
    content:
      'In the new era of technology we look in the future with certainty and pride for our life.',
    svg: drinks,
  },
  {
    title: 'Desserts',
    content:
      'In the new era of technology we look in the future with certainty and pride for our life.',
    svg: desserts,
  },
];

export const Menu = () => {
  return (
    <div className='container relative top-[88px] mx-auto w-[90%] text-center'>
      <h2 className='py-[50px] font-playfair text-[40px] text-[#2C2F24] sm:text-[50px] md:text-[50px]'>
        Browse Our Menu
      </h2>
      <div className='grid grid-cols-12 gap-4 font-sans_dm'>
        {menuItems.map((menuItem, index) => (
          <card
            className='col-span-12 flex cursor-pointer gap-5 rounded-2xl border-2 border-[#DBDFD0] px-6 py-6 duration-500 hover:scale-105 hover:shadow-2xl sm:col-span-6 md:col-span-6 lg:col-span-3'
            key={index}
          >
            <div className='flex flex-col items-center'>
              <img src={menuItem.svg} alt='' />
              <h3 className='my-6 text-[24px] font-semibold text-[#2C2F24] dark:text-white'>
                {menuItem.title}
              </h3>
              <p className='text-[16px] text-[#414536]'>{menuItem.content}</p>
              <Link to={'/menu'}>
                <p
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className='mt-5 font-semibold text-[#AD343E]'
                >
                  Explore Menu
                </p>
              </Link>
            </div>
          </card>
        ))}
      </div>
    </div>
  );
};
