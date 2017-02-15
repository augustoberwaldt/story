import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router'
import {Button, Icon , Row} from 'react-materialize';
import FormRegister from './forms/formRegister';
import FormLogin from './forms/formLogin';

import './../App.css';
import I18n from '../i18n';

class Home extends React.Component
{
  constructor(props)
  {
     super(props);
	 this.state = {showMe : true};

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
		  lineHeight: '18px',
		  textAlign:'center',
		  margin: '10px 60px'
		 
	 };
	 this.headertmp = {
		  border: "1px solid #e6e6e6",
		  textAlign:'center',
		  marginTop: "40px"
	 };
	 

 
	 
    this.handleClick = this.handleClick.bind(this);
  }

  getYear() {
	  
	var date = new Date();
    var year = date.getFullYear();  
	return year;
  }
  handleClick() {
	
	 this.setState(prevState => ({
      showMe: !prevState.showMe
    }));
  }
  getTerms() {
	
     if (!this.state.showMe) {
		 return;
	 }
     return <p style={this.termos}>
			 {I18n.lang.terms.description} 
			 <Link style={{verticalAlign: 'baseline' }}> {I18n.lang.terms.descriptionlinkTerm} </Link> 
			{I18n.lang.terms.conj} <Link>{I18n.lang.privacy.description}.</Link>
			</p>;	 
	 
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
			  <p> {
				 (this.state.showMe ? "Tem uma conta? " : "Não tem uma conta?  ")
			  }
			  <a  href="javascript:;" onClick={this.handleClick}  > 
				  {(this.state.showMe ? "Faça login " : "Cadastre-se ")}
			  </a> 
			  </p>
		   </div>
	   </Row>
	     <Row>
		   <div className="col s6 offset-s1">
			  <img className="responsive-img"  style={this.logo} src="./../../pictures/livros-e-computador.jpg" />
		   </div>
		   <div className="col s4" style={this.frmreg}>
		      {
				  (this.state.showMe ? <FormRegister></FormRegister> : <FormLogin></FormLogin>)
				  
			  }
			  
			  {
				  this.getTerms()
			  } 
			 
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
				 <div style={this.footer} className="col s2">
					  <span> © {this.getYear()} Story </span>					  
				 </div>
		  
		  </div>		 
	   </footer>
    </div>);
  }

}

export default Home;
