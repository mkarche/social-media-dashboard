import styled from "styled-components";

export const Container = styled.div`
	padding: 1rem;
	//background-color: var(--dark-theme-bg-dark-blue);
	background-color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-bg-dark-blue)"
			: "var(--light-theme-bg-white)"};
	//display: flex;
	//flex-direction: column;
	//align-items: center;
`;

export const Heading = styled.div``;

export const Title = styled.h1`
	margin: 0;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-white)"
			: "var(--light-theme-color-text-dark-blue)"};
`;

export const Subtitle = styled.p`
	margin: 0;
	font-weight: 700;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-blue)"
			: "var(--light-theme-color-text-grayish-blue)"};
`;

export const Line = styled.hr``;

export const SwitchWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SwitchText = styled.p`
	font-weight: 700;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-blue)"
			: "var(--light-theme-color-text-grayish-blue)"};
`;

export const SwitchToggle = styled.div``;

export const SummaryWrapper = styled.div``;

export const OverviewTitle = styled.h1`
	margin: 1rem 0;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-white)"
			: "var(--light-theme-color-text-grayish-blue)"};
`;

export const OverviewWrapper = styled.div``;
