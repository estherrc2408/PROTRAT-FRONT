import React from 'react'
import {Link} from 'react-router-dom'

import{serializerForm} from '../../helpers/serializer/serializerForm'
import {useAuth} from '../hooks/useAuth'

export const SignForm = () => {

  const {useSign} = useAuth()

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const dataForm = serializerForm(ev.target);
    console.log(dataForm);
    useSign(dataForm);
    //puede recibir un mensaje de credenciales incorrectos o de Welcome +nickname! y segun si esta bien o mal un ok:true o un ok:false

}

  return (
    <>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign up!</h1>
                <h4 className="py-6">Y descubre la plataforma para que tus proyectos cobren vida.</h4>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Nickname</span>
                        </label>
                        <input type="text" name="nickname" placeholder="nickname" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First name</span>
                        </label>
                        <input type="text" name="firstName" placeholder="First name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last name</span>
                        </label>
                        <input type="text" name="lastName" placeholder="lastName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Birth date</span>
                        </label>
                        <input type="text" name="birthDate" placeholder="YYYY-MM-DD" className="input input-bordered" />
                    </div>
                    <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">are you registered?</Link>
                        </label>
                    {/* {(!auth.isAuthenticated) && <label className="label-text-alt text-red-500">{auth.msg}</label>} */}
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-accent" value="Sign" />

                    </div>
                </form>
            </div>
        </div>
    </div>
</>
  )
}
