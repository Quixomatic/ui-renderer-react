import React from "react";

// Define a custom dangerouslyCreateElementFromString function using React's dangerouslySetInnerHTML property
export default function dangerouslyCreateElementFromString(html) {
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}