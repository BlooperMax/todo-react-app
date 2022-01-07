import { useState } from 'react';

export const useForm = (initialState ={}) => {

    const [form,setForm] = useState(initialState);

    const handleForm = ({target}) => {
        setForm({
            ...form,
            [target.name]:target.value
        })
    }

    const reset = () => {
        setForm(initialState)
    }

    return [form,handleForm,reset]
}