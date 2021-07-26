//SETTEXTFILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//SETSORTBYFILTER
export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORTBY_DATE'
});

//SETSTARTDATE
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//SETENDDATE
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});
