import play from '../Assets/pages/about/play.svg'
import bg from '../Assets/pages/about/BG.png';
export const Video = () => {
  return (
<div className='relative bg-[#f9f9f9] top-[65px]'>
    <img className='mx-auto w-full' src={bg} alt='' />
    <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <img src={play} alt='' className='w-12 md:w-auto'/>
      <h2 className='mt-4 text-center font-playfair text-2xl md:text-4xl text-white'>
        Feel the authentic &
      </h2>
      <h2 className='text-center text-2xl md:text-4xl text-white'>
        original taste from us
      </h2>
    </div>
  </div>
  )
}
