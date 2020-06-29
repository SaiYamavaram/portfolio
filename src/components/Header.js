import React from "react";
// import profile from "../profile.jpeg";
import "./Header.css";
import { ReactComponent as Logo } from "../logo.svg";
import Typical from "react-typical";
import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";
export default function Header() {
	return (
		<div>
			<div className='cointainer' id="about">
				<div className='progress-bar'>
					<div className='header'>
						{/* <image src={profile} alt='Image' /> */}
						<div className='logoBac'>
							<Logo />
						</div>
						<h1 className="name">Yamavaram Sai Karthik</h1>
						<Typical
							steps={["Web Dev!!!!", 1000, "App dev....", 500]}
							loop={Infinity}
							wrapper='h2'
							className='name'
						/>
						<SocialLinks />
					</div>
					<Navbar />
				</div>
			</div>
		</div>
	);
}
