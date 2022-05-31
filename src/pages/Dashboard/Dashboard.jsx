import React, { useState } from "react";
import { OverviewCard, SummaryCard, Tendency } from "../../components";
import { Container } from "./Dashboard.styles";

function Dashboard() {
	const [darkMode, setDarkMode] = useState(0);
	//console.log();
	return (
		<Container>
			Dashboard
			<Tendency value="-4" unit="%" />
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
		</Container>
	);
}

export default Dashboard;
