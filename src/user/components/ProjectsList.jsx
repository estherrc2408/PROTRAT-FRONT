import React, { useEffect } from 'react'

import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { takeProjectInfo } from '../../features/project/projectSlice';


import { useFetch } from '../hooks/useFetch';
import { ProjectCard } from './ProjectCard';



export const ProjectsList = () => {
  //hallar proyectos de usuario por nickname
  const { nickname } = useParams();
  const { getData, isLoading } = useFetch();
  const navigate = useNavigate();
  const {projects} = useSelector(state => state.projects);
  console.log(projects)


  useEffect(() => {
    getData(`/api/projects/uid/${nickname}`, 'GET', {}, takeProjectInfo)
  }, [])


  return (
    <>
      <h1>Projects List</h1>
      {isLoading&&
        <h2>Loading...</h2>
      }
       {projects&&projects.map((project)=>
      <ProjectCard key={project.idproject}{...project}/>
      )}


    </>
  )
}
