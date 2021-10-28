import * as dateFns from 'date-fns';
import milliseconds from 'date-fns/milliseconds';

export const PreCall = ({beganWork, unpaidPreCallAllowance, callTime}) => {
    const minutesOfPayablePrecallOT = callTime - beganWork;
    return millisecondsToMinutes(minutesOfPayablePrecallOT);
}

function millisecondsToMinutes(milliseconds){
    return milliseconds / 60000;
}