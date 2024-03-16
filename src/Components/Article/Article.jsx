/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import burger from '../Assets/components/burger.png';
import cake from '../Assets/components/cake.png';
import chicken from '../Assets/components/chicken.png';
import french_fry from '../Assets/components/french-fry.png';
import pizza from '../Assets/components/pizza.png';

export const Article = () => {
  return (
    <div className='mt-[200px] bg-[#F9F9F7] py-[130px]'>
      <div className='container mx-auto mb-[50px] flex w-[90%] items-center justify-between'>
        <h2 className='l font-playfair text-[35px] text-[#2c2f24] sm:text-[40px] md:text-[35px] lg:text-[45px]'>
          Our Blog & Articles
        </h2>
        <Link to={'/blogs'}>
          <button
            className='whitespace-nowrap rounded-full border-2 bg-[#AD343E] px-4 py-3 font-semibold text-white transition duration-300 hover:border-[#2C2F24] hover:bg-white hover:text-[#2C2F24] sm:whitespace-normal sm:px-6 sm:py-5'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Read More
          </button>
        </Link>
      </div>
      <div className='container mx-auto grid w-[90%] grid-cols-1 gap-4 lg:grid-cols-2'>
        <Link to={'/blogs'}>
          <div
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className='cursor-pointer overflow-hidden rounded-2xl shadow-lg'
          >
            <img
              src={burger}
              alt='Burger'
              className='w-full transform rounded-lg transition-transform duration-500 hover:scale-[1.03]'
            />
            <p className='p-4 text-[12px] text-gray-600'>October 20, 2023</p>
            <h5 className='p-4 text-lg font-semibold text-[black]'>
              The secret tips & tricks to prepare a perfect burger & pizza for
              our customers
            </h5>
            <p className='px-4 pb-3 text-gray-700'>
              Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
              semper adipiscing massa gravida nisi cras enim quis nibholm varius
              amet gravida ut facilisis neque egestas.
            </p>
          </div>
        </Link>
        <div className='mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <ArticleItem
            img={french_fry}
            date='October 20, 2023'
            title='How to prepare the perfect french fries in an air fryer'
          />
          <ArticleItem
            img={chicken}
            date='October 20, 2023'
            title='How to prepare delicious chicken tenders'
          />
          <ArticleItem
            img={cake}
            date='October 20, 2023'
            title='7 delicious cheesecake recipes you can prepare'
          />
          <ArticleItem
            img={pizza}
            date='October 20, 2023'
            title='5 great pizza restaurants you should visit in this city'
          />
        </div>
      </div>
    </div>
  );
};

const ArticleItem = ({ img, date, title }) => (
  <Link to={'/blogs'}>
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className='mx-auto mt-4 flex w-full flex-col overflow-hidden rounded-2xl shadow-lg'
    >
      <img
        src={img}
        alt='Food'
        className='mx-auto w-full transform rounded-lg transition-transform duration-500 hover:scale-[1.07]'
      />
      <p className='p-4 text-[12px] italic text-gray-600'>{date}</p>
      <h5 className='p-4 text-lg font-semibold text-[black]'>{title}</h5>
    </div>
  </Link>
);
