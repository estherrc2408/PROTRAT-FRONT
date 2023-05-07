import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { takeProjectsInfo } from '../../features/project/projectSlice';


import { useFetch } from '../hooks/useFetch';



export const ProjectsList = () => {
  //hallar proyectos de usuario por nickname
  const { nickname } = useParams();
  const { getData, isLoading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    getData(`/api/projects/uid/${nickname}`, 'GET', {}, takeProjectsInfo)
  }, [])


  return (
    <>



    </>
  )
}
