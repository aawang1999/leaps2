import React, { useState, useContext } from 'react'
import './Dropdown.css'
import { IoChevronForwardCircleOutline, IoChevronDownCircleOutline } from 'react-icons/io5'
import { Context } from '../../Context'

const Dropdown = ({ data }) => {
  const [open, isOpen] = useState(0)
  const { language } = useContext(Context)
  return (
    <div className='dropdown__outer-container'>
      {data.map(({id, title, zhTitle, caption, zhCaption}) => {
        return (
          <div className='dropdown__container' id={id}>
            <div className='dropdown__top-bar'>
              <a className="dropdown__button" onClick={
                () => {
                  isOpen(id === open ? 0 : id)
                }
              }>
                {
                  open === id ? (
                    <IoChevronDownCircleOutline />
                  ) : (
                    <IoChevronForwardCircleOutline />
                  )
                }
              </a>
              <h2 className={`dropdown__title ${language === 'en' ? '' : 'zh__header'}`}>{language === 'en' ? title : zhTitle}</h2>
            </div>
            <p className={`${language === 'en' ? '' : 'zh__normal'} ${open === id ? 'dropdown__caption' : 'dropdown__caption-hidden'}`}>
              {language === 'en' ? caption : zhCaption}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Dropdown