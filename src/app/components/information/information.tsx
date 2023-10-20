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

        <div className="buttons-info ">
        <Journey company = "Softmidia" office="Developer Full Stack Junior" period="Mai 2019 - Ago 2019" description="Creation and development of web systems, analysis of system requirements development and data analysis."/>
        <Journey company = "Softbuilder" office="Developer Full Stack Junior" period="Mar 2020 - Nov 2020" description="Creation of education systems and extranets for companies, with emphasis on creating project automation, development for integration with mobile devices."/>
        <Journey company = "Hapvida" office="Developer Full Stack Junior / Mid Level" period="Nov 2020 - Jul 2021" description="Creation of a system focused on telemedicine and systems aimed at evaluating care, with the challenge of creating a reporting system and integrated class scheduling for professionals who had low evaluation scores. Develop applications by defining the technologies to be used. Presenting small workshops to introduce new technologies and new tools in the technological part."/>
        <Journey company = "Fullbar Digital" office="Developer Full Stack Mid Level" period="mai de 2019 - ago de 2019" description="Development of systems aimed at the training business, in a way that rewarded employees, construction of an API with integration with Instagram for managing corporate accounts, assistance in the system aimed at the Pet Shop service network, which presented the closest locations and scheduled a location for leaving the pet, generating financial reports."/>
        <Journey company = "Luizalabs" office="Developer Full Stack Mid Level" period="mai de 2019 - ago de 2019" description="Creation and refactoring of financial and business rules aimed at the retail sector, in order to optimize the system so that it was easier to maintain and efficient."/>
        <Journey company = "CATSKILLET" office="Developer Full Stack Mid Level" period="mai de 2019 - ago de 2019" description="Development of financial systems, focused on verifying purchases and releasing values ​​post-purchase, system focused on presentation and management, focused on advertising campaigns, system focused on the construction and development of systems aimed at brand development and visual identity development, financial-oriented system for identifying possible fraud.
Lead development team."/>
          </div>
      </div>
    )
}