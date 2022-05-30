import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { userSelectors } from '@/store/ducks/user';
import LoadingLarge from '@/components/shared/loading-large';
import { FC } from '@/types';

const PrivateRoute: FC = ({ children }) => {
	const location = useLocation();
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);
	const loading = useSelector(userSelectors.loading);

	if (loading) return <LoadingLarge loading={loading} />;

	if (!isLoggedIn && !loading) return <Navigate replace to="/login" state={{ from: location }} />;

	return <>{children}</>;
};

export default PrivateRoute;
