import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import Menu from './menu/Menu';
import './header.scss';

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
          <h4>Documentos</h4>
          <h4>Informações</h4>
          <h4>Repositório</h4>
          <h4>Outros</h4>
        </div>
      </div>

    );
  }
}

export default Header;
