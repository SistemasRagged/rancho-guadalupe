import React from 'react'
import { useStateContext } from '../../contexts/ContextApp';
import logo from '../../assets/logo.png'
import {MdOutlineClose} from 'react-icons/md'
import { BsBag } from 'react-icons/bs'
import { navLinks } from '../../constants';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const {sidebar, setSidebar} = useStateContext();
  const body = document.body.classList

  if (sidebar) {
    body.add('overflow-hidden');
  } else {
    body.remove('overflow-hidden');
  }

  return (
    <div className={`w-screen md:hidden block sm:w-[500px] transition-all duration-700 bg-secondary h-screen fixed top-0 z-[10] ${sidebar ? 'translate-x-[0]' : '-translate-x-[100%]'}`}>
      <div className='px-4 py-6 flex justify-between items-center'>
        <img src={logo} alt="Logo"  className='w-[50px] rounded-full object-contain'/>
        <span className='text-[50px] text-white' onClick={() => setSidebar((prev) => !prev)}><MdOutlineClose /></span>
      </div>
      <div className='mt-5'>
         <ul className='flex flex-col items-center gap-3'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                onClick={() => setSidebar((prev) => !prev)} 
              >
                <Link 
                  to={link.link}
                  className="text-[28px] font-poppins flex items-center gap-3 font-semibold text-white"
                >
                  {link.title}{link.id === 'cart' && <BsBag />}
                </Link>
              </li>
            ))}
         </ul>
      </div>
    </div>
  )
}

export default Sidebar