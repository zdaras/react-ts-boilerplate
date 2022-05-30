import styled from 'styled-components';

import { responsive } from '@/styled/responsive';

export const Tab = styled.div`
	width: 100%;
	padding-top: 10px;
	position: relative;

	@media ${responsive.md} {
		padding-top: 36px;
	}

	.active {
		-webkit-animation-name: fadeInDown;
		-moz-animation-name: fadeInDown;
		-o-animation-name: fadeInDown;
		animation-name: fadeInDown;
		-webkit-animation-duration: 0.3s;
		/* // -webkit-animation-delay: 2s; */
		-webkit-animation-timing-function: ease;
		-webkit-animation-fill-mode: both;

		-moz-animation-duration: 0.3s;
		/* // -moz-animation-delay: 2s; */
		-moz-animation-timing-function: ease;
		-moz-animation-fill-mode: both;

		-o-animation-duration: 0.3s;
		/* // -o-animation-delay: 2s; */
		-o-animation-timing-function: ease;
		-o-animation-fill-mode: both;

		animation-duration: 0.3s;
		/* // animation-delay: 2s; */
		animation-timing-function: ease;
		animation-fill-mode: both;
	}

	@keyframes fadeInDown {
		0% {
			opacity: 0;
			/* -webkit-transform: translateX(260px); */
		}

		100% {
			opacity: 1;
			/* -webkit-transform: translateX(0); */
		}
	}
`;
