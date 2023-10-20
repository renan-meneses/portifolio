import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>5 years working as a Software Developer, in companys such as Catskillet, Magalu, SofMidia, SoftBuilder, Hapvida Notredame and FullBar Digital.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={3} years="4 years"/>
            <Skill image="/next.png" measure={1} years="1 years"/>
            <Skill image="/angula.png" measure={2} years="3 years"/>
            <Skill image="/ts.png" measure={4} years="4 years"/>
            <Skill image="/js.png" measure={3} years="3 years"/>
            <Skill image="/java.png" measure={2} years="2 year"/>
            <Skill image="/python.png" measure={5} years="5 year"/>
            <Skill image="/django.png" measure={5} years="5 year"/>
            <Skill image="/flask.png" measure={3} years="4 year"/>
            <Skill image="/php.png" measure={3} years="3 year"/>
            <Skill image="/laravel.png" measure={3} years="3 year"/>
            <Skill image="/c.png" measure={3} years="3 year"/>
            <Skill image="/net.png" measure={3} years="3 year"/>

          </div>
        </div>
    )
}