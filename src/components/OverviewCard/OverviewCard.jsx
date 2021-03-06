import React from "react";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../images/icon-youtube.svg";
import Tendency from "../Tendency/Tendency";
import {
	CardTendency,
	Number,
	Social,
	Title,
	Wrapper,
} from "./OverviewCard.styles";

function OverviewCard({
	darkMode,
	socialIcon,
	title,
	number,
	value,
	valueUnit,
}) {
	let icon = "";
	switch (socialIcon) {
		case "facebook":
			icon = <FacebookIcon width={20} height={20} />;
			break;

		case "instagram":
			icon = <InstagramIcon width={20} height={20} />;
			break;

		case "twitter":
			icon = <TwitterIcon width={20} height={20} />;
			break;

		case "youtube":
			icon = <YoutubeIcon width={20} height={20} />;
			break;

		default:
			break;
	}

	return (
		<Wrapper darkMode={darkMode}>
			<Title darkMode={darkMode}>{title}</Title>
			<Social>{icon}</Social>
			<Number darkMode={darkMode}>{number}</Number>
			<CardTendency>
				<Tendency value={value} valueUnit={valueUnit} />
			</CardTendency>
		</Wrapper>
	);
}

export default OverviewCard;
