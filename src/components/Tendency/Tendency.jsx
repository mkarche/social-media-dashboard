import React from "react";
import { ReactComponent as IconUp } from "../../images/icon-up.svg";
import { ReactComponent as IconDown } from "../../images/icon-down.svg";
import { Icon, Value, Wrapper } from "./Tendency.styles";

function Tendency({ value, unit }) {
	// color =
	// 	value > 0
	// 		? `var(--color-primary-lime-green)`
	// 		: `var(--color-primary-bright-red)`;
	return (
		<Wrapper>
			<Icon>{Number(value) > 0 ? <IconUp /> : <IconDown />}</Icon>
			<Value value={value}>
				{value} {unit}
			</Value>
		</Wrapper>
	);
}

export default Tendency;
