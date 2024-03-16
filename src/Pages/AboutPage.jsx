/* eslint-disable react/no-unescaped-entities */
import about_us from '../Components/Assets/pages/about/about-1.png';
import { Information } from '../Components/Information/Information';
import { ServiceInfo } from '../Components/ServiceInfo/ServiceInfo';
import { Testimonial } from '../Components/Testimonial/Testimonial';
import { Video } from '../Components/Video/Video';


export const AboutPage = () => {
  return (
    <>
      <div className='relative top-[65px] bg-[#f9f9f7] py-20'>
        <div className='container mx-auto w-[90%] overflow-hidden'>
          <div className='flex flex-col-reverse items-center gap-8 sm:gap-20 md:flex-row'>
            <div className='w-full md:w-full'>
              <img
                src={about_us}
                alt='About Us'
                className='w-full rounded-lg'
              />
            </div>
            <div className='md:full w-full'>
              <h2 className='font-playfair text-[37px] text-[#2c2f24] sm:text-[40px] md:text-[32px] lg:text-[45px]'>
                We provide healthy
              </h2>
              <h2 className='font-playfair text-[37px] text-[#2c2f24] sm:text-[40px] md:text-[32px] lg:text-[45px]'>
                food for your family.
              </h2>
              <p className='mt-4 text-[14px] font-semibold leading-6 text-gray-700 sm:leading-7 md:text-[16px]'>
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in the city's rich culinary culture, we
                aim to honor our local roots while infusing a global palate.
              </p>
              <p className='mt-4 font-sans_dm text-[14px] text-[#414536] md:text-[16px]'>
                At our place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Video />
      <ServiceInfo />
      <Information />
      <Testimonial />
    </>
  );
};
