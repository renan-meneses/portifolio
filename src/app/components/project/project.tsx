"use client"
import React, { useEffect, useState } from 'react'
import { Repo } from '../repo/repo'
import"./project.scss"
import { SectionTitle } from "../sectionTitle/section-title"


export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/renan-meneses/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        var data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <div className="projects">
      <SectionTitle text="Projetos"/>
      
        {itemsApi.map(repo => (
          <table className="table">
          <thead>
           <tr>
          <Repo name={repo.name.toUpperCase()} url={repo.url} created_at={ Intl.DateTimeFormat('pt-BR').format(new Date(repo.created_at))} language={repo.language}/>
          </tr>
          </thead>
      </table>
        ))}
     
    </div>
  )
}