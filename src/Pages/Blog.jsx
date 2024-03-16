import data from '../fakeData/articleData';
export const Blog = () => {
  return (
    <div className='relative top-[65px] mx-auto flex flex-col items-center bg-[#f9f9f9]'>
      <h1 className='pt-12 font-playfair text-[35px] text-[#2c2f24] sm:text-[60px] md:text-[70px]'>
        Our Blog & Articles
      </h1>
      <p className='text-center text-[14px] leading-relaxed text-[#414536] sm:text-lg'>
        We consider all the drivers of change to provide you with the components
      </p>
      <p className='mb-8 text-center text-[14px] leading-relaxed text-[#414536] sm:mb-8 sm:text-lg lg:mb-12'>
        you need to create something truly exceptional.
      </p>

      <div className='mb-16 grid w-[90%] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='cursor-pointer overflow-hidden rounded-lg bg-white font-sans_dm shadow-md'
          >
            <img
              src={item.img}
              alt={item.title}
              className='mb-4 w-full transform rounded-t-xl transition-transform duration-500 hover:scale-[1.1] sm:mb-6'
            />
            <div className='p-5 sm:p-5 md:p-6'>
              <p className='sm:text-14px pb-4 text-[13px] italic text-[#737865]'>
                November 11, 2023
              </p>
              <h2 className='text-lg font-semibold text-[#2C2F24] sm:text-lg'>
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
