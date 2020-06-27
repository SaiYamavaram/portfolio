import React from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = [
	{
		name: "VNR Vignana Jyothi Institute of Engineering and Technology",
		year: "2017-2021",
	},
	{ name: "Sri Gayatri Junior Collage", year: "2015-2017" },
	{ name: "Narayana E-Technology School", year: "2015" },
];

const Edu = () => {
	// console.log(Details)
	const data = Details.map(
		(x, index) => (
			<div
				className='detail-card '
				key={Details.findIndex(x)}
				data-aos='fade-up-left'>
				<div className='institute-name'>{x.name}</div>
				<div className='year'>{x.year}</div>
			</div>
		)
		// console.log(x)
	);
	return data;
};

export default function Education() {
	React.useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out" });
	}, []);
	return (
		<div className='education-section'>
			<h2
				style={{
					textAlign: "center",
					fontWeight: "bolder",
					borderBottomWidth: "5px",
					color: "rgb(10, 113, 230)",
					textShadow: "-2px 2px 2px black",
				}}
				className='resume'>
				Resume
			</h2>

			<h2 className='' data-aos='fade in'>
				Education
			</h2>
			<div className='details-container'>
				<Edu />
			</div>
		</div>
	);
}
