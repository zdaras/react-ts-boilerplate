import { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Select, { SelectItem } from '@/components/library/select';
import Button from '@/components/library/button';
import { Link } from '@/components/library/link';
import { LogoutIcon } from '@/components/icons';
import { appSelectors, appActions } from '@/store/ducks/app';
import { userActions, userSelectors } from '@/store/ducks/user';
import useActions from '@/hooks/useActions';

import { HeaderStyled, HeaderLeftMenu, UserIconStyled } from './header-styled';

const UserIcon = () => (
	<UserIconStyled>
		<img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="user" width="50px" />
	</UserIconStyled>
);

export const Header: FC = () => {
	const { t, i18n } = useTranslation();
	const theme = useSelector(appSelectors.theme);
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);
	const themeSwitch = useActions(appActions.themeSwitchAction);
	const logout = useActions(userActions.logout);

	const changeTheme = () => {
		const themeToSwitch = theme === 'light' ? 'dark' : 'light';
		themeSwitch(themeToSwitch);
	};

	return (
		<HeaderStyled>
			<HeaderLeftMenu>
				<Button buttonType="text" inline onClick={changeTheme}>
					{t('DARK MODE')}
				</Button>
				<Button
					buttonType="text"
					inline
					active={i18n.language === 'en-US'}
					onClick={() => i18n.changeLanguage('en-US')}
				>
					EN
				</Button>
				<Button buttonType="text" inline active={i18n.language === 'ka'} onClick={() => i18n.changeLanguage('ka')}>
					KA
				</Button>
			</HeaderLeftMenu>
			{isLoggedIn ? (
				<Select Trigger={UserIcon} padding="0" dropdownType="dropdown" borderless>
					<SelectItem active onClick={logout}>
						<span style={{ display: 'flex', alignItems: 'center' }}>
							<span style={{ marginRight: '12px' }}>{t('Logout')}</span>
							<LogoutIcon />
						</span>
					</SelectItem>
				</Select>
			) : (
				<Link to="/login">
					<Button inline buttonType="text" text="Login" />
				</Link>
			)}
		</HeaderStyled>
	);
};

export default memo(Header);
