import React, { useContext } from 'react'
import './Advisors.css'
import Advisor1 from '../../assets/avatars/advisor1.png'
import Advisor2 from '../../assets/avatars/advisor2.png'
import { Context } from '../../Context'

/*===== Swiper Styles =====*/
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Advisor1,
    title: "Tristan",
    bio: "Having completed his Master's in Computer Science at Stanford University in June 2024, Tristan is now a software engineer at NetApp. Originally intending to major in English literature, he attended numerous writing camps, such as the prestigious Iowa Young Writers' Studio. His proficiency in essay composition has led him to help many of his acquaintances with their college applications over the years.",
    zhBio: "Tristan於2024年6月獲得史丹佛大學電腦科學碩士學位，目前在NetApp擔任軟體工程師。由於起初打算主修英語文學，他在高中時期參加過多個寫作夏令營，包含著名的愛荷華青年作家工作室。具備專業寫作能力的他經常幫助朋友修改大學申請的相關文件。",
  },
  {
    id: 2,
    image: Advisor2,
    title: "Kenton",
    bio: "Kenton is pursuing a Master's in Data Science at Johns Hopkins University while working as a data engineer at a startup. He is considered a trustworthy mentor to his peers and students, providing insightful guidance on education and career planning, and successfully supporting many individuals in navigating college admissions and securing internships.",
    zhBio: "Kenton正在攻讀約翰霍普金斯大學資料科學碩士學位，同時在一家新創公司擔任資料工程師。他被同儕和學生視為值得信賴的導師，提供關於教育和職業規劃的深刻見解，並成功幫助許多人完成大學和實習機會的申請。",
  },
]

const Advisors = () => {
  const { language } = useContext(Context)
  return (
    <section className="advisors container section" id='advisors'>
      <h2 className={`section__title ${language === 'en' ? '' : 'zh__header'}`}>{language === 'en' ? 'Advisors' : '顧問簡介'}</h2>
      <Swiper 
        className="advisors__container grid"
        modules={[ Pagination, Autoplay ]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        {data.map(({id, image, title, bio, zhBio}) => {
          return (
            <SwiperSlide className="advisors__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='advisors__title'>{title}</h3>
              <div className={`comment ${language === 'en' ? '' : 'zh__normal'}`}>{language === 'en' ? bio : zhBio}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Advisors