import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './formRegister';
import Link from 'react-router'
import './../App.css';
import I18n from '../i18n';
import InstagramLogin from 'react-instagram-login';
class Home extends React.Component
{
  constructor(props)
  {
     super(props);
	 this. geral = {
	   backgroundColor: "#fff",
       border: "1px solid #e6e6e6",
       borderRadius: '1px',
       margin: '0 0 10px',
       padding: '10px 0',
	   height: '618px',
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
	 
	 
    I18n.lang.setLanguage('en');



  }

  getYear() {
	  
	var date = new Date();
    var year = date.getFullYear();  
	  
	return year;
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
	   <Row>
		 <div className="col s12"  style={this.geral}>
			  <div className="col s6 offset-s1">
				  <img className="responsive-img"  style={this.logo} src="./../../pictures/livros-e-computador.jpg" />
			  </div>
			    <div>
				     <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Login"
    
  />
				 </div>
			  <div className="col s4" style={this.frmreg}>
			   
				 <FormLogin></FormLogin>
			  </div> 
		 </div>
	   </Row>
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
