import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const ProjectCard = (project) => {
    const {getData} = useFetch();

    const handleClick = (ev)=>{
        console.log(ev.target.id)
    }

  return (
    <div>

<div id={project.idproject} className="py-6 card lg:card-side bg-base-100 shadow-xl">
          <div className='container w-[50%] h-[300px]'>
            <img className="w-[100%] h-[100%] object-cover" src={project.principal_img} alt="Album" />
            </div>
          <div className="card-body">
            <h2 className="card-title">{`${project.title} ${project.project_date.substring(0,10)}`}</h2>
            <h3 className="card-subtitle">{project.subtitle}</h3>
            <p>Fecha de publicación : {project.publication_project.substring(0,10)}</p>
            <div className="card-actions justify-end">
              <button id={project.idproject} className="btn btn-accent" onClick={handleClick}>EDIT</button>
              <button id={project.idproject} className="btn btn-error" onClick={handleClick}>DELETE</button>
            </div>
          </div>
        </div>


    </div>
  )
}
