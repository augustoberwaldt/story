import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';




class Topo extends React.Component
{
  constructor(props)
  {
    super(props);
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
			  
		  }
		
		
	};

  }
  
 
  
  render()
  {
    return (
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
		
		
   );
  }

}

export default Topo;
