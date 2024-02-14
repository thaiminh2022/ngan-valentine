import moment from "moment";

const now = moment(new Date())
const loveData = moment(new Date(2022, 10, 20))

const diffDays = now.diff(loveData, "days");


export function GetFull() {
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays - years * 365) / 30)
    const days = diffDays - years * 365 - months * 30;

    return {
        years, months, days
    }
}

export function GetDiff(diffType: moment.unitOfTime.Diff) {
    return now.diff(loveData, diffType);
}


