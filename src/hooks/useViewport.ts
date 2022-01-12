import React from 'react';

import { ViewportContext } from '@/context/viewport';

const useViewport = () => {
	const viewPort = React.useContext(ViewportContext);
	return viewPort;
};

export default useViewport;
