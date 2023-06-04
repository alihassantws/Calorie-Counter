import dayjs from 'dayjs'

export const getDateNow = () => {
    return dayjs().toString();
}

export const isFirstVisitToday = ({ storeDate, currentDate }) => {
    if (!storeDate) {
        return true
    }
    const date1 = dayjs(storeDate).startOf('day');
    const date2 = dayjs(currentDate).startOf('day');

    const dateDiff = date1.diff(date2, 'day');
    if (dateDiff === -1) {
        return true
    }
    else {
        return false
    }
}
