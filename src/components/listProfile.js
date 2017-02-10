import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Topo from './topo';
import Rodape from './rodape';
import ElementListProfile from './elementListProfile';

class ListProfile extends React.Component
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
	<section> 
		   <Topo> </Topo>
			<div className="container" >
			   <Row>
				  <div className="col s12">
				  {rows.map(function (i) {
					 return  <ElementListProfile/>
				   })}
				  </div>
			   </Row>
			   <Rodape/>
			</div>
		</section>
		
   );
  }

}

export default ListProfile;
