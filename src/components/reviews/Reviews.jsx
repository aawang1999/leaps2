import React, { useContext } from 'react'
import './Reviews.css'
import { Context } from '../../Context'
import Male1 from '../../assets/avatars/male1.png'
import Male2 from '../../assets/avatars/male2.png'
import Male3 from '../../assets/avatars/male3.png'
import Female1 from '../../assets/avatars/female1.png'
import Female2 from '../../assets/avatars/female2.png'
import Female3 from '../../assets/avatars/female3.png'

/*===== Swiper Styles =====*/
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Female1,
    title: "Snow",
    subtitle: "University of Southern California",
    zhSubtitle: "南加州大學",
    comment: "I received great help with my USC graduate school application essay. As a non-native English speaker, I lacked confidence in my writing skills. Tristan helped me make substantial improvements to my essay.",
    zhComment: "躍升在我撰寫研究所申請論文的過程中給予了極大的幫助。因為英文不是我的母語，所以我對自己的英文寫作能力缺乏信心。經由Tristan的幫助，我提升了論文的素質。",
  },
  {
    id: 2,
    image: Male1,
    title: "Danny",
    subtitle: "Carnegie Mellon University",
    zhSubtitle: "卡內基梅隆大學",
    comment: "Kenton helped me identify my reach, match, and safety schools. He was quick to identify the strengths and weaknesses of my application, which gave me a lot of clarity.",
    zhComment: "Kenton幫助我挑選我的衝刺學校、匹配學校和安全學校。他也很有效率的指出我大學申請素材的優點和弱點，幫助我在申請過程中找到明確的方向。",
  },
  {
    id: 3,
    image: Male2,
    title: "Justin",
    subtitle: "Cornell University",
    zhSubtitle: "康奈爾大學",
    comment: "Kenton pointed out that I wasted a lot of time at a school club that I didn't enjoy, and how I could instead focus on what could make me stand out. He used his experience applying for jobs to help me buld my own coding project, which made my application stand out so much more.",
    zhComment: "Kenton讓我意識到我在一個自己並不喜歡的校園社團上浪費了很多時間，並建議我將精力投入在可以讓自己脫穎而出的活動上。他運用自己申請工作的經驗，教我如何製作編程項目，使我的大學申請素材更加出色。",
  },
  {
    id: 4,
    image: Female2,
    title: "Sophie",
    subtitle: "Nothwestern University",
    zhSubtitle: "西北大學",
    comment: "Tristan was a great help when it came to helping me narrow down essay ideas, and being an encouraging sound board for taking risks and being creative when it came to writing!",
    zhComment: "Tristan不僅幫我決定大學申請作文的主題，也鼓勵我在寫作的過程中，踴躍的發揮自己獨有的創意！",
  },
  {
    id: 5,
    image: Female3,
    title: "Wendy",
    subtitle: "University of Texas, Austin",
    zhSubtitle: "德州大學奧斯汀分校",
    comment: "Tristan carefully read through my application and offered precise and invaluable advice. I wholeheartedly recommend him to anyone pursuing guidance for their work.",
    zhComment: "Tristan仔細的審閱了我的申請素材，並提供了精確且寶貴的建議。我由衷的推薦他給任何在大學申請的過程中需要指導的人。",
  },
  {
    id: 6,
    image: Male3,
    title: "Josua",
    subtitle: "University of California, Los Angeles",
    zhSubtitle: "加州大學洛杉磯分校",
    comment: "Tristan was very helpful with editing my college application. I am now attending UCLA so clearly his editing worked. :)",
    zhComment: "Tristan很有效的幫助我修改我的轉學申請素材。如今我正在就讀UCLA，所以可見他的指導奏效了。：）",
  },
]

const Reviews = () => {
  const { language } = useContext(Context)

  return (
    <section className="reviews container section" id='reviews'>
      <h2 className={`section__title ${language === 'en' ? '' : 'zh__header'}`}>
        {language === 'en' ? 'Testimonials' : '優良評語'}
      </h2>
      <Swiper 
        className="reviews__container grid"
        modules={[ Pagination, Autoplay ]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        {data.map(({id, image, title, subtitle, zhSubtitle, comment, zhComment}) => {
          return (
            <SwiperSlide className="review__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='reviews__title'>{title}</h3>
              <span className={`subtitle ${language === 'en' ? '' : 'zh__small'}`}>{language === 'en' ? subtitle : zhSubtitle}</span>
              <div className={`comment ${language === 'en' ? '' : 'zh__normal'}`}>{language === 'en' ? comment : zhComment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Reviews