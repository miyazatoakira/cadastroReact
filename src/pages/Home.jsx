import React, {useState} from 'react';
import logo from '../logo.svg';
import Form from "../components/Form";
import viteLogo from '../vite.svg';

const Home = () => {
  const [values, setValues] = useState({ user: "", password: "" });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [ToastColor, setToastColor] = useState("");

  const handleChange = (event) => {
      setValues({ ...values, [event.target.id]: event.target.value });
  }

  const handleSubmit = () => {
      console.log(values.user, values.password)
      if (values.user === "administrador" && values.password === "1234") {
          setToastMessage("Usuário válido ! Bem-vindo !");
          setToastColor("text-bg-success");
      }
      else {
          setToastMessage("Usuário Inválido");
          setToastColor("text-bg-danger");
      }
      setShowToast(true);
  }

  return (
      <div className="container">
          <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
              <div className={`toast align-items-center ${ToastColor} border-0 ${showToast ? "show" : ""}`}>
                  <div className="d-flex">
                      <div className="toast-body">
                          {toastMessage}
                      </div>
                      <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
                  </div>
              </div>
          </div>
          <div className="row justify-content-center align-items-center text-center align-items-stretch">
            <div className="col-5 bemvindo">
                <h1 className="h1 Home-title text-center">Bem-vindo </h1>
                <p className="subtitle">Cadastre sua conta e venha fazer parte da nossa equipe</p>
                
            </div>
              <div className="login col-4">
                <h1 className="h1 text-start">LOGIN <img className='react-logo' src={logo} alt="React Logo" style={{width: "2em"}} /></h1>
                  <Form type="text" msg="Usuário" id="user" onChange={handleChange}  />
                  <Form type="password" msg="Senha" id="password" onChange={handleChange} />
                  <button className="btn btn-outline-primary w-100" onClick={handleSubmit}>Entrar</button>
                  <p className='fs-6 mt-2'>Ainda não tem uma conta ? </p>
              </div>
          </div>


      </div>
  );
}

export default Home;
