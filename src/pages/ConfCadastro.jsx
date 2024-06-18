import React from "react"
import Cadastro from './Cadastro';
import {useLocation} from 'react-router-dom';

const ConfCadastro = () => {
  const location = useLocation();

  const email = location.state || {data: 'nada recebido'};


  return(
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
          <div className="card text-bg-success mb-3" >
            <div className="card-header">Sucesso !</div>
            <div className="card-body">
              <h5 className="card-title">Você receberá um e-mail em instantes.</h5>
              <p className="card-text">Foi enviado um email para <span className="Home-title">{email}</span>, você receberá a confirmação de cadastro em instantes !</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfCadastro;
