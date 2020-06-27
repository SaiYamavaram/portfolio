import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);
export default function Footer() {
	return (
		<div data-aos='fade' id='contact'>
			<footer className='foot'>
				<div className='footer-container'>
					{/* <FontAwesomeIcon icon="fa fa-github" style={{ fontSize: "200px" }} /> */}
					<div style={{ paddingTop: "60px" }}>
						<h2 style={{ color: "#0a71e6" }}>Contact</h2>
						<h3>LOOKING FORWARD TO LISTEN FROM YOU</h3>
						{/* <form name="contactForm">
            <div className="input-group">
              <input name="contactName" type="text" id="contactName" value="" required="" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>NAME</label>
            </div>

            <div className="input-group">
              <input name="contactEmail" type="email" id="contactEmail" value="" required="" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>E-MAIL</label>
            </div>
            <div className="input-group">
              <input name="contactSubject" type="text" id="contactSubject" value="" required="" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>SUBJECT</label>
            </div>
            <div className="input-group">
              <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" style={{ height: "200px", width: "100%" }}></textarea>
            </div>
            <button className="btn success-c" style={{ width: "100%" }} type="submit" onclick="alert('This form is under developing stage Try alternate mean of communication Thanks for visting my portfolio ')"> SUBMIT</button>

          </form> */}
						<div class='  text-center icon-container'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://github.com/saiYamavaram'
								class='social fa fa-github '></a>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.linkedin.com/in/sai-karthik-yamavaram/'
								class='social fa fa-linkedin'></a>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://www.instagram.com/sai_yamavaram/'
								class='social fa fa-instagram'></a>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://telegram.me/saiyamavaram/'
								class='social fa fa-telegram'></a>
						</div>
					</div>
				</div>
				<div className='footer-contact'></div>
			</footer>
			<div id='links'>
				<div className='row .icon-container'>
					<div className='  footer-icon'>
						<i
							className='fas fa-mobile'
							style={{ fontSize: "40px", marginRight: "5px" }}
						/>
						<h4>
							<strong>CALL ME AT</strong>
						</h4>
						<a href='tel:+917901034896'>
							<h4
								style={{
									textDecoration: "none",
									color: "white",
								}}>
								(+91) 7901034896
							</h4>
						</a>
					</div>
					<div className='  footer-icon'>
						<i
							className='fa fa-envelope'
							style={{
								fontSize: " 40px",
								color: "black",
								backgroundColor: "transparent",
							}}></i>
						<h4>
							<strong>MAIL ME AT</strong>
						</h4>
						<a href='mailto:ysaikarthiksep01@gmail.com'>
							<h4
								style={{
									textDecoration: "none",
									color: "white",
								}}>
								ysaikarthiksep01@gmail.com
							</h4>
						</a>
					</div>
					<div className='  footer-icon'>
						<i className='fa fa-map-marker' style={{ fontSize: "40px" }}></i>
						<h4>
							<strong>ADDRESS</strong>
						</h4>
						<h4 style={{ color: "white" }}>HYDERABAD</h4>
					</div>
				</div>
			</div>
			<div style={{ fontSize:"11px" ,color: "white",textAlign:"center" }}> &copy; 2020, Built using React </div>
		</div>
	);
}
