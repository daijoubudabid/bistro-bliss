import fakeData from '../../fakeData/allProducts';

const shuffleArray = (array) => {

  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const Products = () => {
  const randomizedProducts = shuffleArray(fakeData);

  return (
    <div className='mx-auto mb-8 grid w-[90%] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 relative top-[105px]'>
      {randomizedProducts.map((item, index) => (
        <div
          key={index}
          className='cursor-pointer overflow-hidden rounded-lg border-2 border-[#DBDFD0]'
        >
          <div className='hover:scale-[1.1] transform transition-transform duration-500'>
            <img
              src={item.img}
              alt={item.title}
              className='h-auto w-full rounded-t-lg'
            />
          </div>
          <div className='p-4 text-center font-sans_dm'>
            <h3 className='mt-2 text-[24px] font-semibold text-[#AD343E]'>
              {item.price}
            </h3>
            <p className='mt-2 text-[20px] font-semibold text-[#2c2f24]'>
              {item.title}
            </p>
            <p className='py-3 text-[16px] text-[#414536]'>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
