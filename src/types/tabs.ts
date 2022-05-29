import { ReactNode } from 'react';

export type IPanel = {
	children: ReactNode | JSX.Element;
	title?: string;
	props?: {
		title: string;
	};
} | null;

export interface ITab {
	selected?: number;
	children: IPanel[];
}
