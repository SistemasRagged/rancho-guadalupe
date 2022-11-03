import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {logoWhite} from '../../assets/index';
import { navLinks } from '../../constants';
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi';
import { useStateContext } from '../../contexts/ContextApp';
import styles from '../../style';

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

  const {setSidebar, sidebar} = useStateContext();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (sidebar){
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  },[sidebar])

  const handleScroll = () => {
    if(window.scrollY > 0){
      setScroll(true);
    } else {
      setScroll(false);

    }
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    }

    watchScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
  <header className='sticky top-0 z-[6]' id="header">
    <main className={`w-full bg-primary sm:relative z-[6] ${styles.paddingX} py-4  flex justify-between items-center shadow-sm`}>
      <div className={`${styles.boxWidth} relative z-[2] flex items-center justify-between`}>
        <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
            <img src={logoWhite} alt="Logo" className={`${scroll ? 'w-[50px]' : 'w-[100px]'} object-contain transition-all duration-700`}/>
            <h1 className={`text-xl ${scroll ? 'sm:text-2xl' : 'sm:text-4xl'} ml-4 font-primary text-white font-semibold transition-all duration-500`}>Rancho Guadalupe</h1>
          </Link>
        </div>

        <div className={`hidden ${scroll ? 'flex-row gap-3 items-center' : 'flex-col'} sm:flex text-dimWhite transition-all duration-700`}>
          <span className='text-[14px] text-right'>Contáctanos</span>
          <a href="tel:604123456789" className='hover:text-white'>604 123 4567</a>
          {scroll && <span>|</span>}
          <a href="tel:3202871949" className='hover:text-white'>320 287 1949</a>
        </div>

        <span className="text-[40px] sm:hidden flex text-white" onClick={() => setSidebar((prev) => !prev)}><HiMenu /></span>
      </div>
    </main>
    <nav className={`w-full hidden sm:block z-[6] bg-secondary`}>
      <div className={`${styles.boxWidth}`}>
        <ul className='flex items-center '>
          {navLinks.map(link => (
            <MenuLinks link={link} />
          ))}
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Navbar