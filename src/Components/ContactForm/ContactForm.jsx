export const ContactForm = () => {
  return (
    <div className='mx-auto my-20 w-full rounded-full bg-[#f9f9f9] font-sans_dm sm:my-20 sm:w-[80%] lg:h-auto lg:w-[812px]'>
      <form className='mb-4 rounded-2xl bg-white p-8 shadow-md sm:mb-0 sm:p-16 md:mb-2'>
        <div className='flex flex-wrap'>
          <div className='mb-4 w-full px-2 sm:w-1/2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4 md:p-4'
              id='name'
              type='text'
              name='name'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4 w-full px-2 sm:w-1/2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='email'
              type='email'
              name='email'
              placeholder='Enter email address'
            />
          </div>
          <div className='mb-4 w-full px-2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='subject'
            >
              Subject
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-full border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='name'
              type='text'
              name='subject'
              placeholder='Write a subject'
            />
          </div>
          <div className='w-full px-2'>
            <label
              className='mb-2 block text-left text-base font-bold text-black'
              htmlFor='name'
            >
              Message
            </label>
            <textarea
              className='focus:shadow-outline w-full appearance-none rounded-xl border p-4 leading-tight text-gray-700 shadow focus:outline-none sm:p-4'
              id='name'
              type='text'
              name='name'
              placeholder='Write your message'
              rows={7}
            />
          </div>
        </div>
        <div className='flex w-full items-center justify-center'>
          <button
            className='focus:shadow-outline mt-6 w-full rounded-full border-2 border-[#ad343e] bg-[#ad343e] p-2 font-sans font-semibold text-white transition duration-300 hover:bg-[white] hover:text-[#ad343e] sm:mt-10 sm:w-full sm:p-4'
            type='submit'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
