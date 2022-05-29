import { createContext, useEffect, useState, useMemo } from 'react';

import { FC } from '@/types';

export const ViewportContext = createContext({
	width: 0,
	height: 0,
	isMobile: false,
	isSmallLaptop: false,
	isLaptop: false
});

export const ViewportProvider: FC = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const isMobile = width <= 768;
	const isSmallLaptop = width <= 1024;
	const isLaptop = width <= 1440;

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	const context = useMemo(() => ({ width, height, isMobile, isSmallLaptop, isLaptop }), [width, height]);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return <ViewportContext.Provider value={context}>{children}</ViewportContext.Provider>;
};
