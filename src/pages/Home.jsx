import React, { useState } from 'react';
import viteLogo from '../vite.svg';
import logo from '../logo.svg';
import Form from "../components/Form";
import Checkbox from '../components/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { useEmailName } from '../EmailNameContext';

const Home = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setUserDetails } = useEmailName();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [ToastColor, setToastColor] = useState("");
  const [showPass, setShowPass] = useState(false);

  const togglePasswordMode = () => {
    setShowPass(!showPass);
  };

  let eyeState = showPass ? "bi-eye" : "bi-eye-slash";
  let passwordType = showPass ? "text" : "password";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, password);

    if (password === "1234" && name!="") {
      let email = `${name}@gmail.com`;
      setUserDetails(email, name);
      navigate('/ConfCadastro');
    } else {
      setToastMessage("Usuário Inválido");
      setToastColor("text-bg-danger");
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    },1500);
  };

  return (
    <div>
      <div className="container">
        <div aria-live="polite" aria-atomic="true" className="d-flex mb-5 justify-content-center align-items-center w-100">
          <div className={`toast align-items-center ${ToastColor} border-0 ${showToast ? "show" : ""}`}>
            <div className="d-flex">
              <div className="toast-body">
                {toastMessage}
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 bemvindo pt-5 text-center">
            <h1 className="h1 Home-title text-center mt-4">Bem-vindo</h1>
            <p className="subtitle text-center mt-5">Cadastre sua conta e venha fazer parte da nossa equipe</p>
            <Link to="/Cadastro" className="btn btn-outline-dark p-3 px-4 rounded-pill">Inscreva-se</Link>
            <p className="subtitle text-center mt-5">Ou entre</p>
            <div className="social-icons mt-2">
              <i className="bi bi-google me-3 rounded-circle"></i>
              <i className="bi bi-facebook me-3 rounded-circle"></i>
              <i className="bi bi-linkedin rounded-circle"></i>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="login col-7 text-center">
            <h2 className="h2 mt-5 Home-title text-start ms-5">
              <img src={viteLogo} alt="Vite Logo" className='me-4' />
              ENTRAR <img className='react-logo' src={logo} alt="React Logo" style={{ width: "2em" }} />
            </h2>
            <Form icon="bi bi-person-fill" type="text" formClass="my-5 ms-5 me-4" msg="Usuário" id="user" onChange={(e) => setName(e.target.value)} />
            <Form onClick={togglePasswordMode} icon={`bi ${eyeState}`} type={passwordType} formClass="mb-2 mx-5 me-4" msg="Senha" id="password" onChange={(e) => setPassword(e.target.value)} />
            <Checkbox type="checkbox" checkboxClass="mx-5 mb-4 text-start" msg="Lembre de mim" value="rememberMeChecked" id="rememberMe" />
            <button className="btn btn-primary mt-2 mb-5 btn-lg rounded-pill w-75">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
