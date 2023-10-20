import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"
import { Journey } from "../journey/journey"

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
        <SectionTitle text="Detailed experience"/>

        <div className="educational-info ">
        <Journey company = "Softmidia" office="Developer Junior" period="mai de 2019 - ago de 2019" description="Creation and development of web systems, analysis of system requirements development and data analysis."/>
        {/* <Journey company = "Softmidia" office="Developer Junior" period="mai de 2019 - ago de 2019" description="Creation and development of web systems, analysis of system requirements development and data analysis."/>
        <Journey company = "Softmidia" office="Developer Junior" period="mai de 2019 - ago de 2019" description="Creation and development of web systems, analysis of system requirements development and data analysis."/>
        <Journey company = "Softmidia" office="Developer Junior" period="mai de 2019 - ago de 2019" description="Creation and development of web systems, analysis of system requirements development and data analysis."/>
        <Journey company = "Softmidia" office="Developer Junior" period="mai de 2019 - ago de 2019" description="Creation and development of web systems, analysis of system requirements development and data analysis."/> */}
          </div>
      </div>
    )
}