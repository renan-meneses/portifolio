import Image from 'next/image'
import "./header.scss"

export function Header(){
  return(
        <div className="header">
          <div>
            <h1>Hi, i´m Renan! 👋</h1>
            <h2>Software Engineer</h2><br/>
            <h2>5 years working as a Software Developer, in companys such as Catskillet, Magalu, SofMidia, SoftBuilder, Hapvida Notredame and FullBar Digital.</h2>

          </div>
          <Image
            src="/me.png"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
      
        </div>
    )
}