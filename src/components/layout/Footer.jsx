import React from 'react'
import styles from '../../style'
import {logoWhite} from '../../assets/index'
import { footerLinks, socialMedia } from '../../constants'

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} bg-darkPrimary ${styles.paddingX} flex-col`}>
    <div className={styles.boxWidth}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-row md:flex-col gap-10 md:gap-0 justify-start mr-10">
        <img src={logoWhite} alt="hooBank" className="w-[150px] h-[150px] object-contain" />
        <p className={`${styles.paragraph} text-dimWhite mt-4 max-w-[310px]`}>Exercitation pariatur labore nisi proident sunt non irure est dolore mollit.</p>
      </div>

      {/* <div className="flex-[2.5] w-full flex flex-row justify-center xs:justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} className="flex flex-col ss:my-6 my-4 min-w-[150px]">

            <h4 className="font-primary font-medium text-center sm:text-left text-white text-[18px] leading-[27px]">{footerLink.title}</h4>

            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={index} className={`font-primary font-normal text-center sm:text-left transition-colors duration-300 text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-primary font-normal text-center text-dimWhite text-[18px] leading-[27px]"> 
        {new Date().getFullYear()} Rancho Guadalupe. All Rights Reserved. &copy;
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a 
            key={social.id} 
            href={social.link}
            target="_blank"
          >
            <img 
            src={social.icon}
            alt={social.id} 
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}            
            />
          </a>
        ))}
      </div>
    </div>
    </div>

  </footer>
)

export default Footer