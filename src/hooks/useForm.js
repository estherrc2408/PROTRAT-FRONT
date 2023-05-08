import { fetchApi } from "../api/fetchProtrat";
// import { serializerForm } from "../helpers/serializer/serializerForm";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

export const useForm = (initialState) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState(initialState);

    //dataForm= objetos traídos en un objeto con todos los datos del formulario
    const handleChange = ({ target }) => {
        const { name, value } = target;
        console.log(value);
        setDataForm({
            ...dataForm,
            [name]: value
        });
    };

    // const handleSubmit = (ev) => {
    //     ev.preventDefault();
    //     const dataLog = serializerForm(ev.target);
    //     console.log(dataLog)
    //     useLogIn(dataLog);
    //     //puede recibir un mensaje de credenciales incorrectos o de Welcome +nickname! y segun si esta bien o mal un ok:true o un ok:false
    // };

    //editForm
    const editForm = async (path, dataForm, id, reducer) => {
        try {
            const response = await fetchApi(`${path}/${id}`, "PUT", dataForm);

            if (response.ok) {
                console.log(response);
                // dispatch(reducer(response));

                navigate(-1);

            } else {
                throw {
                    error
                }
            }

        } catch (error) {
            console.log(error)
            return error;
        }
    }
    return {
        handleChange,
        editForm
    }


}