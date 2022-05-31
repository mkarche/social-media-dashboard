import React, { useState } from "react";
import { OverviewCard, SummaryCard, Tendency } from "../../components";
import {
	Container,
	Heading,
	Line,
	OverviewTitle,
	OverviewWrapper,
	Subtitle,
	SummaryWrapper,
	Switch,
	SwitchButton,
	SwitchText,
	Title,
} from "./Dashboard.styles";

function Dashboard() {
	const [darkMode, setDarkMode] = useState(0);
	//console.log();
	return (
		<>
			<Container>
				<Heading>
					<Title>Social Media Dashboard</Title>
					<Subtitle>Total Followers: 23,004</Subtitle>
				</Heading>
				<Line />
				<Switch>
					<SwitchText>Dark Mode</SwitchText>
					<SwitchButton></SwitchButton>
				</Switch>
				<SummaryWrapper>
					<SummaryCard
						darkMode={darkMode}
						socialIcon="instagram"
						username="@mkarche"
						number={87}
						numberUnit="followers"
						value={3}
						valueUnit="Today"
					/>
					<SummaryCard
						darkMode={1}
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
						darkMode={darkMode}
						socialIcon="instagram"
						title="Page views"
						number={87}
						value={3}
						valueUnit="%"
					/>
					<OverviewCard
						darkMode={1}
						socialIcon="youtube"
						title="Page views"
						number={87}
						value={3}
						valueUnit="%"
					/>
				</OverviewWrapper>
			</Container>
			<div class="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Med Karche</a>.
			</div>
		</>
	);
}

export default Dashboard;
