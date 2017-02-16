import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import Topo from './topo';
import Rodape from './rodape';
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
    this.state = {text: "sxcasacs"};

	this.rootStyle = {
		  body : {
			  borda: {
				   height: '1200px',
				   border: "1px solid #e6e6e6"
			  },
              borda2: {
				 
				  marginTop: '20px'
			  }			  
		  }
	};
  }
  

  render()
  {
    return (
	<section> 
		   <Topo> </Topo>
			<div className="container" >
			   <Row>
				  <div className="col s12">
					 <div style={this.rootStyle.body.borda} className="col s10 offset-s1" >
						   <div style={this.rootStyle.body.borda2} className="app">
								<Editor
								
								  text={this.state.text}
								  onChange={this.handleChange}
								/>
							</div>
							<div>
							
							 <Button> Proximo </Button> 
							</div>
					 </div>
				  </div>
			   </Row>
			   <Rodape/>
			</div>
		</section>
		
   );
  }

}

export default ProfileWrite;
