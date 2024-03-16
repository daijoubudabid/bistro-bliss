export const BookingForm = () => {
  return (
    <div className='z-10 mx-auto my-8 w-full rounded-full bg-[#f9f9f9] font-sans_dm sm:my-20 sm:w-[80%] lg:h-[504px] lg:w-[812px]'>
      <form className='mb-4 rounded-2xl bg-white p-8 shadow-md sm:mb-0 sm:p-16'>
        <div className='flex flex-wrap'>
          <div className='mb-4 w-full px-2 sm:w-1/2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='date'
            >
              Date
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='date'
              type='date'
              name='date'
            />
          </div>
          <div className='mb-4 w-full px-2 sm:w-1/2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='time'
            >
              Time
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='time'
              type='time'
              name='time'
              placeholder='Select Time'
            />
          </div>
          <div className='mb-4 w-full px-2 sm:w-1/2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='name'
              type='text'
              name='name'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4 w-full px-2 sm:w-1/2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='phone'
            >
              Phone
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='phone'
              type='tel'
              name='phone'
              placeholder='x-xxx-xxx-xxxx'
            />
          </div>
        </div>
        <div className='sm:w-ful mb-4 w-full px-2 sm:mb-0'>
          <label
            className='mb-2 block text-left text-base font-bold text-black'
            htmlFor='phone'
          >
            Total Person
          </label>
          <select className='w-full appearance-none rounded-full border p-4 font-sans_dm shadow focus:outline-none sm:p-4'>
            <option value=''>Select an option</option>
            <option value='option1'>1 Person</option>
            <option value='option2'>2 Person</option>
            <option value='option3'>Family Package</option>
          </select>
        </div>

        <div className='flex w-full items-center justify-center'>
          <button
            className='focus:shadow-outline mt-6 w-full rounded-full border-2 border-[#ad343e] bg-[#ad343e] p-2 font-sans font-semibold text-white transition duration-300 hover:bg-[white] hover:text-[#ad343e] sm:mt-10 sm:w-full sm:p-4'
            type='submit'
          >
            Book A Table
          </button>
        </div>
      </form>
    </div>
  );
};
