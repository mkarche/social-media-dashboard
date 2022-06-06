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
	Username,
	Wrapper,
} from "./SummaryCard.styles";

function SummaryCard({
	socialIcon,
	username,
	number,
	numberUnit,
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
			icon = <TwitterIcon width={20} height={20} fill="orange" />;
			break;

		case "youtube":
			icon = <YoutubeIcon width={20} height={20} />;
			break;

		default:
			break;
	}

	return (
		<BorderWrapper social={socialIcon}>
			<Wrapper>
				<Social>
					{icon} <Username>{username}</Username>
				</Social>
				<Stat>
					<Number>{number}</Number>
					<NumberUnit>{_.upperCase(numberUnit.split("").join(" "))}</NumberUnit>
				</Stat>
				<CardTendency>
					<Tendency value={value} valueUnit={` ${valueUnit}`} />
				</CardTendency>
			</Wrapper>
		</BorderWrapper>
	);
}

export default SummaryCard;
