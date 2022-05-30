import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userSelectors } from '@/store/ducks/user';
import LoadingLarge from '@/components/shared/loading-large';
import { FC } from '@/types';

const UserIsNotAuth: FC = ({ children }) => {
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);
	const loading = useSelector(userSelectors.loading);

	if (loading) return <LoadingLarge loading={loading} />;

	if (isLoggedIn && !loading) return <Navigate to="/" />;

	return <>{children}</>;
};

export default UserIsNotAuth;
