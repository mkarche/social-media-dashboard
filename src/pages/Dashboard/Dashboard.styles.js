import styled from "styled-components";
import { tablet, desktop } from "../../utils";

export const Container = styled.div`
	padding: 1rem;
	height: 100vh;
	//background-color: var(--dark-theme-bg-dark-blue);
	background-color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-bg-dark-blue)"
			: "var(--light-theme-bg-white)"};
	//display: flex;
	//flex-direction: column;
	//align-items: center;

	& .attribution {
		margin-top: 2rem;
		color: ${({ theme }) =>
			theme.darkMode
				? "var(--dark-theme-color-text-white)"
				: "var(--light-theme-color-text-dark-blue)"};
	}

	& .attribution a {
		font-weight: 700;
		color: ${({ theme }) =>
			theme.darkMode
				? "var(--color-primary-lime-green)"
				: "var(--color-primary-bright-red)"};
		opacity: 0.8;
	}

	& .attribution a:hover {
		opacity: 1;
	}
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

export const SummaryWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0.5rem;

	${tablet({
		gridTemplateColumns: "1fr 1fr",
	})};

	${desktop({
		gridTemplateColumns: "1fr 1fr 1fr 1fr",
	})};
`;

export const OverviewTitle = styled.h1`
	margin: 1rem 0;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-white)"
			: "var(--light-theme-color-text-grayish-blue)"};
`;

export const OverviewWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0.5rem;
	${tablet({
		gridTemplateColumns: "1fr 1fr",
	})};

	${desktop({
		gridTemplateColumns: "1fr 1fr 1fr 1fr",
	})};
`;
