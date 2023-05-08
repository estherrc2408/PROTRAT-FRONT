import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { takeProjectInfo } from '../../features/project/projectSlice';


import { useFetch } from '../hooks/useFetch';
import { ProjectCard } from './ProjectCard';



export const ProjectsList = () => {
  //hallar proyectos de usuario por nickname
  const { nickname } = useParams();

  const { getData, isLoading } = useFetch();
  let { projects } = useSelector(state => state.projects);

  const loader = () => {
    getData(`/api/projects/uid/${nickname}`, 'GET', {}, takeProjectInfo)
  }

  useEffect(() => {
    loader();
  }, [])


  return (
    <>
    <div className='p-3 mg:p-5 lg:p-8'>
      <Link to="create" className="btn btn-success">New project</Link>
      {isLoading &&
        <h2>Loading...</h2>
      }
      <div className=' grid grid-cols-1 lg:grid-cols-2'>
      {(typeof projects.length !== Object) ? 
        
       ( projects && projects.map((project) =>

          <ProjectCard key={project.idproject}{...project} />
          )
       

      ) : (<ProjectCard project={projects} setDelete={setDelete} />)}
      </div>
      {/* {projects&&projects.map((project)=>
      <ProjectCard key={project.idproject}{...project}/>
      )} */}

</div>
    </>
  )
}
