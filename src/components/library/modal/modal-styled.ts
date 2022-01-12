import styled, { css } from 'styled-components';

import { IProps } from '.';
import { responsive } from '@/styled/responsive';

interface IModalProps extends Partial<IProps> {
	fadeType?: 'in' | 'out';
	width?: string;
	height?: string;
}

export const ModalBackgroundStyled = styled.div<IModalProps>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 8;
	background: rgba(0, 0, 0, 0.4);
	transition: all 0.2s ease-in;
	overflow: overlay;

	opacity: ${props => {
		switch (props.fadeType) {
			case 'in':
				return '1';
			default:
				return '0';
		}
	}};
	transition: ${props => {
		switch (props.fadeType) {
			case 'in':
				return 'opacity 0.15s ease-in-out';
			case 'out':
				return 'opacity 0.15s ease-in-out';
			default:
				return '';
		}
	}};
`;

export const ModalBody = styled.div<IModalProps>`
	position: absolute;
	max-height: calc(94vh - 2.5rem);
	overflow: ${props => props.overflow || 'auto'};
	padding: 55px;
	background-color: ${props => props.theme.MODAL_BG};
	border-radius: 12px;
	overflow-x: hidden;
	-webkit-mask-image: radial-gradient(circle, white 100%, black 100%);
	scrollbar-width: thin;

	/* ::-webkit-scrollbar {
    width: 0px;
    background: transparent; 
	} */

	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					 {
						width: ${({ width }: IModalProps) => width || '33%'};
						height: ${({ height }) => height || 'auto'};
						padding: 40px 55px;

						@media ${responsive.md} {
							width: ${({ width }: IModalProps) => width || '25%'};
							height: ${({ height }) => height || 'auto'};
							min-width: 30rem;
						}
					}
				`;
			case 'large':
				return css`
					 {
						width: ${({ width }: IModalProps) => width || '60%'};
						height: ${({ height }) => height || '70%'};
					}
				`;
			case 'default':
			default:
				return css`
					 {
						height: ${({ height }) => height || 'auto'};

						@media ${responsive.md} {
							width: ${({ width }: IModalProps) => width || '40%'};
							min-width: ${({ minWidth }: IModalProps) => minWidth || '34rem'};
						}

						@media ${responsive.lg} {
							width: ${({ width }: IModalProps) => width || '30%'};
						}
					}
				`;
		}
	}}

	transform: ${props => {
		switch (props.fadeType) {
			case 'in':
				return 'scale(1)';
			default:
				return 'scale(0.92)';
		}
	}};

	transition: ${props => {
		switch (props.fadeType) {
			case 'in':
				return 'transform 0.15s';
			case 'out':
				return 'transform 0.15s';
			default:
				return '';
		}
	}};

	@media (max-width: 776px) {
		width: 95%;
		min-width: auto;
		max-height: 80%;
		padding: 28px;
		overflow: auto;
	}
`;

export const ModalTopPanel = styled.div<{ centerTitle?: boolean }>`
	display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
	align-items: center;
	justify-content: ${props => (props.centerTitle ? 'center' : 'space-between')};
	text-align: ${props => (props.centerTitle ? 'center' : 'left')};
	margin-bottom: 30px;
`;

export const ModalTitle = styled.span`
	color: #2d2d52;
`;

export const Close = styled.span`
	cursor: pointer;

	path {
		fill: #79798e;
		transition: 0.2s;
	}

	:hover {
		path {
			fill: #646476;
		}
	}
`;
