import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import Topo from './topo';
import Rodape from './rodape';
import {Router, Route, Link, browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';
import Style from './style';



class Profile extends React.Component
{
  constructor(props){
    super(props);
  }
  
 
  
  onDrop(acceptedFiles, rejectedFiles){
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
  }
  
  render()
  {
    return (
	    <section> 
		   <Topo> </Topo>
			<div className="container" >
			   <Row>
				  <div className="col s12">
					 <div style={Style.profile.body.borda} className="col s10 offset-s1" >
						   <div  style={Style.profile.body.foto}  className="col s6 offset-s4">
							  <Dropzone style={Style.profile.body.foto2}  onDrop={this.onDrop}>
								 <div  className="col s12">
									Adicionar uma foto do perfil
								 </div>
							  </Dropzone>
						   </div>
						   <div style={Style.profile.body.title}  className="col s10 offset-s1"> 
							  <input  style={Style.profile.body.inputitle} placeholder="Informe o titulo de sua Historia" type="text" />
						   </div>
						   <div style={Style.profile.body.proximo}  className="col s3 offset-s4"> 
							  <Link to="profileWrite" className="waves-effect waves-light btn-large" style={Style.profile.body.proximobutton}  waves='light' > Proximo</Link>
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

export default Profile;
