import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'



const Home = () => {
 
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen z-0'>
        <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full sm:h-full'>
           <p className='text-pink-600'>&nbsp;Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >Mamatha Gowdadimmanapalli</h1>
        <h2 className='text-[#8892b0] text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Experienced Software Developer with a passion for creating clean and interactive user interfaces by collborating with backend teams. Proficient in HTML, CSS, JavaScript,React & Node.js,  with a focus on responsive design and cross-browser compatibility.</p>
      <div className='' >
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600' ><Link to='work' smooth={true} duration={500}>View Work</Link>
                <span>
                     < HiArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-3' />
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home