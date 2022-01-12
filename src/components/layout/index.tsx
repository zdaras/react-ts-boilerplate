import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import Container from '@/components/library/container';
import Header from '@/components/header';
import { WrapperStyled, Container as MainContainer } from '@/styled/shared';

export const BlankLayout: FC = ({ children }) => <Container>{children}</Container>;

export const MainLayout: FC = ({ children }) => (
	<Container>
		<MainContainer>
			<Header />
		</MainContainer>
		<WrapperStyled>{children}</WrapperStyled>
	</Container>
);

export const AppRoute = ({ Component, Layout, ...rest }: IAppRoute) => (
	<Route
		{...rest}
		render={props => (
			<Layout>
				<Component {...props} />
			</Layout>
		)}
	/>
);

interface IAppRoute {
	Component: FC<RouteComponentProps>;
	Layout: FC;
	[key: string]: any;
}
