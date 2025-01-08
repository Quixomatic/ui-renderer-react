import React from "react";

// Define a custom createElement function using React's createElement function
export default function createElement(type, props, ...children) {
	return React.createElement(type, props, ...children);
}