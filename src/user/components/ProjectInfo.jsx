import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { useParams, Link } from 'react-router-dom';
import { takeOneProject } from '../../features/project/projectSlice';
import { useFetch } from '../hooks/useFetch';

export const ProjectInfo = () => {
    const {idproject} = useParams();
    // const { project } = useSelector(state => state.projects);
    const { rol } = useSelector(state => state.users);
    const {project} = useSelector(state => state.projects);

    const { getData, isLoading } = useFetch();

    const loader = () => {
        getData(`/api/projects/id/${idproject}`, 'GET', {}, takeOneProject)
        
    }


    useEffect(() => {
        loader();

    }, [])

    return (
        <div className='m-[0]'>

            {isLoading &&
                <div className="card card-side bg-base-100 shadow-xl">
                    <h2 className="card-title">Loading...</h2>
                </div>
            }
    
            {(project.principal_img === "{}"||project.principal_img===undefined) ?
                <div className="container p-3.5 columns-1 border-2 border-indigo-600  lg:flex xl:px-10">

                    <div className="container py-2.5 w-80% center border-2 border-indigo-600 lg:p-10 xl:px-20">
                        <div className="container text-center">
                            <h2 className="py-5 card-title block border-2 border-indigo-600">{`Title: ${project.title} `}</h2>
                            <h3 className="py-5 text-base card-title block border-2 border-indigo-600">{`Subtitle: ${project.subtitle} `}</h3>
                            <p className='p-5 border-2 border-indigo-600'>{`Description: ${project.description}`}</p>
                            {/* {project.project_date &&
                                <p className='py-3 border-2 border-indigo-600'>{`Realizado: ${project.project_date.substring(0, 10)}`}</p>
                            } */}
                            {project.location && <p className='py-3 border-2 border-indigo-600'>{`Location: ${project.location}`}</p>}

                        </div>
                        {/* <p className='py-3 text-center border-2 border-indigo-600'>{`Publicado: ${project.publication_project.substring(0, 10)}`}</p> */}
                    </div>
                    {rol === 'standar' && <Link id={project.idproject} className="btn btn-accent" to="edit">EDIT</Link>}
                </div>

                :

                <div className="container p-3.5 grid grid-cols-1 border-2 border-indigo-600     md:grid-cols-2  lg:flex xl:px-10">
                    <div className="border-2 border-indigo-600">
                        <div className='overflow-hidden container mx-[auto] h-[40vh] w-[250px] border-2 border-indigo-600  md:h-[70%] md:w-[350px] lg:h-[65%] lg:w-[95%] m-8'>
                            <img className="w-[100%] h-[100%] object-cover border-2 border-indigo-600" src={project.principal_img} alt="Album" />
                        </div>
                        {/* {project.project_date &&
                            <p className='text-xs text-center border-2 border-indigo-600'>{`Realizado: ${project.project_date.substring(0, 10)}`}</p>
                        } */}
                        {/* <p className='py-1 text-xs text-center border-2 border-indigo-600'>{`Publicado: ${project.publication_project.substring(0, 10)}`}</p> */}
                        {project.location && <p className='text-center py- border-2 border-indigo-600'>{`Location: ${project.location}`}</p>}
                    </div>
                    <div className="container py-2.5 w-80% center border-2 border-indigo-600 md:p-6 lg:p-10 xl:px-15 ">
                        <div className=" text-center">
                            <h2 className="p-5 card-title block border-2 border-indigo-600">{`Title: ${project.title} `}</h2>
                            <h3 className="p-4 text-base card-title block border-2 border-indigo-600">{`Subtitle: ${project.subtitle} `}</h3>
                            <p className='p-3 border-2 border-indigo-600'>{`Description: ${project.description}`}</p>
                        </div>
                    </div>
                    {rol === 'standar' && <Link id={project.idproject} className="btn btn-accent w-[30%] lg:w-[7%]" to="edit">EDIT</Link>}
                    {/* {rol === 'standar' && <button id={project.idproject} className="btn btn-error" onClick={handleClick}>DELETE</button>} */}
                </div>
            }


        </div>
    )
}
