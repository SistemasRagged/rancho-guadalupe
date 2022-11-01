import React from 'react';
import { Link } from 'react-router-dom';
import {logoWhite} from '../../assets/index';
import { navLinks } from '../../constants';
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi';
import { useStateContext } from '../../contexts/ContextApp';
import styles from '../../style';
import { useState } from 'react';

const MenuLinks = ({link}) => {

  const [submenuActive, setSubmenuActive] = useState(false);

  return (
    <li 
      key={link.id} 
      className={`relative ${styles.hoverLink}`}
      onMouseEnter={() => setSubmenuActive(true)} 
      onMouseLeave={() => setSubmenuActive(false)}
    >
      <Link to={!link.categories && link.link} className="block px-6 py-3 ">

        <span className='flex items-center gap-2'>
          {link.title}{link.categories && <IoIosArrowDown className={`transition-all ${submenuActive && '-rotate-180'}`}/>}
        </span>

        {submenuActive && link.categories && 
          <ul className='absolute top-[100%] left-0 w-full shadow-2xl'>
            {link.categories.map(categorie => (
              <li key={categorie.id}>
                <Link to={categorie.link} className="block text-center px-2 py-3 w-full bg-orange-300 hover:brightness-90">{categorie.categorie}</Link>
              </li>
            ))}
          </ul>
        }
        </Link>
    </li>
  )
}

const Navbar = () => {

  const {setSidebar} = useStateContext();

  return (
  <>
    <header className={`w-full h-[100px] bg-primary sticky top-0 sm:relative z-[6] ${styles.paddingX} py-4  flex justify-between items-center shadow-sm`}>
      <main className={`${styles.boxWidth} relative z-[2] flex items-center justify-between`}>
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <img src={logoWhite} alt="Logo" className='w-[100px] object-contain'/>
            <h1 className='sm:text-4xl text-xl ml-4 font-primary text-white font-semibold'>Rancho Guadalupe</h1>
          </Link>
        </div>

        <div className='hidden sm:flex flex-col text-dimWhite'>
          <span className='text-[14px] text-right'>Contáctanos</span>
          <a href="tel:604123456789" className='hover:text-white'>604 123 4567</a>
          <a href="tel:3202871949" className='hover:text-white'>320 287 1949</a>
        </div>

        <span className="text-[40px] sm:hidden flex text-white" onClick={() => setSidebar((prev) => !prev)}><HiMenu /></span>
      </main>
    </header>
    <nav className={`w-full hidden sm:block sticky top-0 z-[6] bg-secondary`}>
      <div className={`${styles.boxWidth}`}>
        <ul className='flex items-center '>
          {navLinks.map(link => (
            <MenuLinks link={link} />
          ))}
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar