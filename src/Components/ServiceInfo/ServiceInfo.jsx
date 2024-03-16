import icon from '../Assets/pages/about/Icon.svg';
import timer from '../Assets/pages/about/timer 1.svg';
import menu from '../Assets/pages/about/restaurant-menu 1.svg';
import 'animate.css';


export const ServiceInfo = () => {
  return (
    <div className='my-16 flex flex-col px-4 md:flex-row md:justify-between mx-auto font-sans_dm w-[90%] relative top-[65px]'>
        <div className='mb-3 flex md:mb-0'>
          <img
            className='mx-auto h-16 w-16 md:h-12 md:w-12'
            src={menu}
            alt=''
          />
        </div>
        <div className='ml-0 flex-1 md:ml-6'>
          <p className='text-center text-lg font-semibold sm:text-center md:text-start'>
            Multi Cuisine
          </p>
          <p className='text-center text-gray-600 sm:text-center md:text-start'>
            In the new era of technology, we look into the future with
            certainty.
          </p>
        </div>
        <div className='mb-3 mt-3 flex md:mb-0 md:mt-0'>
          <img
            className='mx-auto h-16 w-16 md:h-12 md:w-12'
            src={icon}
            alt=''
          />
        </div>
        <div className='ml-0 flex-1 md:ml-6'>
          <p className='text-center text-lg font-semibold sm:text-center md:text-start'>
            Easy To Order
          </p>
          <p className='text-center text-gray-600 sm:text-center md:text-start'>
            In the new era of technology, we look into the future with
            certainty.
          </p>
        </div>
        <div className='mb-3 mt-3 flex md:mb-0 md:mt-0'>
          <img
            className='mx-auto h-16 w-16 md:h-12 md:w-12'
            src={timer}
            alt=''
          />
        </div>
        <div className='ml-0 flex-1 md:ml-6'>
          <p className='text-center text-lg font-semibold sm:text-center md:text-start'>
            Fast Delivery
          </p>
          <p className='text-center text-gray-600 sm:text-center md:text-start'>
            In the new era of technology, we look into the future with
            certainty.
          </p>
        </div>
      </div>
  )
}
