import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import Topo from './topo';
import Rodape from './rodape';
import {Router, Route, Link, browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';




class Profile extends React.Component
{
  constructor(props)
  {
    super(props);

	
	this.getElement();
	this.rootStyle = {
		  topo : {
			  search:{
				  
				  backgroundPosition: '-246px 205px',
				  backgroundImage: 'url(/pictures/e05e5e.png)',
                  backgroundSize: '352px 311px',
				  zIndex: 4,
				  left: '8px',
                  position: 'absolute',
                  top: '8px',
				  height: '15px',
                  width: '14px'
				  
			  },
			  busca:{
				  border: 'solid 1px #dbdbdb',
				  borderRadius: '3px',
				  background: '#FFF',
				  height: '26px',
				  fontSize: '14px',
                  outline: 'none',
                  padding: '3px 10px 0px 26px',
			  },
			    busca2:{
				
				  borderRadius: '3px',
				  marginTop: '4px',
				
				  position: 'relative',
				  height: '30px'
			  },
			  logo :  {
				  paddingTop: '42px'
				  
			  },
			  header: {background: '#6cc644'}
			  
		  },
		  body : {
			  title:{
				   marginTop: '340px',
			  },
			  inputitle: {
				  fontSize: '40px'	,
                  textAlign:'center'				  
			  },
			  borda: {
				   height: '1200px',
				   border: "1px solid #e6e6e6"
			  },
			  foto: {
				 marginTop: '40px'   
			  },
			  foto2: {
				  width: '245px',
                  height: '230px',
                  borderWidth: '2px',
                  borderColor: '#039be5',
                  borderStyle: 'dashed',
                  borderRadius: '5px',
				  
			  },
			  proximo: {
				 marginTop: '180px'   
			  },
			  proximobutton: {
				 width: '240px'
			  },
			  
		  }
		
		
	};

  }
  
  getElement()
  {
	/*let $j = global.$;  
	$j(global).ready(function(){
	  $j('#magazine').turn({
		width: 1300,
		height: 840,
	    duration: 1000,
		autoCenter: true,
        border-color: #039be5;
	  });		
	});*/
	  
  }
  
  onDrop(acceptedFiles, rejectedFiles)
  {
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
					 <div style={this.rootStyle.body.borda} className="col s10 offset-s1" >
						   <div  style={this.rootStyle.body.foto}  className="col s6 offset-s4">
							  <Dropzone style={this.rootStyle.body.foto2}  onDrop={this.onDrop}>
								 <div  className="col s12">
									Adicionar uma foto do perfil
								 </div>
							  </Dropzone>
						   </div>
						   <div style={this.rootStyle.body.title}  className="col s10 offset-s1"> 
							  <input  style={this.rootStyle.body.inputitle} placeholder="Informe o titulo de sua Historia" type="text" />
						   </div>
						   <div style={this.rootStyle.body.proximo}  className="col s3 offset-s4"> 
							  <Link className="waves-effect waves-light btn-large" style={this.rootStyle.body.proximobutton}  waves='light' > Proximo</Link>
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
