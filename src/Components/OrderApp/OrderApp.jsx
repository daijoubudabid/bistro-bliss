import capture from '../Assets/pages/Menu/Capture.png';
export const OrderApp = () => {
  return (
    <div className='mt-[200px] bg-[#f9f9f9]'>
      <div className='flex flex-col items-center justify-center sm:flex-col md:flex-row lg:flex-row'>
        <div className='w-full bg-[#f9f9f7] p-20 md:w-[50%]'>
          <h2 className='whitespace-nowrap text-center font-playfair text-[35px] leading-none text-[#2c2f24] sm:whitespace-normal sm:text-start sm:text-[40px] md:whitespace-nowrap md:text-start md:text-[45px] lg:whitespace-nowrap lg:text-start lg:text-[50px]'>
            You can order
          </h2>
          <h2 className='mb-4 whitespace-normal  text-center font-playfair text-[35px] text-[#2c2f24] sm:whitespace-normal sm:text-start sm:text-[40px] md:whitespace-nowrap md:text-start md:text-[45px] lg:whitespace-normal lg:text-start lg:text-[50px]'>
            through apps
          </h2>
          <p className='sm:text-18px text-center font-sans_dm text-[16px] text-[#414536] sm:text-start md:text-start lg:text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            bibendum sed et aliquet aliquet risus tempor semper.
          </p>
          {/* <p className='sm:text-18px whitespace-normal text-center font-sans_dm text-[16px] text-[#414536] sm:whitespace-normal sm:text-start md:whitespace-nowrap md:text-start lg:whitespace-normal lg:text-start'>
            adipiscing elit. Enim bibendum sed et aliquet
          </p>
          <p className='sm:text-18px whitespace-nowrap text-center font-sans_dm text-[16px] text-[#414536] sm:whitespace-normal sm:text-start md:whitespace-nowrap md:text-start lg:whitespace-normal lg:text-start'>
            aliquet risus tempor semper.
          </p> */}
        </div>
        <div className='w-full'>
          <img src={capture} alt='Mobile App' className='h-full w-full' />
        </div>
      </div>
    </div>
  );
};
