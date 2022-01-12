import styled from 'styled-components';

export const CopyContainer = styled.span`
	display: inline-flex;
	align-items: center;
	position: relative;

	svg {
		cursor: pointer;
	}

	:hover {
		filter: contrast(0.8);
	}
`;

export const CopyText = styled.span<{ copied: boolean }>`
	cursor: default;
	position: absolute;
	left: 18px;
	top: 0;
	padding-left: 10px;
	transition: 0.2s;
	opacity: ${props => (props.copied ? 1 : 0)};
	visibility: ${props => (props.copied ? 'visible' : 'hidden')};
`;
