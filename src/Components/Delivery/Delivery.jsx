import clock from '../Assets/components/clock.svg';
import delivery_1 from '../Assets/components/delivery-1.png';
import delivery_2 from '../Assets/components/delivery-2.png';
import delivery_3 from '../Assets/components/delivery-3.png';
import receipt from '../Assets/components/receipt-tax.svg';
import cart from '../Assets/components/shopping-cart.svg';

export const Delivery = () => {
  return (
    <div className=' relative top-[100px] bg-[#F9F9F7] py-20'>
      <div className='container mx-auto flex w-[90%] flex-col items-center justify-between md:flex-row'>
        <div className='flex p-6 sm:justify-center sm:p-0 md:w-[50%]'>
          <div className='mt-[80px] w-[50%] sm:mt-0 sm:w-[40%] md:w-[480px]'>
            <img
              src={delivery_1}
              alt='Delivery 1'
              className='max-w-full rounded-lg'
            />
          </div>
          <div className='ml-5 mt-5 w-[45%] sm:ml-5 sm:w-[30%] md:w-[330px]'>
            <img
              src={delivery_2}
              alt='Delivery 2'
              className='mb-5 max-w-full rounded-lg bg-red-500'
            />
            <img
              src={delivery_3}
              alt='Delivery 3'
              className='max-w-full rounded-lg'
            />
          </div>
        </div>

        <div className='px-6 sm:mt-16 sm:px-20 md:px-20'>
          <h2 className='w-full font-playfair text-[40px] text-[#2c2f24] sm:whitespace-nowrap sm:text-[38px] lg:text-[45px]'>
            Fastest Food
          </h2>
          <h2 className='w-full whitespace-normal font-playfair text-[40px] text-[#2c2f24] sm:whitespace-normal sm:text-[38px] md:whitespace-nowrap lg:text-[45px]'>
            Delivery in City
          </h2>
          <p className='mt-4 font-sans_dm leading-relaxed text-gray-700'>
            Our visual designer lets you quickly and effortlessly design your
            way to custom apps for both desktop and mobile.
          </p>
          <div className='mt-4 flex items-center'>
            <img
              src={clock}
              alt='Clock'
              className='mr-2 w-[25px] rounded-full bg-[#C00A34] p-1'
            />
            <p className='font-sans_dm font-semibold text-[#2C2F24]'>
              Delivery within 30 minutes
            </p>
          </div>
          <div className='mt-2 flex items-center'>
            <img
              src={receipt}
              alt='Receipt'
              className='mr-2 w-[25px] rounded-full bg-[#C00A34] p-1'
            />
            <p className='font-sans_dm font-semibold text-[#2C2F24]'>
              Best Offer & Prices
            </p>
          </div>
          <div className='mt-2 flex items-center'>
            <img
              src={cart}
              alt='Shopping Cart'
              className='mr-2 w-[25px] rounded-full bg-[#C00A34] p-1'
            />
            <p className='font-sans_dm font-semibold text-[#2C2F24]'>
              Online Services Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
