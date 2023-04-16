import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { WhatsApp, Telegram } from '@material-ui/icons';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://www.instagram.com/zeze_lamar/"><InstagramIcon /></a>
            <a href="https://linkedin.com/in/zeze-deyoko-zz77270827"><LinkedInIcon />   </a>
            <a href="https://wa.me/223777270827"><WhatsApp /></a>
            <a href="https://t.me/zeze_lamar"><Telegram /></a>

        </div>
        <p> &copy; 2023 Zeze Lamar</p>
    </div>
  )
}

export default Footer