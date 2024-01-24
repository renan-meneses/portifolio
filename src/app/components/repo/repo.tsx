
import "./repo.scss"

interface RepoProps {
  name: string,
  url: string,
  created_at: string,
  language: string
}
export function Repo(props : RepoProps){
    return(
        
      <div className="repo-language">
            <div className="repo-unit">
              <h3>{props.name}</h3> - <h4>{props.language}</h4><br/>
                </div>
                <h4>url: {props.url}</h4>

            <h4> create at: {props.created_at} </h4>
      </div>
    )
}
