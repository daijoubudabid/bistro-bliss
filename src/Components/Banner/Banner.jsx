import { Link } from 'react-router-dom';
import bannerImage from '../Assets/logo/Hero-PhotoRoom.png';

export const Banner = () => {
  const style = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '530px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'ease-in-out 2s',
  };
  return (
    <div style={style} className='relative top-[65px] md:top-[90px]'>
      <div>
        <h1 className='text-center font-playfair text-[60px] leading-none text-[#2c2f24] sm:text-[70px] md:text-[100px]'>
          Best food for
        </h1>
        <h1 className='mb-[40px] text-center font-playfair text-[60px] leading-none text-[#2c2f24] sm:text-[70px] md:text-[100px]'>
          your taste
        </h1>
        <div className='flex justify-center'>
          <a>
            <Link to={'/book'}>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className='mr-4 rounded-full border-2 bg-[#AD343E] px-6 py-4 font-semibold text-white transition duration-300 hover:border-[#2C2F24] hover:bg-white hover:text-[#2C2F24]'
              >
                Book A Table
              </button>
            </Link>
          </a>
          <a href='#'>
            <Link to={'/menu'}>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className='rounded-full border-2 border-[#2C2F24] bg-[white] px-6 py-4 font-semibold text-[#2C2F24] transition duration-300 hover:border-[#AD343E] hover:bg-[#AD343E] hover:text-[white]'
              >
                Explore Menu
              </button>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};
