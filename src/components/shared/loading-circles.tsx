import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

const L = keyframes`
   0%   { 
    transform: scale(0.5);
    background: #edf8ff;
  }
  50%   { 
    transform: scale(0.88);
    background: white;
  }
  100% { 
    transform: scale(0.5);
    background: #edf8ff;
  }
`;

const animationRule = css`
	${L} 1s linear infinite
`;

const Loading = styled.div`
	display: inline-flex;
	padding: 0 10px;
	align-items: center;

	div {
		position: relative;
		height: 9px;
		width: 9px;
		border: 2px solid #1d93f7c4;
		border-radius: 100%;
		transform: transformZ(0);
		animation: ${animationRule};

		&:nth-child(1n) {
			left: -10px;
			animation-delay: 0s;
		}

		&:nth-child(2n) {
			left: 0;
			animation-delay: 0.15s;
		}

		&:nth-child(3n) {
			left: 10px;
			animation-delay: 0.25s;
		}
	}
`;

export const LoadingCircles: FC<IProps> = ({ loading }) => (
	<Loading>
		{loading && (
			<>
				<div />
				<div />
				<div />
			</>
		)}
	</Loading>
);

interface IProps {
	loading?: boolean;
}

LoadingCircles.defaultProps = {
	loading: true
} as Partial<IProps>;

export default LoadingCircles;
