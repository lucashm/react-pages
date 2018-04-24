import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import Menu from './menu/Menu';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <Menu></Menu>
        <div className="App-header-left">

          <img className="App-logo" src={logo} alt="reabilitacao-logo"></img>
          <h1>Reabilitação fisico-motora</h1>
        </div>
        <div className="App-header-right">
          <Link to="/">
            <h4>Documentos</h4>
          </Link>
          <Link to="/Info">
            <h4>Informações</h4>
          </Link>
          <h4>Repositório</h4>
          <h4>Outros</h4>
        </div>
      </div>

    );
  }
}

export default Header;
