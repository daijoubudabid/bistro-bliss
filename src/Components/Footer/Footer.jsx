import { Link } from 'react-router-dom';
import icon_1 from '../Assets/components/1.svg';
import icon_2 from '../Assets/components/2.svg';
import icon_3 from '../Assets/components/3.svg';
import icon_4 from '../Assets/components/4.svg';
import footer_1 from '../Assets/components/footer-1.png';
import footer_2 from '../Assets/components/footer-2.png';
import footer_3 from '../Assets/components/footer-3.png';
import footer_4 from '../Assets/components/footer-4.png';
import logo from '../Assets/logo/footer-logo.png';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='bg-[#474747] p-20 text-white'>
      <div className='container mx-auto flex flex-wrap justify-between pt-20'>
        <div className='mb-8 w-full md:w-1/2 lg:w-1/4'>
          <Link to={'/'}>
            <img
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              src={logo}
              alt='Logo'
              className='mb-4 h-14'
            />
          </Link>
          <p className='leading-6 text-[#ADB29E]'>
            In the new era of technology, we look ahead with certainty and pride
            for our company.
          </p>
          <div className='mt-4 flex gap-4'>
            <a href='#'>
              <img src={icon_1} alt='' className='rotate-360 duration-1000' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100014165343416'
              target='_blank'
              rel='noreferrer'
            >
              <img src={icon_2} alt='' className='rotate-360 duration-1000' />
            </a>
            <a href='#'>
              <img src={icon_3} alt='' className='rotate-360 duration-1000' />
            </a>
            <a
              href='https://github.com/Dabid007'
              target='_blank'
              rel='noreferrer'
            >
              <img src={icon_4} alt='' className='rotate-360 duration-700' />
            </a>
          </div>
        </div>
        <div className='mb-8 w-full md:w-1/4 lg:w-1/6'>
          <h3 className='mb-4 text-lg font-semibold'>Pages</h3>
          <ul className='text-[#DBDFD0]'>
            <li className='mb-4 cursor-pointer'>Home</li>
            <li className='mb-4 cursor-pointer'>About</li>
            <li className='mb-4 cursor-pointer'>Menu</li>
            <li className='mb-4 cursor-pointer'>Pricing</li>
            <li className='mb-4 cursor-pointer'>Blog</li>
            <li className='mb-4 cursor-pointer'>Contact</li>
            <li className='mb-4 cursor-pointer'>Delivery</li>
          </ul>
        </div>
        <div className='mb-8 w-full md:w-1/4 lg:w-1/6'>
          <h3 className='mb-4 text-lg font-semibold'>Utility Pages</h3>
          <ul className='text-[#DBDFD0]'>
            <li className='mb-4 cursor-pointer'>Start Here</li>
            <li className='mb-4 cursor-pointer'>Styleguide</li>
            <li className='mb-4 cursor-pointer'>Password Protected</li>
            <li className='mb-4 cursor-pointer'>404 Not Found</li>
            <li className='mb-4 cursor-pointer'>Licenses</li>
            <li className='mb-4 cursor-pointer'>Changelog</li>
            <li className='mb-4 cursor-pointer'>View More</li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/4'>
          <h3 className='mb-4 text-lg font-semibold'>Follow Us On Instagram</h3>
          <div className='grid grid-cols-2 gap-4 md:hidden lg:grid '>
            <img src={footer_1} alt='Instagram 1' className='rounded-lg' />
            <img src={footer_2} alt='Instagram 2' className='rounded-lg' />
            <img src={footer_3} alt='Instagram 3' className='rounded-lg' />
            <img src={footer_4} alt='Instagram 4' className='rounded-lg' />
          </div>
        </div>
      </div>
      <p className='mt-[100px] text-center'>
        Copyright @ 2023 Dabid Marma. All Rights Reserved
      </p>
    </div>
  );
};
