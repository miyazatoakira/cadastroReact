import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import Checkbox from '../components/Checkbox';
import { Link } from 'react-router-dom';


const Cadastro = () => {

  return (
    <div>
      <div className="container cadastro">
        <form className="row text-center was-validated justify-content-center py-4" novalidated>
        <div className="col-10">
          <h1 className="h1 Home-title text-start">Cadastre-se</h1>
          <div className="line"></div>
        </div>
          <div className="col-5 col-sm-12">
            <Form formClass="my-4" id="firstName" msg="Insira Primeiro Nome*" type="text"  />
            <Form formClass="my-4" id="email" msg="Insira seu E-mail*" type="email"/>
            <Form formClass="my-4" id="password" msg="Insira senha*" type="password"/>
            <Checkbox type="radio" checkboxClass="radioMale text-start" nameIn="Sexo" msg="Masculino" value="Masculino" id="radioMale"/>
            <Checkbox type="radio" checkboxClass="radioFemale d-sm-block text-start" nameIn="Sexo" msg="Feminino" value="Feminino" id="radioFemale"/>
            <Checkbox type="radio" checkboxClass="radioNone d-sm-block text-start" nameIn="Sexo" msg="Prefiro não dizer" value="None" id="radioNone"/>


          </div>
          <div className="col-5 col-sm-12">
            <Form formClass="my-4" id="lastName" msg="Insira Sobrenome" type="text"/>
            <Form formClass="my-4" id="telefone" msg="Insira seu telefone" type="tel"/>
            <Form formClass="my-4" id="password" msg="Confirme a senha*" type="password"/>
            <div className="row g-5 mb-5">
              <div className="col-6 col-sm-12 d-sm-none">
              <Checkbox type="radio" checkboxClass="radioFemale text-start" nameIn="Sexo" msg="Feminino" value="Feminino" id="radioFemale"/>
              </div>
              <div className="col-6 col-sm-12 d-sm-none">
                <Checkbox type="radio" checkboxClass="radioNone text-start" nameIn="Sexo" msg="Prefiro não dizer" value="None" id="radioNone"/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row justify-content-center">
            <div className="col-10 col-sm-12">
              <Form formClass="my-4" id="adress" msg="Endereço" type="text"/>
            </div>
            <div className="col-5 mb-sm-4 col-sm-12">
              <Form formClass="" id="city" msg="Cidade" type="text"/>
            </div>
            <div className="col-3 col-sm-6">
              <Form formClass="" id="cep" msg="CEP" type="number"/>
            </div>
            <div className="col-2 col-sm-6">
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
            <div className="col-10 col-sm-12 mt-3">
              <Checkbox type="checkbox" nameIn="terns" checkboxClass="text-start" msg="Concordo com os termos" value="agree" id="terms"/>
            </div>
            <div className="col-12">
              <Link to="/ConfCadastro" className="btn btn-lg btn-outline-success" type="submit">Cadastrar-se</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cadastro
