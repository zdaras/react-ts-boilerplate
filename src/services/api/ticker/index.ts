import { BtcUsdSchema } from '@/types/models/ticker';
import { decode } from '@/utils/io-ts';

import { get } from '../axios';

export default {
	getBtcUsdTicker: () => get('btc-usd').then(decode(BtcUsdSchema))
};
