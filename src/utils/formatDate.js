const leadZero = number => number < 10 ? `0${number}` : number;

export const formatDate = jsDate => {
	const month = jsDate.getMonth() + 1;
	const day = jsDate.getDate();
	const year = jsDate.getFullYear();
	return `${leadZero(day)}.${leadZero(month)}.${year}`;
};

