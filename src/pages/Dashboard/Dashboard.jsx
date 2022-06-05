import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { OverviewCard, SummaryCard, SwitchButton } from "../../components";
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
						<SummaryCard
							socialIcon="instagram"
							username="@mkarche"
							number={87}
							numberUnit="followers"
							value={3}
							valueUnit="Today"
						/>
						<SummaryCard
							socialIcon="facebook"
							username="@mkarche"
							number={87}
							numberUnit="subscribers"
							value={3}
							valueUnit="Today"
						/>
					</SummaryWrapper>
					<OverviewTitle>Overview - Today</OverviewTitle>
					<OverviewWrapper>
						<OverviewCard
							socialIcon="instagram"
							title="Page views"
							number={87}
							value={3}
							valueUnit="%"
						/>
						<OverviewCard
							socialIcon="youtube"
							title="Page views"
							number={87}
							value={3}
							valueUnit="%"
						/>
					</OverviewWrapper>
				</Container>
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
			</ThemeProvider>
		</themeContext.Provider>
	);
}

export default Dashboard;
