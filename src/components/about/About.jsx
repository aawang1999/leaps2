import React, { useContext } from 'react'
import './About.css'
import { Context } from '../../Context'

const data = [
  {
    id: 1,
    title: "Accessible",
    zhTitle: "觸手可及",
    caption: "Our services are completely virtual, so you can log on from home, school, or your favorite café. This saves us the cost of renting offices, and saves you countless trips.",
    zhCaption: "我們的諮詢服務一律透過視訊會議進行，不僅為我們節省租用辦公室的成本，也為您提供遠端交談的便利性。",
  },
  {
    id: 2,
    title: "Cost-Effective",
    zhTitle: "價格誠實",
    caption: "Annual costs for US college consulting services range between $8000 and $15000. Premium packages can cost even more. We offer our personalized service at the competitive annual price of $9880.",
    zhCaption: "美國大學諮詢的年費通常介於8000至15000美元之間。有些高端方案的年費甚至更高。我們以每年9880美元的誠實價格，提供每位學生個人化的諮詢服務。",
  },
  {
    id: 3,
    title: "Transparent",
    zhTitle: "實際透明",
    caption: "We are committed to giving you the high-quality service and actionable advice that you pay for. No sugarcoated guarantees, fancy packages, or hidden fees.",
    zhCaption: "我們將盡力提供每個學生優質的服務與實際的建議，不會採取粉飾保證、隱藏費用等不誠實的手段。",
  },
]

const About = () => {
  const { language } = useContext(Context)
  return (
    <section className="about container section" id='about'>
      <h2 className={`section__title ${language === 'en' ? '' : 'zh__header'}`} style={{marginBottom: '0.5rem'}}>{language === 'en' ? 'Why Us?' : '躍升優勢'}</h2>
      <div className={`about__subtitle ${language === 'en' ? '' : 'zh__normal'}`}>
        {language === 'en' ? 
          (
            <>
              Having went through the college application process just a few years ago, we at Leaps want to offer students a more <strong>practical and tailored alternative</strong> to the traditional college consulting service. We are confident that our insider knowledge of the current U.S. university scene can give every student the opportunity to study at <strong>the colleges that best suit them</strong>.
            </>
          ) : (
            <>
              身為不久前才經歷過大學申請過程的大學生，我們躍升團隊希望提供學生一個比傳統大學諮詢<strong>更實際且有效的</strong>諮詢服務。我們深信，透過我們對美國大學體制的內部了解，我們能幫助每位學生進入<strong>最合適的大學</strong>。
            </>
          )
        }
      </div>
      <div className="about__container grid">
        {data.map(({id, title, zhTitle, caption, zhCaption}) => {
          return (
            <div className="about__card" key={id}>
              <h3 className={`about__title ${language === 'en' ? '' : 'zh__header about__zh-title'}`}>{language === 'en' ? title : zhTitle}</h3>
              <div className={`about__caption ${language === 'en' ? '' : 'zh__normal'}`}>{language === 'en' ? caption : zhCaption}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default About