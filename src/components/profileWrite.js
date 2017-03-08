import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import Header from './fragments/header';
import Footer from './fragments/footer';
import {Router, Route, Link, browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class ProfileWrite extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {text: ""};

	this.rootStyle = {
		  body : {
			  borda: {
				   height: '1200px',
				   border: "1px solid #e6e6e6"
			  },
              borda2: {
				 
				  marginTop: '20px'
			  },
			  test: {
               backgroundcolor: 'transparent',
               border: 'none',
               borderBottom: '1px solid #9e9e9e',
               borderRadius: 0,	
               outline: 'none',
               height: '3rem',
               width: '100%',
               fontSize: '1rem',
               margin: '0 0 20px 0',
               padding: 0,
               boxShadow: 'none',
               boxSizing: 'content-box',
               transition: 'all 0.3s',
               overflowY: 'hidden',
               padding: '.8rem 0 1.6rem 0',
               resize: 'none',
               minHeight: '3rem',
               width: 'calc(100% - 3rem)',
               marginLeft: '3rem',
               outline: 'none',
               overflow: 'hidden',
               textAlign:'start',
               textIndent:'0px',
               textRendering:'auto'
               
			  }			  
		  }
	};
  }

  handleBlur () {
	 let element  = document.getElementById('icon_prefix2');
	 let  dif =  element.scrollHeight - element.innerHTML.length;
	 
	 if (dif > 90) {
		element.style.height = (element.innerHTML.length)+"px";
	 }
  }

  render()
  {
    return (
	<section>
	   <Row>
		  <Header> </Header>
	   </Row>
	   <div className="container" >
		  <Row>
			 <div className="col s12">
				<div style={this.rootStyle.body.borda} className="col s10 offset-s1" >
				   <div style={this.rootStyle.body.borda2} className="app">
					  <i className="material-icons prefix">mode_edit</i>
					  <Editor
						 onKeyUp={this.handleBlur}
						 id="icon_prefix2"
						 style={this.rootStyle.body.test}
						 text={this.state.text}
						 onChange={this.handleChange}
						 />
				   </div>
				   <div>
				   </div>
				</div>
			 </div>
		  </Row>
		  <Footer/>
	   </div>
	</section>
		
   );
  }

}

export default ProfileWrite;
