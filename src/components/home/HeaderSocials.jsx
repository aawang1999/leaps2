import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.facebook.com/profile.php?id=61570927694927" className="home__social-link" target='_blank'>
        <IoLogoFacebook />
      </a>
      <a href="" className="home__social-link" target='_blank'>
        <IoLogoInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials