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
        {language === 'en' ? 
          (
            <>
              Click the tabs below to learn more about our offerings. If this is your first time using our services, please leave your information for a <strong>free consultation session</strong> by clicking the button below and we'll get in touch shortly!
            </>
          ) : (
            <>
              歡迎瀏覽以下選項以了解我們的服務詳情。若是首次諮詢，請點擊下方按鈕並<strong>免費預約一場諮詢會議</strong>。我們將盡快與您聯繫！
            </>
          )
        }
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4w2bnCFUoCAUTAJb8" className={`btn ${language === 'en' ? '' : 'zh__normal'}`}>
        {language === 'en' ? 'Get Started' : '點擊報名'}
      </a>
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