import { ContactForm } from '../ContactForm/ContactForm';

export const ContactTitle = () => {
  return (
    <div className='mx-auto flex flex-col bg-[#f9f9f9] px-5 sm:px-0 md:items-center md:px-0'>
      <h1 className='mt-[120px] text-center font-playfair text-[40px] text-[#2c2f24] sm:text-[60px] md:text-[70px]'>
        Contact Us
      </h1>
      <p className='text-center text-[18px] leading-relaxed text-[#2C2F24]'>
        We consider all the drivers of change gives you the components
      </p>
      <p className='text-center text-[18px] leading-relaxed text-[#2C2F24]'>
        you need to change to create a truly happens.
      </p>
      <ContactForm />
      <div className='mb-10 flex flex-col justify-between px-0 font-sans_dm sm:mb-20 sm:w-[80%] sm:flex-col sm:px-[74px] md:flex-row md:px-0 lg:h-auto lg:w-[812px]'>
        <div className='mb-8 flex flex-col sm:mb-0 sm:mr-8'>
          <p className='mb-2 text-[20px] font-semibold text-[#2C2F24] sm:mb-4'>
            Call Us:
          </p>
          <h3 className='text-[20px] font-semibold leading-relaxed text-[#AD343E] sm:text-[20px] md:text-[20px]'>
            +1-234-567-8900
          </h3>
        </div>

        <div className='mb-8 flex flex-col sm:mb-0 sm:mr-8'>
          <p className='mb-2 text-lg font-semibold text-[#2C2F24] sm:mb-4'>
            Hours:
          </p>
          <h3 className='text-lg text-[#2C2F24] sm:text-xl'>
            Mon-Fri: 11am - 8pm
          </h3>
          <h3 className='whitespace-nowrap text-lg text-[#2C2F24] sm:text-xl'>
            Sat, Sun: 9am - 10pm
          </h3>
        </div>

        <div className='flex flex-col'>
          <p className='mb-2 text-lg font-semibold text-[#2C2F24] sm:mb-4'>
            Our Location:
          </p>
          <h3 className='text-lg text-[#2C2F24] sm:text-xl'>
            123 Bridge Street
          </h3>
          <h3 className='text-lg text-[#2C2F24] sm:text-xl'>
            Nowhere Land, LA 12345
          </h3>
          <h3 className='text-lg text-[#2C2F24] sm:text-xl'>United States</h3>
        </div>
      </div>
    </div>
  );
};
