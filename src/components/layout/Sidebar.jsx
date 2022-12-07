import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../contexts/ContextApp';
import {logoWhite} from '../../assets/index'
import {MdOutlineClose} from 'react-icons/md'
import { navLinks } from '../../constants';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const SidebarLinks = ({link}) => {

  const {sidebar, setSidebar} = useStateContext();

  const [submenuActive, setSubmenuActive] = useState(false);

  useEffect(() => {
    if (!sidebar){
      setSubmenuActive(false);
    } 
  }, [sidebar]);

  return (
    <li
      key={link.title}
      className={`relative w-[200px] flex justify-center ${!submenuActive && 'border-b-2 border-b-white'}`}
    >
      <Link to={!link.categories && link.link} className="block w-full" onClick={() => {if(!link.categories){setSidebar(prev => !prev)}}}>
        
        <span className='flex items-center gap-2 text-white justify-center text-[30px] font-semibold' onClick={() => {if(link.categories){setSubmenuActive(prev => !prev)}}}>
          {link.title}{link.categories && <IoIosArrowDown className={`transition-all ${submenuActive && 'rotate-180'}`} />}
        </span>

        {submenuActive && link.categories && 
          <ul className='relative z-[2] bg-primary my-4 left-0 animate-fadeIn w-full min-w-[200px] border'>
            {link.categories.map(categorie => (
              <li key={categorie.id} className="text-center text-[18px] border-b-2 text-white border-b-white">
                <Link to={categorie.link} className="block px-6 py-3 w-full" onClick={() => setSidebar(prev => !prev)}>{categorie.categorie}</Link>
              </li>
            ))}
          </ul>
        }

      </Link>

    </li>
  )
}

const Sidebar = () => {

  const {sidebar, setSidebar} = useStateContext();

  return (
    <aside className={`w-screen md:hidden block sm:w-[500px] transition-all duration-700 bg-secondary h-screen fixed top-0 shadow-2xl z-[10] ${sidebar ? 'translate-x-[0]' : '-translate-x-[100%]'}`}>
      <div className='relative z-[2] bg-primary h-screen overflow-auto'>
        <div className='px-4 py-6 flex justify-between items-center flex-row-reverse'>
          {/* <img src={logoWhite} alt="Logo"  className='w-[100px] object-contain'/> */}
          <span className='text-[50px] text-white' onClick={() => setSidebar((prev) => !prev)}><MdOutlineClose /></span>
        </div>
        <div className='mt-5'>
          <ul className='flex flex-col items-center gap-3'>
              {navLinks.map((link) => (
                <SidebarLinks link={link} />
              ))}
          </ul>
        </div>
      </div>
      <div onClick={() => setSidebar(prev => !prev)} className={`w-screen h-screen absolute top-0 z-[1] animate-slide bg-black/50 opacity-100 ${sidebar ? 'block' : 'hidden'}`} />
    </aside>
  )
}

export default Sidebar