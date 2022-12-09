import React from 'react'
import styles from '../../style'

const Gallery = () => {
  return (
    <div className={`${styles.boxWidth} px-3 sm:px-0 my-6`}>
        <iframe src="https://snapwidget.com/embed/1018777" class="snapwidget-widget border-0 overflow-hidden w-full h-[45em] ss:h-[50em] sm:h-[58em] md:h-[75em] xl:h-[105em]" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
  )
}

export default Gallery