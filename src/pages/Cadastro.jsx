import React from 'react';
import Form from '../components/Form';

const Cadastro = () => {
  return (
    <div>
      <div className="container">
        <div className="cadastro row text-center justify-content-center">
          <div className="col-4">
            <Form formClass="my-4" id="firstName" msg="Insira Primeiro Nome*" type="text"  />
            <Form formClass="my-4" id="email" msg="Insira seu E-mail*" type="email"/>
          </div>
          <div className="col-4">
          <Form formClass="my-4" id="lastName" msg="Insira Sobrenome" type="text"/>
          <Form formClass="my-4" id="telefone" msg="Insira seu telefone" type="tel"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro