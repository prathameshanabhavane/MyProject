import React, { Component } from "react";
import banner1 from './img/home/dancing_homepag1.jpg';
import banner2 from './img/home/dancing_homepag2.jpg';
import banner3 from './img/home/dancing_homepag3.jpg';
import banner4 from './img/home/dancing_homepag4.jpg';
import banner5 from './img/home/dancing_homepag5.jpg';
import banner6 from './img/home/dancing_homepag6.jpg';

class HomeCarousel extends Component{
    render(){
        return(
            <section>
        		<div id="homepgcarousel" className="carousel slide carousel-fade custom-carousel hm-carousel" data-ride="carousel">
        			<div className="carousel-inner">
        				<div className="carousel-item text-center active">
        					<img className="d-block w-100 hm-bannerimg" src={banner6} alt="Third slide" />
        					<div className="carousel-caption d-none d-md-block">
        						<h5>SISYA</h5>
        					</div>
        				</div>
        				<div className="carousel-item text-center">
        					<img className="d-block w-100 hm-bannerimg" src={banner4} alt="Third slide" />
        					<div className="carousel-caption d-none d-md-block">
        						<h5>BABA</h5>
        					</div>
        				</div>
        				<div className="carousel-item text-center">
        					<img className="d-block w-100 hm-bannerimg" src={banner5} alt="Third slide" />
        					<div className="carousel-caption d-none d-md-block">
        						<h5>RINN</h5>
        					</div>
        				</div>
        				<div className="carousel-item text-center">
        					<img className="d-block w-100 hm-bannerimg" src={banner3} alt="Third slide" />
        					<div className="carousel-caption d-none d-md-block">
        						<h5>FULWANTI</h5>
        					</div>
        				</div>
        				<div className="carousel-item text-center">
        					<img className="d-block w-100 hm-bannerimg" src={banner2} alt="Second slide" />
        					<div className="carousel-caption d-none d-md-block">
        						<h5>KLOSET KRIMES</h5>
        					</div>
        				</div>
        				<div className="carousel-item text-center">
        					<img className="d-block w-100 hm-bannerimg" src={banner1} alt="First slide" />
        					<div className="carousel-caption d-none d-md-block">
        						<h5>ARISE</h5>
        					</div>
        					<div className="awardbx">
        						 <ul>
        							<li>
        								<img src="img/icons/award.png" alt="Award" />
        								<h6>
        									AWARD NAME <br />2018
        								</h6>
        							</li>
        							<li>
        								<img src="img/icons/award.png" alt="Award" />
        								<h6>
        									AWARD NAME <br />2018
        								</h6>
        							</li>
        							<li>
        								<img src="img/icons/award.png" alt="Award" />
        								<h6>
        									AWARD NAME <br />2018
        								</h6>
        							</li>
        						</ul> 
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default HomeCarousel;
