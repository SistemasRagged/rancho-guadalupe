import {socialMedia} from '../../constants'
import {BiPlus} from 'react-icons/bi'
import { useState } from 'react';

const SocialSide = () => {

    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className="fixed left-0 bottom-0 md:top-[50%] md:-translate-y-[25%] z-10 ">
            <ul className={`${isExpand ? 'translate-y-0 gap-1' : 'opacity-0 -translate-y-[75%] pointer-events-none'} mx-2 md:mx-0 md:opacity-100 md:translate-y-0 md:pointer-events-auto transition-all duration-500 flex flex-col`}>
                {socialMedia.map(social => (
                    <li key={social.id} title={social.id} className={``}>
                        <a className='flex-items-center'  href={social.link} target="_blank" rel="no-referrer"><img className='w-[50px] h-[50px] rounded-full md:rounded-none object-contain p-3' src={social.icon} alt={social.id} style={{backgroundColor: social.hex}}/></a>
                    </li>
                ))}
            </ul>
            <BiPlus className={`block md:hidden bg-secondary text-white text-[50px] p-2 rounded-full m-2 hover:brightness-90 transition-all duration-300 ${isExpand && 'rotate-[135deg]'}`} onClick={() => setIsExpand(prev => !prev)}/>
        </div>
        
    )
}

export default SocialSide;