import React, { useContext } from "react";
import { themeContext } from "../../pages/Dashboard/Dashboard";
import {
	CheckBox,
	CheckBoxLabel,
	CheckBoxWrapper,
} from "./SwitchButton.styles";

export const SwitchButton = () => {
	const { darkMode, setDarkMode } = useContext(themeContext);
	return (
		<div>
			<CheckBoxWrapper>
				<CheckBox
					id="checkbox"
					type="checkbox"
					checked={darkMode}
					onChange={() => {
						setDarkMode(!darkMode);
					}}
				/>
				<CheckBoxLabel htmlFor="checkbox" />
			</CheckBoxWrapper>
		</div>
	);
};
