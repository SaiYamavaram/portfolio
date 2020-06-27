import React from "react";
import "./Navbar.css";
const smoothscroll = (elementID = "projects") => {
	document
		.getElementById(elementID)
		.scrollIntoView({ block: "start", behavior: "smooth" });
};
export default function Navbar() {
	return (
		<div>
			<nav
				data-aos='fade'
				className='navbar  sticky-top '
				style={{ backgroundColor: "transparent" }}>
				<div className='collapse navbar-collapse' id='collapsableNavbar'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								onClick={() => smoothscroll("about")}>
								ABOUT
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' onClick={() => smoothscroll("skills")}>
								SKILLS
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' onClick={() => smoothscroll("download")}>
								RESUME
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' onClick={() => smoothscroll("projects")}>
								PROJECTS
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' onClick={() => smoothscroll("contact")}>
								CONTACT
							</a>
						</li>
					</ul>
				</div>
				<div className='progress-container'>
					<div
						className='progress-bar'
						id='myBar'
						style={{ color: "white", width: "6.00862%" }}></div>
				</div>
			</nav>
		</div>
	);
}
