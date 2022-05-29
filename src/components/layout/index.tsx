import Container from '@/components/library/container';
import Header from '@/components/header';
import { WrapperStyled, Container as MainContainer } from '@/styled/shared';
import { FC } from '@/types';

export const BlankLayout: FC = ({ children }) => <Container>{children}</Container>;

export const MainLayout: FC = ({ children }) => (
	<Container>
		<MainContainer>
			<Header />
		</MainContainer>
		<WrapperStyled>{children}</WrapperStyled>
	</Container>
);
