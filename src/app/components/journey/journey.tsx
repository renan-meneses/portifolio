import { SectionTitle } from "../sectionTitle/section-title"

import "./journey.scss"

interface JourneyProps {
  company: string,
  office: string,
  description: string,
  period:string,
}
export function Journey(props : JourneyProps){
    return(
      <div className="journey-language">
            <div className="journey-unit">
              <h3>{props.company}</h3> - <h4>{props.office}</h4>
                </div>
                <span> {props.period} </span>
                <p>{props.description}</p>
      </div>
    )
}
