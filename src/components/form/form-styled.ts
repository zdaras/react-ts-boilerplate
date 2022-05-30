import styled from 'styled-components';

import { IProps } from './form-input';
import { IProps as IErrorProps } from './error';

export const FormInputWrapper = styled.div<Partial<IProps>>`
	margin: ${({ margin }) => margin || '0 0 25px'};
	padding: ${({ padding }) => padding || '0'};
	display: flex;
	flex-direction: column;
	position: relative;
	flex-wrap: wrap;
	align-items: stretch;
	flex: 1 1 auto;
`;

export const ErrorWrapper = styled.div<IErrorProps>`
	transition: min-height 0.1s, opacity 0.2s;
	padding: ${({ inForm }) => (inForm ? '0 28px' : '0 6px')};
	margin: ${({ text, margin }) => (text ? margin || '8px 0' : '0')};
	min-height: ${({ text }) => (text ? '25px' : '0')};
	display: flex;
	align-items: center;
	position: relative;
	flex-wrap: wrap;
	align-items: stretch;
	flex: 1 1 auto;
	justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
	opacity: ${({ text }) => (text ? '1' : '0')};
`;

export const ErrorText = styled.div<IErrorProps>`
	color: #f44336;
	transition: all 0.2s;
	letter-spacing: 0.5px;
	font-size: ${({ inForm }) => (inForm ? '13px' : '14px')};
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: ${props => (props.multiline ? 'unset' : 'nowrap')};
	opacity: ${props => (props.text ? '1' : '0')};
	text-align: ${props => (props.center ? 'center' : 'left')};
`;
