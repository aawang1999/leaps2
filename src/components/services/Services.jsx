import React, { useState, useContext } from 'react'
import './Services.css'
import Menu from './Menu'
import { Context } from '../../Context'

const Services = () => {
  const [items, setItems] = useState(Menu)
  const { language } = useContext(Context)
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((currElem) => {
      return currElem.category === categoryItem
    })
    setItems(updatedItems)
  }

  return (
    <section className="services container section" id='services'>
      <h2 className={`section__title ${language === 'en' ? '' : 'zh__header'}`} style={{marginBottom: '0.5rem'}}>
        {language === 'en' ? 'Services' : '服務項目'}
      </h2>
      <div className={`services__subtitle ${language === 'en' ? '' : 'zh__normal'}`}>
        {language === 'en' ? 'Click the tabs below to learn more about our offerings. For your first meeting, we recommend a free General Consultation session.' : '歡迎透過點擊以下選項了解我們的服務詳情。若是首次諮詢，歡迎免費預約綜合諮詢會議，以討論大學申請的方向。'}
      </div>
      <div className="services__filters">
        <span className={`services__item ${language === 'en' ? '' : 'zh__normal'}`} onClick={() => setItems(Menu)}>{language === 'en' ? 'All' : '所有服務'}</span>
        <span className={`services__item ${language === 'en' ? '' : 'zh__normal'}`} onClick={() => filterItem("Hourly")}>{language === 'en' ? 'Hourly' : '小時制'}</span>
        <span className={`services__item ${language === 'en' ? '' : 'zh__normal'}`} onClick={() => filterItem("Yearly")}>{language === 'en' ? 'Yearly' : '學年制'}</span>
      </div>
      <div className="services__container grid">
        {items.map((elem) => {
          const { id, title, zhTitle, category, zhCategory, price, caption, zhCaption } = elem
          return (
            <div className='services__card' key={id}>
              <span className={`services__${category === "Hourly" ? "hourly" : "yearly"}-category ${language === 'en' ? '' : 'zh__small'}`}>{language === 'en' ? category : zhCategory}</span>
              {
                id === 1 ? (
                  <span className={`services__${language === 'en' ? '' : 'zh-'}free-category ${language === 'en' ? '' : 'zh__small'}`}>{language === 'en' ? '1st Session Free' : '首次免費'}</span>
                ) : (
                  <></>
                )
              }
              <div className="services__inner-container">
                <div className='services__top-container'>
                  <h3 className={`services__title ${language === 'en' ? '' : 'zh__header services__zh-title'}`}>{language === 'en' ? title : zhTitle}</h3>
                  <p className={`services__caption ${language === 'en' ? '' : 'zh__normal'}`}>{language === 'en' ? caption : zhCaption}</p>
                </div>
                <h3 className="services__price">
                  <em>USD</em> {price}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services