/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import about_us from '../Assets/components/aboutUs.png';

export const About = () => {
  return (
    <div className='relative top-[100px] mt-16 bg-[#f9f9f7] py-10 sm:py-20'>
      <div className='container mx-auto w-[90%]'>
        <div className='flex flex-col-reverse items-center gap-8 sm:gap-20 md:flex-row'>
          <div className='w-full md:w-full'>
            <img src={about_us} alt='About Us' className='w-full rounded-lg' />
          </div>
          <div className='md:full w-full'>
            <h2 className='font-playfair text-[37px] text-[#2c2f24] sm:text-[40px] md:text-[32px] lg:text-[45px]'>
              We provide healthy
            </h2>
            <h2 className='font-playfair text-[37px] text-[#2c2f24] sm:text-[40px] md:text-[32px] lg:text-[45px]'>
              food for your family.
            </h2>
            <p className='mt-4 font-semibold leading-6 text-gray-700 sm:leading-7'>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in the city's rich culinary culture, we aim to
              honor our local roots while infusing a global palate.
            </p>
            <p className='mt-4 font-sans_dm text-[#414536]'>
              At our place, we believe that dining is not just about food, but
              also about the overall experience. Our staff, renowned for their
              warmth and dedication, strives to make every visit an
              unforgettable event.
            </p>
            <Link to='/about'>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className='mt-6 rounded-full border-2 border-[#2C2F24] bg-white px-6 py-4 font-semibold text-[#2C2F24] transition duration-300 hover:border-[#AD343E] hover:bg-[#AD343E] hover:text-white'
              >
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
