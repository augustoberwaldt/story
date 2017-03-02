import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router'
import {Button, Icon , Row , Input} from 'react-materialize';
import FormRegister from './forms/formRegister';
import FormLogin from './forms/formLogin';
import cookie from 'react-cookie';

import './../App.css';
import I18n from '../i18n';

class Home extends React.Component
{

  constructor(props) {

   super(props);


   if (cookie.load("lang") !== undefined)
      I18n.lang.setLanguage(cookie.load("lang"));

   this.state = {
     showMe : true,
     language: I18n.lang.getLanguage()
   };

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
		 marginTop : '-80px'
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
    this.getLangs = this.getLangs.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);

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
  handleOnchange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });

    cookie.save('lang', event.target.value);
    global.location.reload();

  }
  getLangs () {

     let langs  =  I18n.mapLangs;
     const acceptLang  = I18n.lang.getAvailableLanguages();

     const options = acceptLang.map((item) => {
          console.log(item);
          let nameLang =  langs[item];
          return (<option value={item} key={item} > {nameLang.nativeName}   </option>);
     });

     return options;

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
				 (this.state.showMe ? I18n.lang.formLogin.account : I18n.lang.formLogin.notaccount )
			  }
			  <a  href="javascript:;" onClick={this.handleClick}  >
				  {(this.state.showMe ? I18n.lang.formLogin.goLogin: I18n.lang.formLogin.goAccount)}
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
						<li>
						    <Row className="selectId">
							  <Input s={12}  onChange={this.handleOnchange} type="select" label="Materialize Select" defaultValue={this.state.language} >
							    {this.getLangs()}
							  </Input>
							</Row>
						</li>
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
