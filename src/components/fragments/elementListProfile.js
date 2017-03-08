import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Style from './../style';

class ElementListProfile extends React.Component
{
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
	   <div	 style={Style.elementListProfile.body} className="col s10 offset-s1"> 
		  <div className="col s2" >
              <div style={Style.elementListProfile.profileInfo} >			  
				<img  style={Style.elementListProfile.profileImg} 
				src="http://materializecss.com/images/yuna.jpg" 
				className="circle responsive-img" /> 
			  </div>
			  <div style={Style.elementListProfile.profileContentText} className="col s12" >
				   <p style={Style.elementListProfile.profileText} >Ariana </p>
			  </div> 
		  </div> 
		  <div style={Style.elementListProfile.minBook} className="col s2" >
			   <p style={Style.elementListProfile.minBookTitle}> 
			       Historias de Ariana
			   </p>
		  </div>			  
        </div>
				
		
     );
  }

}

export default ElementListProfile;
