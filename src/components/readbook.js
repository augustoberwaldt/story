import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon , Row} from 'react-materialize';
import FormLogin from './forms/formRegister';
import {Router, Route, Link, browserHistory } from 'react-router'
import Dropzone from 'react-dropzone';
import Header from './fragments/header';
import Footer from './fragments/footer';

import './../css/book.css';

class ReadBook extends React.Component
{
  constructor(props)
  {
    super(props);
	

  }
  
 componentDidMount() 
 {
	 var pageLocation=[],
    lastPage=null;
    window.$Zz=0;

	global.TweenLite.set(".centerClass", {xPercent:-50, yPercent:-50});
	global.TweenLite.set(".pageWrapper", {left: "327px", perspective:1000});
	global.TweenLite.set(".page", {transformStyle:"preserve-3d"});
	global.TweenLite.set(".back", {rotationY:-180});
	global.TweenLite.set([".back", ".front"],{backfaceVisibility:"hidden"});

	// All pages must have an id assigned to them in the HTML
	global.$(".page").click(
	function() {
		if (pageLocation[this.id] === undefined || pageLocation[this.id] =="right") {
			window.$Zz = (window.$(".left").length)+1 ;
			window.TweenMax.to(window.$(this), 1,
			{force3D:true,rotationY:-180,transformOrigin:"-1px top",
			className:'+=left',z:window.$Zz,zIndex:window.$Zz}); 
			window.TweenLite.set(window.$(this), {className:'-=right'}); 
			pageLocation[this.id]= "left";
		}
		else {
			window.$Zz = (window.$(".right").length)+1 ;
			window.TweenMax.to(window.$(this), 1, {force3D:true,rotationY:0,
			transformOrigin:"left top",className:'+=right',z:window.$Zz,zIndex:window.$Zz});
			window.TweenLite.set(window.$(this), {className:'-=left'}); 
			pageLocation[this.id]= "right";
		}
	}
	);

	global.$(".front").hover(
	  function() {
		 global.TweenLite.to(global.$(this).find(".pageFoldRight"), 0.3,
		 {width:"50px", height:"50px",
		 backgroundImage:"linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)"});
	  },
	  function() {
		global.TweenLite.to(global.$(this).find(".pageFoldRight"), 0.3, {width:"0px", height:"0px"});  
		}
	);

	global.$(".back").hover(
	  function() {
		 global.TweenLite.to(global.$(this).find(".pageFoldLeft"), 0.3, 
		 {width:"50px", height:"50px",
		 backgroundImage:"linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)"});
	  },
	  function() {
		global.TweenLite.to(global.$(this).find(".pageFoldLeft"), 0.3, 
		{width:"0px", height:"0px"});  
		}
	);

	 
 }
  
  render()
  {	
    return (
	<section>
   <Header/>
 
      <Row>
	    <div className="col s10 offset-s2">
         <div className="bookWrapper">
            <div className="bookBg">
               <div className="pageBg centerClass">
                  <div className="pageWrapper">
                     <div id="page3" className="page">
                        <div className="pageFace front">
                           <h1>front3</h1>
                           <div className="pageFoldRight"></div>
                        </div>
                        <div className="pageFace back">
                           <h1>back3</h1>
                           <div className="pageFoldLeft"></div>
                        </div>
                     </div>
                     <div id="page2" className="page">
                        <div className="pageFace front">
                           <h1>front2</h1>
                           <div className="pageFoldRight"></div>
                        </div>
                        <div className="pageFace back">
                           <h1>back2</h1>
                           <div className="pageFoldLeft"></div>
                        </div>
                     </div>
                     <div id="page1" className="page">
                        <div className="pageFace front">
                           <h1>front1</h1>
                           <div className="pageFoldRight"></div>
                        </div>
                        <div className="pageFace back">
                           <h1>back1</h1>
                           <div className="pageFoldLeft"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
   </div>
   </Row>
</section>
   );
  }

}

export default ReadBook;
