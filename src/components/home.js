import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './formRegister';
import LoginFacebook from  './loginFacebook'

class Home extends React.Component
{
  constructor(props)
  {
     super(props);
  }

  render()
  {
    return (
	<div className="container">
       <Row>
       	<LoginFacebook/> 
         <div className="col s6">
         </div>
         <FormLogin></FormLogin>
       </Row>
     </div>);
  }

}

export default Home;
