import React from 'react'
import { features } from '../../constants';
import styles, { layout } from '../../style';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 before:rounded-[20px] ${index !== features.length - 1 ? "mb-6"  : "mb-0"} feature-card w-full relative z-[2]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} relative z-[2]`}>
      <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3 relative z-[2]">
      <h4 className="font-primary font-semibold text-primary text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-primary font-normal text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Features = () => (
  <section className={`${styles.boxWidth} ${styles.padding} ${styles.paddingY} flex flex-col md:flex-row xl:px-0`} id="features">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Nuestras donadoras y reproductores con su Rojo Guadalupe</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ss:text-[24px]`}>Animales mejorados geneticamente para contribuir al mejoramiento de su ganaderia.</p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index}/>
      ))}
    </div>
  </section>
)


export default Features