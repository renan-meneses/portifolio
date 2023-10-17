import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/renan.pato/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/renan-meneses-a75466ab/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/renan-meneses" target="_blank">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/reeh_meneses" target="_blank">
                <TwitterIcon/>
            </a>
        </div>
    )
}