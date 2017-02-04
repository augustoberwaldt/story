import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router'
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './formRegister';

import './../App.css';
import I18n from '../i18n';

class Home extends React.Component
{
  constructor(props)
  {
     super(props);
	 this.ba =1;
	 this. geral = {
	   backgroundColor: "#fff",
       border: "1px solid #e6e6e6",
       borderRadius: '1px',
       margin: '0 0 10px',
       padding: '10px 0',
	   height: '100%',
     };
	 this. frmreg = {
	   backgroundColor: "#fff",
       border: "1px solid #e6e6e6",
       borderRadius: '1px',
       margin: '0 0 10px',
       padding: '10px 0',
	   height: '100%',
     };
	 this.footer = {
		 
		 marginTop:"18px"
		 
	 }
	 
	 this.logo = {
		 height: '590px',
		 width : '400px',
		 marginLeft: '10px',
	 };
	 this.termos = {
		 
		  textAlign:'center'
		 
	 };
	 this.headertmp = {
		  border: "1px solid #e6e6e6",
		  textAlign:'center'
		  
	 };
	 this.login = {
		 color:'red !important'
	 }
	 this.recLogin ="Tem uma conta?  ";
	 
    I18n.lang.setLanguage('en');
  }

  getYear() {
	  
	var date = new Date();
    var year = date.getFullYear();  
	  
	return year;
  }
  getElementLogin() {
	  alert(this.recLogin );
	this.recLogin ="Não tem uma conta?  ";
  }
  
  render()
  {
    return (
	<div className="container">
	   <Row>
		 <div className="col s12 offset-s2">
		      <h1> {I18n.lang.home.title} </h1>
		 </div>
	   </Row>
	   <div className="col s12"  style={this.geral}>
	   <Row>
		   <div className="col s4 offset-s7" style={this.headertmp}>
			  <p> {this.recLogin}
			  <a  href="javascript:;" onClick={this.getElementLogin}  style={this.login} > 
			  Faça login </a> 
			  </p>
		   </div>
	   </Row>
	     <Row>
		   <div className="col s6 offset-s1">
			  <img className="responsive-img"  style={this.logo} src="./../../pictures/livros-e-computador.jpg" />
		   </div>
		   <div className="col s4" style={this.frmreg}>
			  <FormLogin banana={this.ba}></FormLogin>
			  <p style={this.termos}>
				  Ao cadastrar-se, você concorda com nossos Termos e Política de Privacidade.
			  </p>
		   </div> 
	     </Row>
	   </div>
	   <footer className="page-footer">
			   <div className="row">
				
                    <div className="col s10">
					  <nav className="fonav">
						  <ul>
							<li><a href="#!">SOBRE NÓS</a></li>
							<li><a href="#!">SUPORTE</a></li>
							<li><a  href="#!">IMPRENSA</a></li>
							<li><a  href="#!">API</a></li>
							<li><a  href="#!">PRIVACIDADE</a></li>
							<li><a href="#!">TERMOS</a></li>
							<li><a  href="#!">IDIOMA</a></li>
						  </ul>
						  
					  </nav>
                     </div>
					 <div style={ this.footer} className="col s2">
					      <span> © {this.getYear()} Story </span>					  
					 </div>
			  
			  </div>		 

	   </footer>
    </div>);
  }

}

export default Home;
