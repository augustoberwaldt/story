import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';

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
				  fontSize: '40px'				   
			  },
			  borda: {
				   height: '1200px',
				   border: "1px solid #e6e6e6"
			  },
			  foto: {
				 marginTop: '40px'   
			  },
			  foto2: {
				  width: '200px',
                  height: '200px',
                  borderWidth: '2px',
                  borderColor: '#039be5',
                  borderStyle: 'dashed',
                  borderRadius: '5px',
				  
			  }
			  
			  
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
		    <Row>  
			      
			<div style={this.rootStyle.topo.header}  className="col s12"> 
			
				<div style={this.rootStyle.topo.logo}  className="col s2 offset-s3"> 
						
				</div>
				<div className="col s2"> 
					<div    style={this.rootStyle.topo.busca2}>
						<span style={this.rootStyle.topo.search}> 	 </span>
						<input  style={this.rootStyle.topo.busca}  type="text" />
					</div>
				</div>
				
		    </div>
			</Row> 
			<div className="container" >
			   <Row>
				  <div className="col s12">
					 <div style={this.rootStyle.body.borda} className="col s10 offset-s1" >
						<form>
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
						</form>
					 </div>
				  </div>
			   </Row>
			   <footer className="page-footer">
				  <div className="row">
					 <div  className="col s2 offset-s9">
						<span> © 2017 Story </span>					  
					 </div>
				  </div>
			   </footer>
			</div>
		</section>
		
   );
  }

}

export default Profile;
