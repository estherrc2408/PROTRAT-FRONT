
import { useFetch } from '../hooks/useFetch'
import { Link, useNavigate } from 'react-router-dom';

export const ProjectCard = (project) => {
    const { getData, isLoading } = useFetch();
    const navigate = useNavigate();



    return (
        <>
            {(isLoading) ?
                <h2>Loading...</h2>
                :

                <div className='my-[10px] border'>
                    {(project.principal_img === '{}') ?

                        <div id={project.idproject} className="p-10 md:flex lg:card-side p-3  bg-base-100 shadow-xl xl:p-4">
                            <div className="card-body lg:py-1 xl:p-3">
                                <h2 className="card-title">{`${project.title} ${project.project_date.substring(0, 10)}`}</h2>
                                <h3 className="card-subtitle">{project.subtitle}</h3>
                                <p>Fecha de publicación : {project.publication_project.substring(0, 10)}</p>
                                <div className="p-5 card-actions justify-end">
                                    {/* <Link id={project.idproject} className="btn btn-accent" to="edit">EDIT</Link> */}
                                    <Link className="btn btn-primary" to={`${project.idproject}`}>VIEW MORE</Link>
                                    <Link id={project.idproject} className="btn btn-error" to={`delete/${project.idproject}`}>DELETE</Link>
                                </div>
                            </div>
                        </div>

                        :

                        <div id={project.idproject} className="p-10 md:flex lg:card-side p-3 bg-base-100 shadow-xl xl:p-4">
                            <div className='container w-[300px] h-[280px] lg:w-[250px] h-[230px] xl:w-[30%] h-[350px]'>
                                <img className="w-[100%] h-[100%] object-cover" src={project.principal_img} alt="Album" />
                            </div>


                            <div className="card-body lg:py-1 xl:p-3">
                                <h2 className="card-title">{`${project.title} ${project.project_date.substring(0, 10)}`}</h2>
                                <h3 className="card-subtitle">{project.subtitle}</h3>
                                <p>Fecha de publicación : {project.publication_project.substring(0, 10)}</p>
                                <div className="p-5 card-actions justify-end">
                                    {/* <Link id={project.idproject} className="btn btn-accent" to="edit">EDIT</Link> */}
                                    <Link className="btn btn-primary" to={`${project.idproject}`}>VIEW MORE</Link>
                                    <Link id={project.idproject} className="btn btn-error" to={`delete/${project.idproject}`}>DELETE</Link>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            }

        </>
    )
}
