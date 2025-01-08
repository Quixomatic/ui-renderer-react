import React from "react";

// Define a custom createElementFromString function using React's dangerouslySetInnerHTML property
export default function createElementFromString(html) {
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}