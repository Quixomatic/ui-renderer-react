import createElement from "./createElement";

// Define a custom createElementFromNode function using React's createElement function
export default function createElementFromNode(node) {
	return createElement(node.nodeName, {}, node.textContent);
}