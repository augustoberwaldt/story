import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
class FormLogin extends React.Component 
{
  constructor(props) {	
    super(props);
    console.log(this.refs); 
  }


  handleSubmit(event) {  
    
	alert('cascacas');
  }

  
  render() {
    return (
	    <div>
		  <form className ='form'>
		    <div>
			  <label> Name:</label>
			  <input type="text"  />
			</div>
		    
			<div>
			  <label> Name:</label>
			  <input type="text"  />
			</div>
			
			<div>
			  <label> Name:</label>
			  <input type="text"   />
			</div>
			
			<div>
				<Button  > Entrar</Button>
		    </div> 
		  </form>
		</div>  
	);
  }
  
}

export default FormLogin;