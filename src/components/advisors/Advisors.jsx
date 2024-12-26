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
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    image: Advisor2,
    title: "Kenton",
    bio: "Eu faucibus amet donec; purus magnis ac. Ligula est feugiat habitasse class; lobortis aliquam. Sociosqu feugiat volutpat scelerisque accumsan sapien tempor blandit enim.",
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
        {data.map(({id, image, title, bio}) => {
          return (
            <SwiperSlide className="advisors__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='advisors__title'>{title}</h3>
              <div className="comment">{bio}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Advisors