export const generatePageRange = (currentPage: number, size: number, limit: number) => {
	if (limit >= size) return null;
	const pageCount = Math.ceil(size / limit);
	if (typeof pageCount !== 'number' || Number.isNaN(pageCount)) return null;

	const lastPage = pageCount;
	let delta = 1;
	if (currentPage === 1 || currentPage === lastPage) delta = 3;
	if (currentPage === 2 || currentPage === lastPage - 1) delta = 2;

	const range = [];
	for (let i = Math.max(2, currentPage - delta); i <= Math.min(lastPage - 1, currentPage + delta); i += 1) {
		range.push(i);
	}

	if (currentPage - delta > 2) {
		range.unshift('...');
	}
	if (currentPage + delta < lastPage - 1) {
		range.push('...');
	}

	range.unshift(1);
	if (lastPage !== 1) range.push(lastPage);

	return range;
};

export const paginateParams = { limit: 10, startPage: 1 };
