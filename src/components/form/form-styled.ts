import styled from 'styled-components';

import { IProps } from './form-input';

export const FormInputWrapper = styled.div<Partial<IProps>>`
	margin: ${props => (props.margin ? props.margin : props.showErrorText ? '0' : '0 0 25px')};
	padding: ${props => props.padding || '0'};
	display: flex;
	flex-direction: column;
	position: relative;
	flex-wrap: wrap;
	align-items: stretch;
	flex: 1 1 auto;
`;

export const ErrorWrapper = styled.div<{ center?: boolean; margin?: string; inForm?: boolean }>`
	padding: ${props => (props.inForm ? '3px 28px' : '0 6px')};
	margin: ${props => props.margin || '0'};
	min-height: 26px;
	display: flex;
	position: relative;
	flex-wrap: wrap;
	align-items: stretch;
	flex: 1 1 auto;
	justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;

export const ErrorText = styled.div<{ text?: string; center?: boolean; multiline?: boolean }>`
	color: #f44336;
	transition: all 0.2s;
	letter-spacing: 0.5px;
	font-size: 14px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: ${props => (props.multiline ? 'unset' : 'nowrap')};
	opacity: ${props => (props.text ? '1' : '0')};
	text-align: ${props => (props.center ? 'center' : 'left')};
`;
