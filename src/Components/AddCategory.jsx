import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {// recibe una funcion desde el props del padre

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {// actualiza el valor del stado del input
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => { //se tea la lista de categoria del padre atraves del hook
        event.preventDefault();// evita que recargue la pagina
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('')

    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
