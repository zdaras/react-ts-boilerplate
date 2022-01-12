import styled from 'styled-components';

import { ITask } from '@/types/models';

export const BoardContainer = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	position: relative;
	padding: 30px 2% 0;
`;

export const BoardTopPanel = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;
`;

export const ColumnsContainer = styled.div`
	display: flex;
	max-width: 100%;
	width: 100%;
	overflow-x: auto;
	overflow-y: hidden;
	position: relative;
`;

export const ColumnWrapper = styled.div`
	position: relative;
`;

export const ColumnStyled = styled.div`
	padding: 10px;
	height: max-content;
	width: 300px;
	flex: 0 0 300px;
	position: relative;
	background-color: #efefef;
	border-radius: 2px;
	overflow-y: auto;
	overflow-x: hidden;
	max-height: calc(100vh - 114px - 30px - 50px); // - header - board padding - board top panel

	:not(:last-child) {
		margin-right: 15px;
	}
`;

export const ColumnAddButton = styled.div`
	height: 40px;
	background-color: #efefef;
`;

export const TaskStyled = styled.div`
	padding: 10px 12px;
	background-color: #fffbfb;
	border-radius: 10px;
	min-height: 60px;
	cursor: pointer;
	color: #04051f;

	:not(:last-child) {
		margin-bottom: 15px;
	}

	:hover {
		background-color: #f9f9f9;
	}
`;

export const TaskTitle = styled.div`
	margin-bottom: 14px;
`;

export const TaskPriority = styled.small<{ priority: ITask['priority'] }>`
	padding: 3px 12px;
	border-radius: 8px;

	background-color: ${({ priority }) => {
		switch (priority) {
			case 'low':
				return '#efefef';
			case 'medium':
				return '#fff3c9';
			case 'high':
				return '#ffb3b3';
			default:
				return '#efefef';
		}
	}};
`;
