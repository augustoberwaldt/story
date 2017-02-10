import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Topo from './topo';

class ElementListProfile extends React.Component
{
  constructor(props)
  {
    super(props);

	

	this.rootStyle = {
		
		  body : {
			 
			  borda: {
				   height: '300px',
				   border: "1px solid #e6e6e6",
				
			  }, 
		  }
		
		
	};

  }
  
 

  
  render()
  {
	var rows = [], i = 0, len = 10;
    while (++i <= len) rows.push(i);

    return (
	   <div style={
						 {   
				              height: '200px',
					          border: "1px solid #e6e6e6",
							  marginTop: '10px'
						 }
					 } className="col s10 offset-s1"> 
					 
					      <div className="col s2" >
                             <img src="http://materializecss.com/images/yuna.jpg" className="circle responsive-img" /> 
                          </div> 
						  <div style={{
							     border: "1px solid #e6e6e6",
						         marginTop: '10px'
							
							  
						  }} className="col s10" >
						  
						       Ariana
						  </div>
						  <div style={{
							     border: "1px solid #e6e6e6",
						         marginTop: '20px',
								 height:'130px'
							
							  
						  }} className="col s2" >
						  
						      Historias	 de Ariana
						  </div>
						  
						  <div style={{
							     border: "1px solid #e6e6e6",
						         marginTop: '20px',
								 height:'130px',
								 marginLeft: '5px'
							
							  
						  }} className="col s2" >
						  
						      Historias	 de Ariana
						  </div>
						  
        </div>
				
		
     );
  }

}

export default ElementListProfile;
