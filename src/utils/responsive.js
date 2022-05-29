import { css } from "styled-components";

//Mobile by Default : Mobile First Approach

//Tablet Breakpoint
export function tablet(props) {
	return css`
		@media only screen and (min-width: 375px) {
			${props}
		}
	`;
}

//Laptop and Desktop breakpoint
export function desktop(props) {
	return css`
		@media only screen and (min-width: 768px) {
			${props}
		}
	`;
}
