import * as dateFns from 'date-fns';

export const PreCall = ({beganWork, calltime}) => {
    
    const durationAtWork = dateFns.intervalToDuration({start: beganWork, end: calltime})
    return <p>Calltime was at {dateFns.format(calltime, "HH:mm:ss")} on {dateFns.format(calltime, "dd-MM-yyyy")} 
     and you began working at {dateFns.format(beganWork, "HH:mm:ss")} and so you would be owed {dateFns.formatDuration(durationAtWork)} of overtime.</p>
}