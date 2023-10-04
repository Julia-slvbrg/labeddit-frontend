import { useState } from "react";

export default function useForms(initialState) {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value})
    };

    const cleanInputs = () => {
        setForm(initialState)
    };

    return { form, onChangeInput, cleanInputs }
}

//45 - autenticacao-em-react-template
// 77 - deplpoy-template-frontend
//45.1 - autenticacao-em-react-exercicios
//49 - revisao-react-frontend