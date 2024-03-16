import { Link } from 'react-router-dom';
import service_1 from '../Assets/components/service-1.png';
import service_2 from '../Assets/components/service-2.png';
import service_3 from '../Assets/components/service-3.png';
import service_4 from '../Assets/components/service-4.png';

const servicesData = [
  {
    image: service_1,
    title: 'Caterings',
    description:
      'In the new era of technology we look in the future with certainty for life.',
  },
  {
    image: service_2,
    title: 'Birthdays',
    description:
      'In the new era of technology we look in the future with certainty for life.',
  },
  {
    image: service_3,
    title: 'Weddings',
    description:
      'In the new era of technology we look in the future with certainty for life.',
  },
  {
    image: service_4,
    title: 'Events',
    description:
      'In the new era of technology we look in the future with certainty for life.',
  },
];
export const Service = () => {
  return (
    <div className='relative top-[70px] mt-12 py-16'>
      <div className='container mx-auto w-[90%]'>
        <div className='px-3'>
          <h2 className='text-center font-playfair text-[33px] text-[#2c2f24] sm:text-center sm:text-[40px] md:text-center md:text-[40px] lg:text-start lg:text-[45px]'>
            We also offer unique
          </h2>
          <h2 className='text-center font-playfair text-[33px] text-[#2c2f24] sm:text-center sm:text-[40px] md:text-center md:text-[40px] lg:text-start lg:text-[45px]'>
            services for your events.
          </h2>
        </div>
        <div className='mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 md:gap-0 lg:grid-cols-4 lg:gap-0'>
          {servicesData.map((service, index) => (
            <Link to={'/contact'} key={index}>
              <div
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className='mx-auto w-full overflow-hidden rounded-lg font-sans_dm sm:w-full md:w-full lg:w-[90%]'
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className='mx-auto transform rounded-xl transition-transform duration-500 hover:scale-[1.07] sm:mx-0 md:mx-auto lg:mx-0'
                />
                <h3 className='mt-4 text-center text-[22px] font-semibold text-[#2C2F24] sm:text-start md:text-center lg:text-start'>
                  {service.title}
                </h3>
                <p className='mb-10 mt-4 text-center text-[#414536] sm:text-start md:text-center lg:text-start'>
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
