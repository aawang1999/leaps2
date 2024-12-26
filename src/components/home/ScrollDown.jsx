import React, { useContext } from 'react'
import { Context } from '../../Context'

const ScrollDown = () => {
  const { language } = useContext(Context)

  return (
    <div className="scroll__down">
      <a href="#reviews" className='mouse__wrapper'>
        <span className={`home__scroll-name ${language === 'en' ? '' : 'zh__small'}`}>
          {language === 'en' ? 'Scroll Down' : '向下滾動'}
        </span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown