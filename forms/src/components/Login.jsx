import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import './Login.css';

const Login = () => {

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const handleSubmit = (event) =>{  //Função que vai ser diparada ao enviar o formulário
        event.preventDefault();
       
        alert("Enviando os dados " +username + " - " + password) 
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>

            <h1>Acesse ao sistema</h1>

            <div className="input-field">
            <input type="email" placeholder='E-mail' name="email" id="" onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon"></FaUser>
            </div>

            <div className="input-field">
            <input type="password" placeholder='Senha'  name="" id="" onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className="icon"></FaLock>
            </div>
            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a Senha?</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login