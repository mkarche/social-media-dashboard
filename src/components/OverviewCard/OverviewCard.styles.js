import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	border-radius: 5px;
	background-color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-bg-card-dark-blue)"
			: "var(--light-theme-bg-card-grayish-blue)"};
	grid-template-columns: 1fr 1fr;
	align-items: center;
	//max-width: 350px;
	padding: 1rem;
	gap: 1rem;
	&:hover {
		cursor: pointer;
		filter: ${({ theme }) =>
			theme.darkMode ? "brightness(140%)" : "brightness(95%)"};
	}
`;

export const Title = styled.h1`
	margin: 0;
	font-size: 0.8rem;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-blue)"
			: "var(--light-theme-color-text-grayish-blue)"};
`;

export const Number = styled.p`
	margin: 0;
	font-size: 1.8rem;
	font-weight: 700;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-white)"
			: "var(--light-theme-color-text-dark-blue)"};
`;

export const Social = styled.div`
	justify-self: end;
`;

export const CardTendency = styled.div`
	justify-self: end;
`;
