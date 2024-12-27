import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {
  IoMenuOutline,
  IoHomeOutline, 
  IoChatbubblesOutline,
  IoGridOutline,
  IoLanguageOutline
} from 'react-icons/io5'
import Logo from '../../assets/logos/logo.png'
import { Context } from '../../Context'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  const { language, setLanguage } = useContext(Context)

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className='nav__logo' onClick={
          () => {
            if (toggle) setToggle(!toggle)
          }
        }>
          <img src={Logo} alt="" />
        </a>
        <nav className='nav'>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className="nav__item">
                <a href="#home" className="nav__link" onClick={
                  () => {
                    if (toggle) setToggle(!toggle)
                  }
                }>
                  <IoHomeOutline />
                </a>
              </li>
              <li className="nav__item">
                <a href="#reviews" className="nav__link" onClick={
                  () => {
                    if (toggle) setToggle(!toggle)
                  }
                }>
                  <IoChatbubblesOutline />
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={
                  () => {
                    if (toggle) setToggle(!toggle)
                  }
                }>
                  <IoGridOutline />
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" onClick={
                  () => {
                    setLanguage(language === 'en' ? 'zh' : 'en')
                    if (toggle) setToggle(!toggle)
                  }
                }>
                  <IoLanguageOutline />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className={`copyright ${language === 'en' ? '' : 'zh__small'}`}>
            {language === 'en' ? '2024 © Leaps' : '2024 © 躍升'}
          </span>
        </div>
      </aside>
      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => setToggle(!toggle)}>
        <IoMenuOutline />
      </div>
    </>
  )
}

export default Sidebar