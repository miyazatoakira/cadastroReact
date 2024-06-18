import React, { useState } from 'react';
import Form from '../components/Form';
import Checkbox from '../components/Checkbox';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../EmailContext';


const Cadastro = () => {
  const [valores, setValores] = ({email:"", user: ""})

  const {setUserData} = useContext(userContext);

  const navigate = useNavigate();

  const handleChange = (event) =>{
    setValores({ ...valores, [event.target.id]: event.target.value });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({
      userName: valores.user,
      emailUser: valores.email,
    })
    navigate('/ConfCadastro')
  }

  return (
    <div>
      <div className="container cadastro mt-5">
        <form className="row text-center need-validation justify-content-center py-4" onSubmit={handleSubmit} novalidated>
          <div className="col-12 col-md-10">
            <h1 className="h1 Home-title text-start">Cadastre-se</h1>
            <div className="line"></div>
          </div>
          <div className="col-10">
            <div className="input-group mt-4">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" className="form-control" placeholder="Username" onChange={handleChange} aria-label="Usuário" aria-describedby="basic-addon1" required/>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <Form formClass="my-4" id="firstName" msg="Insira Primeiro Nome*" type="text" />
            <Form formClass="my-4" id="email" msg="Insira seu E-mail*" type="email" onChange={handleChange} />
            <Form formClass="my-4" id="password" msg="Insira senha*" type="password" />
            <Checkbox type="radio" checkboxClass="radioMale text-start" nameIn="Sexo" msg="Masculino" value="Masculino" id="radioMale" />
          </div>
          <div className="col-12 col-md-5">
            <Form formClass="my-4" id="lastName" msg="Insira Sobrenome" type="text" />
            <Form formClass="my-4" id="telefone" msg="Insira seu telefone" type="tel" />
            <Form formClass="my-4" id="password" msg="Confirme a senha*" type="password" />
            <div className="row g-5 mb-5">
              <div className="col-md-6 col-12 ">
                <Checkbox type="radio" checkboxClass="radioFemale text-start" nameIn="Sexo" msg="Feminino" value="Feminino" id="radioFemale" />
              </div>
              <div className="col-12 col-md-6  ">
                <Checkbox type="radio" checkboxClass="radioNone text-start" nameIn="Sexo" msg="Prefiro não dizer" value="None" id="radioNone" />
              </div>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-11 ">
              <Form formClass="my-4" id="adress" msg="Endereço" type="text" />
            </div>
            <div className="col-11 col-md-6 mt-2">
              <Form formClass="" id="city" msg="Cidade" type="text" />
            </div>
            <div className="col-6 mt-2 col-md-3 ">
              <Form formClass="" id="cep" msg="CEP" type="number" />
            </div>
            <div className="col-5 col-md-2 mt-2">
              <select className="form-select text-upperacase" aria-label="Default select example">
                <option className="text-uppercase" selected>UF</option>
                <option className="text-uppercase" value="ac">ac</option>
                <option className="text-uppercase" value="al">al</option>
                <option className="text-uppercase" value="ap">ap</option>
                <option className="text-uppercase" value="am">am</option>
                <option className="text-uppercase" value="ba">ba</option>
                <option className="text-uppercase" value="ce">ce</option>
                <option className="text-uppercase" value="df">df</option>
                <option className="text-uppercase" value="es">es</option>
                <option className="text-uppercase" value="go">go</option>
                <option className="text-uppercase" value="ma">ma</option>
                <option className="text-uppercase" value="mt">mt</option>
                <option className="text-uppercase" value="mt">mt</option>
                <option className="text-uppercase" value="ms">ms</option>
                <option className="text-uppercase" value="mg">mg</option>
                <option className="text-uppercase" value="pi">pi</option>
                <option className="text-uppercase" value="rj">rj</option>
                <option className="text-uppercase" value="rn">rn</option>
                <option className="text-uppercase" value="rs">rs</option>
                <option className="text-uppercase" value="ro">ro</option>
                <option className="text-uppercase" value="rr">rr</option>
                <option className="text-uppercase" value="sc">sc</option>
                <option className="text-uppercase" value="sp">sp</option>
                <option className="text-uppercase" value="se">se</option>
                <option className="text-uppercase" value="to">to</option>
              </select>
            </div>
            <div className="col-10  mt-3">
              <Checkbox type="checkbox" nameIn="terns" checkboxClass="text-start" msg="Concordo com os termos" value="agree" id="terms" />
            </div>
            <div className="col-12 mt-2">
              <button className="btn btn-lg btn-outline-success" type="submit">Cadastrar-se</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cadastro
