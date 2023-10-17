import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - intermediary</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
          <span>🇪🇸 ES - Basic</span>

        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Analysis and Systems Development - UNiFanor</span>
        </div>
      </div>
    )
}