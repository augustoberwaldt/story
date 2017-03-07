import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';




class Rodape extends React.Component
{
  constructor(props)
  {
    super(props);

  }
  
  render()
  {
    return (
		   <footer className="page-footer">
				  <div className="row">
					 <div  className="col s2 offset-s9">
						<span> © 2017 Story </span>					  
					 </div>
				  </div>
			   </footer>
		
		
   );
  }

}

export default Rodape;
