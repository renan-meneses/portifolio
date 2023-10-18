import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./journey.scss"
import { Skill } from "../skill/skill"

export function Journey(){
    return(
        <div className="journey">
          <SectionTitle text="journey"/>
          <p>5 years working as a Software Developer, in companys such as Catskillet, Magalu, SofMidia, SoftBuilder, Hapvida Notredame and FullBar Digital.</p>
          <div className="journey-time">
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
            <Skill image="/c.png" measure={2} years="2 year"/>
            <Skill image="/net.png" measure={2} years="2 year"/>

          </div>
        </div>
    )
}