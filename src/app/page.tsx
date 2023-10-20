import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'

import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btns/social-btns'
import {Journey} from './components/journey/journey'
export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
        <div className="educational-info ">

          </div>
          <SocialBtns/>
          <a className="btn-primary" href="mailto:renanmenesesdev@gmail.com" target="_blank">
            contact me
            <EmailIcon/>
          </a>
        </div>
    </main>
  )
}
