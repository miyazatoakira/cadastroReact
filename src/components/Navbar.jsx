import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import {useEmailName} from '../EmailNameContext';

const Navbar = () => {
  const { userDetails } = useEmailName(); // Usando o contexto
  const { email, name } = userDetails; // Extraindo email e nome do contexto

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-underline text-decoration-none fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fw-semibold me-4" ><img src={logo} className="react-logo" alt="" />J a v a S
                        c r i p t
                        .</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">

                    </button>
                    <ul className="nav justify-content-end ">
                        <li className="nav-item fs-4 me-5">
                          Olá, {name}
                          <i className="bi bi-person-circle ms-4 fs-1" data-bs-theme="auto"></i>
                        </li>

                    </ul>
              </div>
            </nav>
        </div>

    )
}

export default Navbar;
