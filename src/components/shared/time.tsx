import React, { FC, memo } from 'react';

import { IDate, IFormat, formatDate, defaultDateFormat } from '@/utils/date';

export const Time: FC<IProps> = ({ date, format }) => <time>{formatDate(date, format)}</time>;

interface IProps {
	date?: IDate | null;
	format?: IFormat;
}

Time.defaultProps = {
	format: defaultDateFormat
} as Partial<IProps>;

export default memo(Time);
