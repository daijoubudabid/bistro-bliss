import { BookingForm } from '../BookingForm/BookingForm';

export const BookingTitle = () => {
  return (
    <div className='mx-auto flex flex-col items-center bg-[#f9f9f9] px-5 md:px-0 sm:px-0'>
      <h1 className='font-playfair text-[40px] sm:text-[60px] md:text-[70px] text-[#2c2f24] mt-[130px]'>
        Book A Table
      </h1>
      <p className='text-center text-[18px] leading-relaxed text-[#2C2F24]'>
        We consider all the drivers of change gives you the components
      </p>
      <p className='text-center text-[18px] leading-relaxed text-[#2C2F24]'>
        you need to change to create a truly happens.
      </p>
      <BookingForm />
    </div>
  );
};
