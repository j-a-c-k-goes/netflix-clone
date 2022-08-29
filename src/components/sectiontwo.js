import tv from '../images/tv.png'
import app from '../images/mobile.jpg'

function SectionTwo(){
  return(
    <div className='flex flex-col-reverse lg:flex-row-reverse bg-black p-[3.5rem] md:p-[5rem] text-white border-b-gray-600 border-b-8 text-center lg:text-left'>
    <div className='w-full lg:w-4/6 my-auto space-y-5'>
      <h1>Download your shows to watch offline.</h1>
      <h3>Save your favorites easily and always have something to watch.</h3>
    </div>
    <div>
    <div className='relative'>
      <img src={app} alt="" className='relative -left-20 w-5/6 z-10'/>
    </div>
    </div>
 </div>
//     </div>
  )
}

export default SectionTwo;