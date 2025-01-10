import React, { useState, useContext } from 'react'
import './Services.css'
import Menu from './Menu'
import Dropdown from '../dropdown/Dropdown'
import Optin from '../optin/Optin'
import { Context } from '../../Context'

const dropdownData = [
  {
    id: 1,
    title: 'What are Sessions?',
    zhTitle: '單次服務介紹',
    caption: "Leaps sessions are virtual and consist of 1 hour of work. A session may be synchronous (e.g. an advisor hosts a Zoom call with a student) or asynchronous (an advisor conducting research on a student's behalf). Sessions are charged per hour. Advisors will document all sessions provided and the amounts charged, which will be made available to the parent or student periodically, or upon request. Advisors will never conduct, or charge for, any sessions without the parent or student's approval.",
    zhCaption: '躍升的單次服務均以線上模式進行，時間為1小時。單次服務可為同步進行（例如：顧問與學生進行視訊會議）或非同步進行（例如：顧問在網上為學生搜尋大學申請的相關資訊）。單次服務按小時收費。顧問將紀錄所有單次服務項目及費用，並定期提供給家長及學生。家長及學生也可以主動向顧問索取其紀錄。顧問絕對不會在未經家長或學生的形況下，向其收取任何服務費用。',
  },
  {
    id: 2,
    title: 'What are Packages?',
    zhTitle: '方案介紹',
    caption: 'Leaps packages contain a certain number of sessions. Parents or students who purchase a package are charged a one-time package price, unless they exceed the allotted number of sessions. Excess sessions will be charged by the hourly rate. Parents or students may use the package allotment towards any combination of Leaps sessions. All services included in a package terminate at the end of the last school year.',
    zhCaption: '躍升的方案包含指定時數的服務。購買方案的家長或學生只需支付一次性的方案費用，除非服務的使用時數超出方案的指定時數。超出指定時數的服務均如同單次服務按小時收費。家長或學生可以將方案包含的時數用於任何組合的躍升服務。方案的所有相關服務將於指定的學年結束時終止。',
  },
  {
    id: 3,
    title: 'What is the Opt-In Program?',
    zhTitle: '方案加入計劃介紹',
    caption: "Those who have purchased Leaps sessions but have not purchased a Leaps package may opt into a package at any time. When opting in, any sessions that the parent or student purchased during the same school year may be deducted from the package, up to the package's session allotment. The package terminates at the end of the last school year.",
    zhCaption: '已購買躍升單次服務的家長或學生可以隨時加入躍升方案。加入方案時，所有當學年購買的單次服務價格與次數即可從方案中扣除。方案的所有相關服務仍會於指定的學年結束時終止。',
  },
]

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
    <>
      <section className="services container section" id='services' style={{paddingBottom: '3.75rem'}}>
        <h2 className={`section__title ${language === 'en' ? '' : 'zh__header'}`} style={{marginBottom: '0.5rem'}}>
          {language === 'en' ? 'Services' : '服務項目'}
        </h2>
        <div className={`services__subtitle ${language === 'en' ? '' : 'zh__normal'}`}>
          {language === 'en' ? 
            (
              <>
                If this is your first time using our services, please leave your information for a <strong>free consultation session</strong> by clicking the button below and we'll get in touch shortly!
              </>
            ) : (
              <>
                如果您是首次諮詢，請點擊下方按鈕並<strong>免費預約一場諮詢會議</strong>。我們將盡快與您聯繫！
              </>
            )
          }
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4w2bnCFUoCAUTAJb8" className={`btn ${language === 'en' ? '' : 'zh__normal'}`}>
          {language === 'en' ? 'Get Started' : '點擊報名'}
        </a>
        <div style={{marginTop: '3.75rem'}}>
          <Dropdown data={dropdownData} />
        </div>
      </section>
      <Optin />
      <section className='container section' style={{paddingTop: '3.75rem'}}>
        <div className="services__filters">
          <span className={`services__item ${language === 'en' ? '' : 'zh__normal'}`} onClick={() => setItems(Menu)}>{language === 'en' ? 'All' : '所有服務'}</span>
          <span className={`services__item ${language === 'en' ? '' : 'zh__normal'}`} onClick={() => filterItem("Session")}>{language === 'en' ? 'Sessions' : '單次'}</span>
          <span className={`services__item ${language === 'en' ? '' : 'zh__normal'}`} onClick={() => filterItem("Package")}>{language === 'en' ? 'Packages' : '方案'}</span>
        </div>
        <div className="services__container grid">
          {items.map((elem) => {
            const { id, title, zhTitle, category, zhCategory, price, caption, zhCaption } = elem
            return (
              <div className='services__card' key={id}>
                <span className={`services__${category === "Session" ? "session" : "package"}-category ${language === 'en' ? '' : 'zh__small'}`}>{language === 'en' ? category : zhCategory}</span>
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
    </>
  )
}

export default Services