import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { OverviewCard, SummaryCard, SwitchButton } from "../../components";
import { overviewCards, summaryCards } from "../../data";
import {
	Container,
	Heading,
	Line,
	OverviewTitle,
	OverviewWrapper,
	Subtitle,
	SummaryWrapper,
	SwitchWrapper,
	SwitchToggle,
	SwitchText,
	Title,
} from "./Dashboard.styles";

export const themeContext = createContext(null);

function Dashboard() {
	const [darkMode, setDarkMode] = useState(false);
	const theme = {
		darkMode: darkMode,
		setDarkMode: setDarkMode,
	};
	return (
		<themeContext.Provider value={theme}>
			<ThemeProvider theme={theme}>
				<Container>
					<Heading>
						<Title>Social Media Dashboard</Title>
						<Subtitle>Total Followers: 23,004</Subtitle>
					</Heading>
					<Line />
					<SwitchWrapper>
						<SwitchText>Dark Mode</SwitchText>
						<SwitchToggle>
							<SwitchButton />
						</SwitchToggle>
					</SwitchWrapper>
					<SummaryWrapper>
						{summaryCards.map((card) => (
							<SummaryCard
								key={card.id}
								socialIcon={card.social}
								username={card.username}
								number={card.stat}
								numberUnit={card.statUnit}
								value={card.today}
								valueUnit="Today"
							/>
						))}
					</SummaryWrapper>
					<OverviewTitle>Overview - Today</OverviewTitle>
					<OverviewWrapper>
						{overviewCards.map((card) => (
							<OverviewCard
								socialIcon={card.social}
								title={card.statUnit}
								number={card.stat}
								value={card.percentageVariation}
								valueUnit="%"
							/>
						))}
					</OverviewWrapper>
					<div className="attribution">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
							rel="noreferrer"
						>
							Frontend Mentor
						</a>
						. Coded by <a href="https://github.com/mkarche/">Med Karche</a>.
					</div>
				</Container>
			</ThemeProvider>
		</themeContext.Provider>
	);
}

export default Dashboard;
