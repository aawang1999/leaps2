import React, { useContext } from 'react'
import './Banner.css'
import Context from '../../Context'

const Banner = () => {
  const { language } = useContext(Context)
  
  return (
    <div className="banner__container">
      <div className='banner__inner-container'>
        <h2 className={`banner__title ${language === 'en' ? '' : 'zh__header'}`}>{language === 'en' ? 'Free Consultation' : '免費首次諮詢'}</h2>
        <p className={`banner__caption ${language === 'en' ? '' : 'zh__normal'}`}>{language === 'en' ? "If this is your first time using our services, please leave your information by clicking the button below and we'll get in touch shortly!" : "如果這是您首次使用我們的服務，請點擊下方按鈕並留下聯絡方式。我們將盡快與您聯繫！"}</p>
        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4w2bnCFUoCAUTAJb8" className={`btn ${language === 'en' ? '' : 'zh__normal'}`}>
          {language === 'en' ? 'Get Started' : '點擊報名'}
        </a>
      </div>
    </div>
  )
}

export default Banner