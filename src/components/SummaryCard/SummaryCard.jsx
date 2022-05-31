import React from "react";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../images/icon-youtube.svg";
import _ from "lodash";
import Tendency from "../Tendency/Tendency";
import {
	BorderWrapper,
	CardTendency,
	Number,
	NumberUnit,
	Social,
	Stat,
	Title,
	Username,
	Wrapper,
} from "./SummaryCard.styles";

function SummaryCard({
	darkMode,
	socialIcon,
	username,
	title,
	number,
	numberUnit,
	value,
	valueUnit,
}) {
	let icon = "";
	switch (socialIcon) {
		case "facebook":
			icon = <FacebookIcon />;
			break;

		case "instagram":
			icon = <InstagramIcon />;
			break;

		case "twitter":
			icon = <TwitterIcon />;
			break;

		case "youtube":
			icon = <YoutubeIcon />;
			break;

		default:
			break;
	}

	return (
		<BorderWrapper social={socialIcon}>
			<Wrapper darkMode={darkMode}>
				<Social>
					{icon} <Username darkMode={darkMode}>{username}</Username>
				</Social>
				<Stat>
					<Number darkMode={darkMode}>{number}</Number>
					<NumberUnit darkMode={darkMode}>
						{_.upperCase(numberUnit.split("").join(" "))}
					</NumberUnit>
				</Stat>
				<CardTendency>
					<Tendency value={value} valueUnit={` ${valueUnit}`} />
				</CardTendency>
			</Wrapper>
		</BorderWrapper>
	);
}

export default SummaryCard;
