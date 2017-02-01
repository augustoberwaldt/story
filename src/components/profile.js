import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './formRegister';
import LoginFacebook from  './loginFacebook'





class Profile extends React.Component
{
  constructor(props)
  {
    super(props);

	
	this.getElement();

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
        
	  });		
	});*/
	  
  }
  
  
    
  
  
  getProfile() 
  {
	  
	  
	  
  }
  
  
  render()
  {
    return (
	<div id ="content" >
		<div id="magazine" className="sj-book">
		   
			<div className="hard" id="capa" > 
			
			</div>
			
			<div id="capa2">
				<span className="own-size" >Page 1</span>
			</div>
			<div id="capa3">
			    <span className="own-size">Page 2</span>
			</div>
			<div id="capa4">
			    <span className="own-size">Page 3</span>
			</div>
			<div><div className="depth"></div></div>
			<div className="hard fixed back-side"> 
			     <div className="depth"></div> 
			</div>
			
			
		</div>
		<div id="slider-bar" class="turnjs-slider">
			<div id="slider"></div>
	    </div>
	</div>
   );
  }

}

export default Profile;
