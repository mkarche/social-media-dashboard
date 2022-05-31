import styled from "styled-components";
import { css } from "styled-components";

export const BorderWrapper = styled.div`
	position: relative;
	padding-top: 0.3rem;
	border-radius: 5px;
	background: ${({ social }) => {
		switch (social) {
			case "facebook":
				return css`var(--color-primary-facebook)`;

			case "instagram":
				return css`var(--color-primary-instagram)`;

			case "twitter":
				return css`var(--color-primary-twitter)`;

			case "youtube":
				return css`var(--color-primary-youtube)`;

			default:
				return css`currentColor`;
		}
	}};
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 0px 0px 5px 5px;
	background-color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-bg-card-dark-blue)`
			: css`var(--light-theme-bg-card-grayish-blue)`};

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

export const Stat = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Number = styled.p`
	margin: 0;
	font-size: 3.6rem;
	font-weight: 700;
	color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-color-text-white)`
			: css`var(--light-theme-color-text-dark-blue)`};
`;

export const NumberUnit = styled.h1`
	margin: 0;
	font-size: 0.8rem;
	font-weight: 400;
	color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-color-text-blue)`
			: css`var(--light-theme-color-text-grayish-blue)`}; ;
`;

export const Social = styled.div`
	display: flex;
	width: fit-content;
	height: fit-content;
	align-items: center;
`;

export const Username = styled.p`
	margin: 0 0 0 0.3rem;
	font-size: 0.8rem;
	font-weight: 700;
	color: ${({ darkMode }) =>
		darkMode === 1
			? css`var(--dark-theme-color-text-blue)`
			: css`var(--light-theme-color-text-grayish-blue)`}; ;
`;

export const CardTendency = styled.div``;
