import * as dateFns from 'date-fns';
import { useState } from 'react';
import React from 'react';


export const TimeSince = ({thingThatHappened, timeItHappened}) => {

    const now = Date.now();
	const timeSince = dateFns.intervalToDuration({start: timeItHappened, end: now})

    return <p>{thingThatHappened} happened at {dateFns.format(timeItHappened, "yyyy-MM-dd")} at {dateFns.format(timeItHappened, "HH:mm:ss")}. That's {dateFns.formatDuration(timeSince)} ago.</p>
}



export const DumbMessageProps = (props) => {

    const {a, b, c} = {a:1, b:2, c:3}

    const [x, y, z] = ["foo", "bar", "baz"]

   // const [counter, setCounter] = useState(0)

    return <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
}

export const DumbMessageUnpacking = (props) => {

    const {title, body} = props

    return <div>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
}

export const DumbMessage = ({title, body}) => {

    const runOnce = (f) => {
        let counter = 0

        function runner(){
            if(counter === 0){
                f()
                counter += 1
            }else{
                console.log("you've already run me")
            }
        }

        return runner
    }

    function scream() {
        console.log("AAAH!")
    }

    const screamOnce = runOnce(scream)

    screamOnce()

    screamOnce()
    screamOnce()

    return <div>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
}