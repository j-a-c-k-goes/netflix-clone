import tv from '../images/tv.png'

function Section(){
  return(
    <div className='flex flex-col lg:flex-row bg-black p-[3.5rem] md:p-[5rem] text-white border-b-gray-600 border-b-8 border-t-8 border-t-gray-600 text-center lg:text-left'>
    <div className='w-full lg:w-3/6 my-auto space-y-5'>
      <h1>Enjoy on your TV.</h1>
      <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
    </div>
    <div>
    <div className='relative'>
      <img src={tv} alt="" className='relative left-20 w-5/6 z-10'/>
      <div className='absolute top-20 left-36 w-3/5'>
        <video className='w-full' autoPlay playsInline muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>
        </video>
      </div>
    </div>
    </div>
 </div>
//     </div>
  )
}

export default Section;