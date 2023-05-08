import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { serializerForm } from '../../helpers/serializer/serializerForm'
import { takeProjectInfo } from '../../features/project/projectSlice'

export const EditProjectPage = () => {

  const {project} = useSelector(state => state.projects);
  const [dataForm, setDataForm] = useState(project);
  const { editForm } = useForm(project);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const dataForm = serializerForm(ev.target);
    console.log(dataForm)
    editForm('/api/projects', dataForm, project.idproject, null);
    //puede recibir un mensaje de credenciales incorrectos o de Welcome +nickname! y segun si esta bien o mal un ok:true o un ok:false
    
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    console.log(value);
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };
  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Title
              </label>
              <input type="text" name="title" placeholder="Title" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"  defaultValue={project.title}  onChange={handleChange}/>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Subtitle
              </label>
              <input onChange={handleChange} type="text" name="subtitle" placeholder="Subtitle" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={project.subtitle}/>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Description
              </label>
              <textarea rows="10"  onChange={handleChange} type="text" name="description" placeholder="Description" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={project.description}/>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Project_date
              </label>
              <input  onChange={handleChange} type="text" name="project_date" placeholder="Project date" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={project.project_date}/>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Location
              </label>
              <input  onChange={handleChange} type="text" name="location" placeholder="Location" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={project.location}/>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Principal image
              </label>
              <input onChange={handleChange} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>
            <div className="form-control mt-6">
                    <input  type="submit" className="btn btn-accent" value="EDIT" />
            </div>
            
          </form>
        </div>
      </div>

    </>
  )
}
