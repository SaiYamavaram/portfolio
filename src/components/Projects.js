import React from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./resume.pdf";
const projects = [
	{
		name: "DocMan",
		content:
			"DOCMAN IS AN APPLICATION THAT HELPS IN ANALYZING THE RECORDED SNORING SIGNAL. SIGNAL PROCESSING AND MACHINE LEARNING MODELS PREDICT IF THE PERSON SNORING IS SUFFERING FROM OSA(OBSTRUCTIVE SLEEP APNOEA) .",
	},
	{
		name: "XPLORE",
		content:
			"XPLORE IS A REACT NATIVE MOBILE APP THAT LETS USERS TO FIND IMAGES ON THE WEB( UNSPLASH API) FROM THE QUERY GIVEN AS INPUT AND PROVIDES OPTION OF DOWNLOADING AND SHARING.",
	},
	{
		name: "CONTENT BLOCKER",
		content:
			"A CHROME EXTENSION THAT PROVIDES CUSTOMIZED CONTENT BLOCKING FEATURE BASED ON THE KEYWORDS PROVIDED TO EXTENSION WHICH IN- TURN ACT AS FILTER WHILE RENDERING OF PAGE AND BLOCK THE CONTAINER CONTAINING THOSE KEYWORDS.",
	},
];

// function Projectdetails() {
// 	const data = projects.map((x) => (
// 		<div className='project-card ' data-aos='fade-up-left'>
// 			<div className='project-name'>{x.name}</div>
// 			<p className='project-content'>{x.content}</p>
// 		</div>
// 	));

// 	return data;
// }

// export default function Projects() {
// 	return (
// 		<div className='projects-'>
// 			<div className="details-container">
// 				<div className='title'>Projects</div>
// 				<Projectdetails />
// 			</div>
// 		</div>
// 	);
// }

// const Details = [{ name: "VNR Vignana Jyothi Institute of Engineering and Technology", year: "2017-2021" }, { name: "Sri Gayatri Junior Collage", year: "2015-2017" }, { name: "Narayana E-Technology School", year: "2015" }]

const Edu = () => {
	// console.log(Details)
	const data = projects.map((x, index) => (
		<div className='project-detail-card ' id='projects' data-aos='fade-up-left'>
			<div className='institute-name'>{x.name}</div>
			<p className='year'>{x.content}</p>
		</div>
	));
	return data;
};

export default function Projects() {
	React.useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out" });
	}, []);
	return (
		<div className='project-section'>
			<h2 style={{ textAlign: "center" }} data-aos='fade in'>
				Projects
			</h2>
			<div className='details-container'>
				<Edu />
				<a
					id='download'
					href='./resume.pdf'
					download
					style={{
						padding: "10px 5px",
						borderRadius: "15px",
						fontWeight: "bolder",
						color: "white",
						backgroundColor: "rgb(97, 6, 169)",
						borderWidth: "0px",
						left: "48%",
						boxShadow: "-4px 10px 14px -2px black",
					}}>
					Download Resume
				</a>
			</div>
		</div>
	);
}
