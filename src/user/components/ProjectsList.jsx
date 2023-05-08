import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { takeProjectInfo } from '../../features/project/projectSlice';


import { useFetch } from '../hooks/useFetch';
import { ProjectCard } from './ProjectCard';



export const ProjectsList = () => {
  const [deleted, setDelete] = useState(false);

  //hallar proyectos de usuario por nickname
  const { nickname } = useParams();

  const { getData, isLoading } = useFetch();
  const navigate = useNavigate();
  let { projects } = useSelector(state => state.projects);
  // console.log(typeof projects)
  //   if(typeof projects!==Array){
  //     projects=[projects];
  //     console.log(projects)
  //   }
  const loader = () => {
    getData(`/api/projects/uid/${nickname}`, 'GET', {}, takeProjectInfo)
  }

  useEffect(() => {
    loader();
    setDelete(false);
  }, [deleted])


  return (
    <>
      <h1>Projects List</h1>
      {isLoading &&
        <h2>Loading...</h2>
      }
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      {(typeof projects.length !== Object) ? 
        
       ( projects && projects.map((project) =>

          <ProjectCard key={project.idproject}{...project} setDelete={setDelete} />
          )
       

      ) : (<ProjectCard project={projects} setDelete={setDelete} />)}
      </div>
      {/* {projects&&projects.map((project)=>
      <ProjectCard key={project.idproject}{...project}/>
      )} */}


    </>
  )
}
