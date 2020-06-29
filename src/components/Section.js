import React from "react";
import "./Section.css";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Section() {
	React.useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out" });
	}, []);
	return (
		<div className='section' id="skills">
			<div className="section-outer">
				<div className='section-container'>

					<h1 className='about container' data-aos='fade-down-right'>
						<div className='title'>Profile</div>
						<div id='profile' className='intro col-sm-8'>
							<p>NAME:</p>
							<div className='item'>Yamavaram Sai Karthik</div>
							<p>BIRTH DATE:</p>
							<div className='item'>1st September, 1999</div>
							<p>EMAIL:</p>
							<div className='item'>saikarthiksep@gmail.com</div>
							<p>LANGUAGES:</p>
							<div className='item'>Hindi, Telugu, English</div>
						</div>
					</h1>
					<div className='skills container' data-aos='fade-down-left'>
						<h1 className='title'>Skills</h1>
						<ul className='skill-set'>
							<li>
								C++
							<div className='percentage'>80%</div>
							</li>
							<li>Python</li>
							<li>Js</li>
							<li>React Js</li>
							<li>React Native</li>
							<li>html5</li>
							<li>css3</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
