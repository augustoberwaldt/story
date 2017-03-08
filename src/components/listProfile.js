import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Header from './fragments/header';
import Footer from './fragments/footer';
import ElementListProfile from './elementListProfile';

class ListProfile extends React.Component
{
  constructor(props) {
    super(props);	
  }
  
  getProfiles() {
	var rows = [],
	i = 0,
	len = 10;
    while (++i <= len) {
		rows.push(<ElementListProfile key={i} />);
	}		
	return rows;
  }
  
  render() {
    return (
	    <section> 
		   <Header> </Header>
			<div className="container" >
			   <Row>
				  <div className="col s12">
					{this.getProfiles()}
				  </div>
			   </Row>
			</div>
		    <Footer/>	
		</section>
    );
  }
}

export default ListProfile;
