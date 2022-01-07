import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';

export const TodoHeader = ({items,setItems}) => {

    const initialState = {
        description:''
    }

    const [inputValue,handleInput,reset] = useForm(initialState)

    const {description} = inputValue;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 10){
            return Swal.fire({
                title:'Oops! an error appears',
                text:'The description must be more than 10 characters',
                icon:'warning'
            })
        }

        const itemsSave = [
            ...items,
            {
                date:new Date().getTime(),
                title:inputValue.description,
                check: ''
            }
        ]

        setItems(itemsSave);
        localStorage.setItem('items',JSON.stringify(itemsSave));
        reset();
    }

    return (
        <header className="app_header">
            <h1>To-Do List</h1>
            <form 
                className="todo_form"
                onSubmit={handleSubmit}
            >

                <input 
                    className="input_text"
                    placeholder="To-do description"
                    type="text" 
                    maxLength="50"
                    name="description"
                    onChange={handleInput}
                    value={description}
                    autoComplete='off'
                />

                <button 
                    className="form_button" 
                >
                  Submit
                </button>

            </form>
        </header>
    )
}