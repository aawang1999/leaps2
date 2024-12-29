import React, { useContext } from 'react'
import './Optin.css'
import Dropdown from '../dropdown/Dropdown'
import { Context } from '../../Context'

const data = [
  {
    id: 1,
    title: "One-Year Package",
    zhTitle: "一年方案",
    caption: "Get 40 sessions for the price of 33.2 sessions.",
    zhCaption: "以33.2小時的價格，享有40小時的服務。",
    price: "4980",
  },
  {
    id: 2,
    title: "Two-Year Package",
    zhTitle: "兩年方案",
    caption: "Get 80 sessions for the price of 65.9 sessions.",
    zhCaption: "以65.9小時的價格，享有80小時的服務。",
    price: "9880",
  },
  {
    id: 3,
    title: "Four-Year Package",
    zhTitle: "四年方案",
    caption: "Get 160 sessions for the price of 125.3 sessions.",
    zhCaption: "以125.3小時的價格，享有160小時的服務。",
    price: "18800",
  },
]

const dropdownData = [
  {
    id: 1,
    title: 'What is the Opt-In Program?',
    zhTitle: '方案加入計劃介紹',
    caption: "",
    zhCaption: '',
  },
]

const Optin = () => {
  const { language } = useContext(Context)
  return (
    <div className='optin__container'>
      <div className='optin__inner-container'>
        <h2 className={`optin__title ${language === 'en' ? '' : 'zh__header'}`}>{language === 'en' ? 'Opt-In Program' : '方案加入計劃'}</h2>
        <p className={`optin__caption ${language === 'en' ? '' : 'zh__normal'}`}>
          {language === 'en' ?
            (
              <>
                Opt into a Leaps package anytime at <strong>no extra cost</strong>, and get a <strong>lower per-session price!</strong>
              </>
            ) : (
              <>
                隨時加入方案服務，即不需額外費用，又可享有優惠價格！
              </>
            )
          }
        </p>
        <div className="optin__card-container grid">
          {data.map(({id, title, zhTitle, caption, zhCaption, price}) => {
            return (
              <div className="optin__card" key={id}>
                <h3 className={`optin__card-title ${language === 'en' ? '' : 'zh__header optin__zh-title'}`}>{language === 'en' ? title : zhTitle}</h3>
                <div className={`optin__card-caption ${language === 'en' ? '' : 'zh__normal'}`}>{language === 'en' ? caption : zhCaption}</div>
                <h3 className="optin__card-price">
                  <em>USD</em> {price}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Optin