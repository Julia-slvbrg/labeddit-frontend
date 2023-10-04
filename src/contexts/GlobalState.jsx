import axios from "axios";
import {GlobalContext} from "./GlobalContext"
import { BASE_URL } from "../constants/BASE_URL.JSX";

export default function GlobalState({children}){
    
    const login = async (body) => {
        const { data } = await axios.post(`${BASE_URL}users/login`, body);
        return data
    };

    const validateEmail = (email => email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
    const validatePassword = (password => password.match(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,10}$/g))

    const data = {
        login,
        validateEmail, 
        validatePassword
    };

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}