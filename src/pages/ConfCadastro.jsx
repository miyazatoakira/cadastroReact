import React, {useState} from "react";
import { useEmailName } from "../EmailNameContext"; // Função Exportada em EmailContext.jsx
import {Link} from "react-router-dom";
import logo from '../logo.svg';

const ConfCadastro = () => {
    const { userDetails } = useEmailName(); // Usando o contexto
    const { email, name } = userDetails; // Extraindo email e nome do contexto
    const [showToast, setShowToast] = useState(true);

    setTimeout(() => {
      setShowToast(false);
    },3000);

    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-underline text-decoration-none fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand fw-semibold me-4" ><img src={logo} className="react-logo " alt="" />J a v a S
                    c r i p t
                    .</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">

                </button>
                <ul className="nav justify-content-end ">
                    <li className="nav-item fs-4 me-5">
                      <span className="Home-title">Olá, {name}</span>
                      <i className="bi bi-person-circle ms-4 fs-1" data-bs-theme="auto"></i>
                    </li>

                </ul>
          </div>
        </nav>
            <div aria-live="polite" aria-atomic="true" className="d-flex mt-5 fixed-top justify-content-center align-items-center w-100">
              <div className={`toast align-items-center text-bg-success border-0 ${showToast ? "show" : ""}`}>
                <div className="d-flex">
                  <div className="toast-body">
                  Bem-vindo {name} !
                  </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
                </div>
              </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                      <div class="card text-bg-warning mb-3" >
                        <div className="card-header">Você receberá um e-mail de confirmação em instantes....</div>
                        <div className="card-body">
                          <h5 className="card-title">Foi enviado um email para <span className="Home-title">{email}</span></h5>
                          <p className="card-text">Não esqueça de verificar lixo eletrônico e sua caixa Spam.</p>
                        </div>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConfCadastro;
