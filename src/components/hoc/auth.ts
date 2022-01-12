import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import { IRootStore } from '@/store/ducks/root-reducer';
import LoadingLarge from '@/components/shared/loading-large';

const locationHelper = locationHelperBuilder({});

// USER
const userIsAuthenticatedDefaults = {
	authenticatedSelector: (state: IRootStore) => state.user.userInfo !== null,
	authenticatingSelector: (state: IRootStore) => state.user.loading,
	wrapperDisplayName: 'UserIsAuthenticated'
};

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults);

export const isAuthRedir = connectedRouterRedirect({
	...userIsAuthenticatedDefaults,
	AuthenticatingComponent: LoadingLarge,
	redirectPath: '/login'
});

const userIsNotAuthenticatedDefaults = {
	authenticatedSelector: (state: IRootStore) => state.user.userInfo === null,
	authenticatingSelector: (state: IRootStore) => state.user.loading,
	wrapperDisplayName: 'UserIsNotAuthenticated'
};

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults);

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
	...userIsNotAuthenticatedDefaults,
	redirectPath: (_state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
	allowRedirectBack: false
});
