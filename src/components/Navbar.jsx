import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import { Link } from 'react-scroll';
import PC from '../assets/PC.jpg'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='fixed w-full h-[50px] text-gray-300 flex flex-row justify-between items-center px-4 bg-[#0a192f] md:flex'>
       <div>
            <Link to='home' smooth={true} duration={500}>
              <img src={PC} className=" px-2 py-4 h-[70px]" alt='logo'/>
            </Link>
        </div> 
       {/* Main Menu */}
            <ul className=' hidden md:flex '>
                <li className='hover:text-pink-500 hover:scale-110 duration-200 px-4'>
                  <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200 px-4'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200 px-4'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200 px-4'><Link to='work' smooth={true} duration={500}>Work</Link></li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200 px-4'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer mr-0 ml-auto'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile device menu */}
        
            <ul className={!nav ? 'hidden ' : "flex flex-col p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[50px] text-black z-10 rounded-xl"}>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='work' smooth={true} duration={500}>Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        
        {/* social links */}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/gmamatha1996/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/MamathaGowd64'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar