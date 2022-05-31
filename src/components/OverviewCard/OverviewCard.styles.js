import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	border-radius: 5px;
	background-color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-bg-card-dark-blue)`
			: css`var(--light-theme-bg-card-grayish-blue)`};
	grid-template-columns: 1fr 1fr;
	align-items: center;
	//max-width: 350px;
	padding: 1rem;
	gap: 1rem;
`;

export const Title = styled.h1`
	margin: 0;
	font-size: 0.8rem;
	color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-color-text-blue)`
			: css`var(--light-theme-color-text-grayish-blue)`}; ;
`;

export const Number = styled.p`
	margin: 0;
	font-size: 1.8rem;
	font-weight: 700;
	color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-color-text-white)`
			: css`var(--light-theme-color-text-dark-blue)`};
`;

export const Social = styled.div`
	justify-self: end;
`;

export const CardTendency = styled.div`
	justify-self: end;
`;
