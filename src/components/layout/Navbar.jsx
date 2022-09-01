import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { navLinks } from '../../constants';
import { BsBag } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi';
import { useStateContext } from '../../contexts/ContextApp';
import styles from '../../style';

const Navbar = () => {

  const {setSidebar} = useStateContext();

  return (
    <header className='w-full h-[100px] bg-secondary/[.85] backdrop-blur-lg sticky top-0 z-[6] sm:px-16 px-6 py-4  flex justify-between items-center'>
      <div className={`${styles.boxWidth} relative z-[2] flex items-center justify-between`}>
        <div className='flex items-center'>
          <Link to="/"><img src={logo} alt="Logo" className='w-[65px] rounded-full object-contain'/></Link>
          <h1 className='sm:text-4xl text-xl ml-4 font-poppins text-white font-semibold'>Rancho Guadalupe</h1>
        </div>
        <ul className='md:flex gap-6 align-center hidden'>
          {navLinks.map((list) => (
            <li 
              key={list.id} 
              className="text-white text-normal uppercase font-poppins cursor-pointer"
            >
              <Link to={list.link}>{list.id === 'cart' ? <span className='text-[20px]'><BsBag /></span> : list.title}</Link>
            </li>
          ))}
        </ul>
        <span className="text-[40px] md:hidden flex text-white" onClick={() => setSidebar((prev) => !prev)}><HiMenu /></span>
      </div>
      {/* <div className='w-[100%] h-full absolute blur-sm z-[1] top-0 left-0 bg-secondary/80'/> */}
    </header>
  )
}

export default Navbar