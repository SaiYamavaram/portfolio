import React from "react";
import Education from "./Education";
import Projects from "./Projects";
import Section from "./Section";
export default function Resume() {
	return (
		<div id="resume">
			<div>
				<Education />
				<Section />
				<Projects />
			</div>
		</div>
	);
}
