import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	padding: 0;
	height: fit-content;
	width: fit-content;
`;

export const Icon = styled.div`
	margin-right: 0.1rem;
	align-self: flex-start;
`;

export const Value = styled.p`
	font-size: 10px;
	font-weight: 700;
	color: var(--color-primary-lime-green);
	margin: 0;
	align-self: flex-end;
	color: ${({ value }) =>
		value > 0
			? css`var(--color-primary-lime-green)`
			: css`var(--color-primary-bright-red)`};
`;
