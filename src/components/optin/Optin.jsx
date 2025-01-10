import React, { useContext } from 'react'
import './Optin.css'
import Dropdown from '../dropdown/Dropdown'
import { Context } from '../../Context'

const data = [
  {
    id: 1,
    title: "Junior or Senior Package",
    zhTitle: "11或12年級生方案",
    caption: "Polishing your profile and accentuating your strengths, empowering you to pursue the most suitable university pathways. Includes 40 sessions.",
    zhCaption: "打造一份展現您優點的申請素材，幫您實現最合適的升學道路。包含40小時的諮詢。",
    price: "9880",
  },
  {
    id: 2,
    title: "Sophomore Package",
    zhTitle: "10年級生方案",
    caption: "Crafting an outstanding profile through prioritizing your activities and actualizing your goals. Includes 80 sessions.",
    zhCaption: "透過完善的活動規劃及目標制定，幫您打造一份卓越的申請素材。包含80小時的諮詢。",
    price: "18880",
  },
  {
    id: 3,
    title: "Freshman Package",
    zhTitle: "9年級生方案",
    caption: "Crafting an outstanding profile through developing your interests and cultivating your unique voice and goals. Includes 120 sessions.",
    zhCaption: "透過培養興趣及發展個人化目標，幫您打造一份卓越的申請素材。包含120小時的諮詢。",
    price: "26880",
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
                Opt into a Leaps package anytime at <strong>no extra cost!</strong>
              </>
            ) : (
              <>
                隨時加入方案服務，<strong>不需額外費用！</strong>
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