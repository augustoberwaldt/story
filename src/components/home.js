import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './formRegister';

class Home extends React.Component
{
  constructor(props)
  {
     super(props);
	 this. frmreg = {
	   backgroundColor: "#fff",
       border: "1px solid #e6e6e6",
       borderRadius: '1px',
       margin: '0 0 10px',
       padding: '10px 0',
	   height: '618px',
     };
  }

  
  
  render()
  {
    return (
	<div className="container">
	   <Row>
		 <div style={this.frmreg}>
		
		  <div className="col s6">
		  </div>
		  <FormLogin>
		     
		  </FormLogin>
		 </div>
	   </Row>
	   <footer>
	   
	   </footer>
    </div>);
  }

}

export default Home;
