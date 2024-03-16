import review_1 from '../Assets/components/review-1.svg';
import review_2 from '../Assets/components/review-2.svg';
import review_3 from '../Assets/components/review-3.svg';

const reviews = [
  {
    title: '“The best restaurant”',
    body: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
    img: review_1,
    name: 'Sophire Robson',
    city: 'Los Angeles, CA',
  },
  {
    title: '“Simply delicious”',
    body: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
    img: review_2,
    name: 'Matt Cannon',
    city: 'San Diego, CA',
  },
  {
    title: '“One of a kind restaurant”',
    body: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
    img: review_3,
    name: 'Andy Smith',
    city: 'San Francisco, CA',
  },
];

export const Testimonial = () => {
  return (
    <div className='relative top-[100px] mx-auto mb-[200px] mt-10 w-[90%]'>
      <h2 className='mb-10 py-10 text-center font-playfair text-[35px] text-[#2c2f24] sm:text-[45px] md:text-[45px] lg:text-[45px]'>
        What Our Customers Say
      </h2>
      <div className='container mx-auto grid grid-cols-1 gap-8 font-sans_dm md:grid-cols-3'>
        {reviews.map((review, index) => (
          <div
            key={index}
            className='cursor-pointer rounded-lg bg-[#F9F9F7] p-6 shadow-lg'
          >
            <div className='h-[100px] sm:h-[150px] md:h-[150px]'>
              <h3 className='mb-4 text-[22px] font-bold text-[#AD343E]'>
                {review.title}
              </h3>
              <p className='text-[16px] text-[#414536]'>{review.body}</p>
            </div>
            <div className='mt-[100px] flex items-center border-t-2 pt-5 sm:mt-[40px] md:mt-[250px] lg:mt-[120px]'>
              <img
                src={review.img}
                alt=''
                className='mr-4 h-12 w-12 rounded-full'
              />
              <div>
                <p className='text-lg font-semibold text-[#2C2F24]'>
                  {review.name}
                </p>
                <p className='text-[#414536]'>{review.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
