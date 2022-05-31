import React from "react";
import { ReactComponent as IconUp } from "../../images/icon-up.svg";
import { ReactComponent as IconDown } from "../../images/icon-down.svg";
import { Icon, Value, Wrapper } from "./Tendency.styles";

function Tendency({ value, valueUnit }) {
	return (
		<Wrapper>
			<Icon>{Number(value) > 0 ? <IconUp /> : <IconDown />}</Icon>
			<Value value={value}>
				{value}
				{valueUnit}
			</Value>
		</Wrapper>
	);
}

export default Tendency;
