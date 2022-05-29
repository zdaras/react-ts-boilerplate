import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@/router/app';
import { store } from '@/store';
import { appActions } from '@/store/ducks/app';
import '@/services/locale/i18n';

store.dispatch<any>(appActions.initApp());

const Index = ({ store: st }: any) => (
	<Provider store={st}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

export default Index;
