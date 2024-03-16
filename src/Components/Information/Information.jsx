import about_2 from '../Assets/pages/about/about-2.png';

export const Information = () => {
  return (
    <div className='relative top-[65px] justify-center gap-[10vw] bg-[#f9f9f9] px-10 py-20 sm:flex-col md:flex md:flex-col lg:flex-row'>
      <div className='mt-0 flex flex-col justify-center sm:mt-20 md:mt-14 lg:mt-0'>
        <h2 className='font-playfair text-[30px] sm:text-[40px] md:text-[45px] lg:text-[45px]'>
          A Little Information
        </h2>
        <h2 className='mb-5 whitespace-normal font-playfair text-[30px] sm:whitespace-normal sm:text-[40px] md:whitespace-nowrap md:text-[45px] lg:text-[45px]'>
          for our valuable guest
        </h2>
        <p className='font-sans_dm text-[#414536]'>
          At place, we believe that dining is not just about food, but also
          about the
        </p>
        <p className='font-sans_dm text-[#414536]'>
          overall experience. Our staff, renowned for their warmth and
          dedication,
        </p>
        <p className='mb-10 font-sans_dm text-[#414536]'>
          strives to make every visit an unforgettable event.
        </p>
        <div className='mb-5 hidden sm:flex md:flex lg:flex'>
          <div className='flex-1'>
            <div className='flex h-[178px] flex-col justify-center rounded-2xl border border-[#DBDFD0] bg-white p-10'>
              <h2 className='text-center font-playfair text-[45px] font-medium'>
                3
              </h2>
              <p className='text-center text-[18px] font-medium'>Locations</p>
            </div>
          </div>
          <div className='ml-5 flex-1'>
            <div className='flex h-[178px] flex-col justify-center rounded-2xl border border-[#DBDFD0] bg-white p-10'>
              <h2 className='text-center font-playfair text-[45px] font-medium'>
                1995
              </h2>
              <p className='text-center text-[18px] font-medium leading-relaxed'>
                Founded
              </p>
            </div>
          </div>
        </div>
        <div className='hidden sm:flex md:flex lg:flex'>
          <div className='flex-1'>
            <div className='flex h-[178px] flex-col justify-center rounded-2xl border border-[#DBDFD0] bg-white p-10'>
              <h2 className='text-center font-playfair text-[45px] font-medium'>
                65+
              </h2>
              <p className='text-center text-[18px] font-medium'>
                Staff Members
              </p>
            </div>
          </div>
          <div className='ml-5 flex-1'>
            <div className='flex h-[178px] flex-col justify-center rounded-2xl border border-[#DBDFD0] bg-white p-10'>
              <h2 className='text-center font-playfair text-[45px] font-medium'>
                100%
              </h2>
              <p className='text-center text-[18px] font-medium leading-relaxed'>
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 flex items-center md:mt-0'>
        <img
          className='mx-auto rounded-2xl'
          width={'500px'}
          src={about_2}
          alt=''
        />
      </div>
    </div>
  );
};
