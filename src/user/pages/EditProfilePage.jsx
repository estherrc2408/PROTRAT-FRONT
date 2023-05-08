import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { serializerForm } from '../../helpers/serializer/serializerForm'
import { takeInfo } from '../../features/user/userSlice'


export const EditProfilePage = () => {
    //pasamos el id del user para la query updateUserByIdQ
    const userInfo = useSelector(state => state.users);
    const [dataForm, setDataForm] = useState(userInfo);

    // const path =useParams()
    // console.log(path.loc);
    const { editForm } = useForm(userInfo);

    // handleChange({target});

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const dataForm = serializerForm(ev.target);
        console.log(dataForm)
        editForm('/api/users',dataForm, userInfo.iduser, takeInfo);
        //puede recibir un mensaje de credenciales incorrectos o de Welcome +nickname! y segun si esta bien o mal un ok:true o un ok:false
        
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        console.log(value);
        setDataForm({
            ...dataForm,
            [name]: value
        });
    };



    return (
        <>
            <h1 className='text-xl text-center'>Edit your profile info!</h1>
            <form className='container p-6 center' onSubmit={handleSubmit}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Foto de perfil</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                        <p className="label-text-alt text-red-500">*required</p>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email" defaultValue={userInfo.email} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nickname</span>
                        <p className="label-text-alt text-red-500">*required</p>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="nickname" defaultValue={userInfo.nickname} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First name</span>
                        <p className="label-text-alt text-red-500">*required</p>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="firstName" defaultValue={userInfo.first_name} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                        <p className="label-text-alt text-red-500">*required</p>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="lastName" defaultValue={userInfo.last_name} onChange={handleChange} />
                </div>


{userInfo.birth_date && userInfo.birth_date.length>11?
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Birth Date</span>
                        <p className="label-text-alt text-red-500">*required</p>
                    </label>
                    <input type="text" placeholder="Birth Date" className="input input-bordered w-full max-w-xs" name="birthDate" defaultValue={userInfo.birth_date.substring(0, 10)} onChange={handleChange} />
                </div>
                :
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Birth Date</span>
                    <p className="label-text-alt text-red-500">*required</p>
                </label>
                <input type="text" placeholder="Birth Date" className="input input-bordered w-full max-w-xs" name="birthDate" defaultValue={userInfo.birth_date} onChange={handleChange} />
            </div>

}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">City</span>
                    </label>
                    <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" name="city" defaultValue={userInfo.city} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instagram nickname</span>
                    </label>
                    <input type="text" placeholder="Instagram" className="input input-bordered w-full max-w-xs" name="igNickname" defaultValue={userInfo.instagram_nickname} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Twitter nickname</span>
                    </label>
                    <input type="text" placeholder="Twitter" className="input input-bordered w-full max-w-xs" name="twtNickname" defaultValue={userInfo.twitter_nickname} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">URL LinkedIn</span>
                    </label>
                    <input type="text" placeholder="LinkedIn" className="input input-bordered w-full max-w-xs" name="lnkUrl" defaultValue={userInfo.linkedin_url} onChange={handleChange} />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-accent" value="EDIT" />
                </div>

            </form>
        </>
    )
}
