import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { CloseSmallIcon } from '@/components/icons';
import { Link } from '@/components/library/link';
import useActions from '@/hooks/useActions';
import app, { appSelectors } from '@/store/ducks/app';

import { TopAlertContainer, TopAlertStyled, AlertIcon } from './styled';

export const TopAlert = () => {
	const { t } = useTranslation();
	const alerts = useSelector(appSelectors.alerts);
	const hideAlert = useActions(app.actions.hideAlert);
	const showAlerts = alerts.length > 0;

	const close = (a: any) => {
		hideAlert(a);
		if (typeof a.onClose === 'function') a.onClose();
	};

	if (!showAlerts) return null;

	return (
		<TopAlertContainer>
			{alerts.map(a => (
				<TopAlertStyled key={a.id}>
					{a.to ? <Link to={a.to}>{t(a.text || '')}</Link> : <span>{t(a.text || '')}</span>}
					<AlertIcon onClick={() => close(a)}>
						<CloseSmallIcon />
					</AlertIcon>
				</TopAlertStyled>
			))}
		</TopAlertContainer>
	);
};

export default memo(TopAlert);
