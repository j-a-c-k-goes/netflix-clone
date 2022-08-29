import kids from '../images/kids.png'

function SectionFour(){
  return(
    <div className='flex flex-col-reverse lg:flex-row-reverse  p-[3.5rem] md:p-[5rem] border-b-gray-600 border-b-8'>
    <div className='w-full lg:w-4/6 my-auto space-y-5 text-center lg:text-left'>
      <h1>Create profiles for kids.</h1>
      <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
    </div>
    <div>
    <div className='relative'>
      <img src={kids} alt="" className='relative -left-10 w-[80%] z-10'/>
    </div>
    </div>
 </div>
//     </div>
  )
}

export default SectionFour;