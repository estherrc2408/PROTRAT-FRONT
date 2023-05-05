import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth'
//serializador de formularios, convierte en objeto lo que salga del formulario
import { serializerForm } from '../../helpers/serializer/serializerForm'

export const LoginForm = () => {

    const { useLogIn, useLogOut } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const dataLog = serializerForm(ev.target);
        console.log(dataLog)
        useLogIn(dataLog);
        //puede recibir un mensaje de credenciales incorrectos o de Welcome +nickname! y segun si esta bien o mal un ok:true o un ok:false

    }
    const auth = useSelector(state => state.auth)
    console.log(auth)
    if (auth.isAuthenticated) {
        const { nickname } = auth;
        navigate(`/standard/profile/${nickname}`);
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <h3 className="py-6">Publica tus trabajos y descubre nuevas oportunidades en nuestra comunidad.</h3>
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
                                <label className="label">
                                    <Link to="/sign" className="label-text-alt link link-hover">are you not registered?</Link>
                                </label>
                                {(!auth.isAuthenticated) && <label className="label-text-alt text-red-500">{auth.msg}</label>}

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-accent" value="Login" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
