import React, { Component } from 'react';
import contactBanner from './img/contact/contact.jpg';


class Contact extends Component{
    render(){
        return(
            <section className="sec-contact">
        		<div className="container">
        			<div className="row">
        				<div className="col-12">
        					<img src={contactBanner} className="img-fluid" alt="About Banner" />
        					<h4>DIRECTION | PRODUCTION | MARKETING </h4>
        				</div>
        			</div>
        			<div className="row">
        				<div className="col-12">
        					<hr />
        				</div>
        			</div>
        			<div className="row">
        				<div className="col-12">
        					<h3>
        						Email : <a href="mailto:info@dancingatoms.com" target="_top">info@dancingatoms.com</a>
        					</h3>
        					<h3>
        						Location : Los Angeles - Mumbai - London
        					</h3>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default Contact;
