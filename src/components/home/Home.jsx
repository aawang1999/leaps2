import React, { useContext } from 'react'
import './Home.css'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import { Context } from '../../Context'

const Home = () => {
  const { language } = useContext(Context)

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="" alt="" className="home__img" />
        <h1 className={`home__name ${language === 'en' ? '' : 'zh__header'}`}>
          {language === 'en' ? 'Welcome to Leaps' : '躍升顧問歡迎您'}
        </h1>
        <span className={`home__tagline ${language === 'en' ? '' : 'zh__normal'}`}>
          {language === 'en' ? 'College consulting by students, for students.' : '在校大學生提供的大學諮詢'}
        </span>
        <HeaderSocials />
        <a href="#services" className={`btn ${language === 'en' ? '' : 'zh__normal'}`}>
          {language === 'en' ? 'Our Services' : '服務項目'}
        </a>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home