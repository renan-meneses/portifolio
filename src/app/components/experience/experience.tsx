import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>          As a Full Stack developer in a consultancy, it allowed me to move from projects in the Financial area, enabling me to assist in mitigating fraud and increasing profits in one of the largest Marketplace Play's, always aiming for better functionality and always improving system flows, with a vast base and many integrations, ranging from internal solutions and many external solutions aimed at the financial area.</p>
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