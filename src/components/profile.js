import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './formRegister';
import LoginFacebook from  './loginFacebook'
import './basic.css';


class Profile extends React.Component
{
  constructor(props)
  {
    super(props);
	
	this.getElement();

  }
  
  getElement()
  {
	let $j = global.$;  
	$j(global).ready(function(){
	  $j('#magazine').turn({
		width: 1300,
		height: 840,
		elevation: 50,
		gradients: true,
		autoCenter: false,
		pages: 12,
	  });		
	});
	  
  }
  
  
  render()
  {
    return (
	<div id="content" >
		<div id="magazine">
			<div className="hard" id="capa" > </div>
			<div><span className="text">Page 1</span></div>
			<div><span className="text">Page 2</span></div>
			<div><span className="text">Page 3</span></div>
			<div><span className="text">Page 4</span></div>
			<div><span className="text">Page 3</span></div>
			<div className="hard"></div>
		</div>
	</div>
   );
  }

}

export default Profile;
