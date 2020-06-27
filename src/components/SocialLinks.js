import React from "react";
import "./SocialLinks.css";
export default function SocialLinks() {
	return (
		<div className='profile-container'>
			<a
				href='https://github.com/SaiYamavaram'
				target='_blank'
				rel='noopener noreferrer'
				className='fab fa-github social'
			/>
			{/* <a href="https://gmail" target="_blank" rel ="noopener noreferrer" className='far fa-envelope social mail' /> */}
			<a
				href='https://www.linkedin.com/in/sai-karthik-yamavaram/'
				target='_blank'
				rel='noopener noreferrer'
				className='fab fa-linkedin social'
			/>
			<a
				href='https://www.instagram.com/sai_yamavaram/'
				target='_blank'
				rel='noopener noreferrer'
				className='fab fa-instagram social'
			/>
			<a
				href='https://t.me/saiyamavaram'
				target='_blank'
				rel='noopener noreferrer'
				className='fab fa-telegram social'
			/>
		</div>
	);
}
