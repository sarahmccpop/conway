import * as dateFns from 'date-fns';
import { TimeSince, DumbMessage } from './TimeSince';
import {NameAge} from './NameAge';
import {PreCall} from './OT';

import './App.css';
import { useClickeyButton, ClickeyButton, PrettyClickeyButton } from './ClickeyButton';
import {UseBigRedButton, RunOnceBigRedButton} from './RunOnce';
import {randomBoard, iterate, useConway, Conway} from "./Conway"

function App() {
  const stepOnTheMoon = new Date('1969-07-20T20:17:00');
	const now = Date.now();
  const duration = dateFns.intervalToDuration({start: stepOnTheMoon, end: now})
	
	
	const beganAtPop = new Date('2021-10-04T09:00:00');
	const durationAtPop = dateFns.intervalToDuration({start: beganAtPop, end: now})
	
	const dayStart = new Date(null, null, null, 9, 0, 0);
	const dayEnd = new Date(null, null, null, 18, 0, 0);
	const dayLength = dateFns.intervalToDuration({start: dayStart, end: dayEnd})
	const lunchHour = new Date(null, null, null,  1, 0, 0);

  console.log("randomBoard", randomBoard(4, 3))
  
  const firstBoard = randomBoard(3,4)
  console.log("This is Sarahs random board", firstBoard);
  console.log("this is the board of neighbour counts", iterate(firstBoard));

  const conwayState = useConway(60, 80)

  

  const obj = {
    "hello": 1,
    "world": 2,
  }

  const obj2 = {
    hello: 1,
    world: 2
  }

  const foo = "fish"
  const bar = 27

  const obj3 = {
    foo,
    bar,
  }

  //console.log(obj, obj2, obj3)

  //console.log({foo, bar})

  //console.log("hard to understand", obj, obj2, obj3, foo, bar)

 // console.log("easier to understand", {obj, obj2, obj3, foo, bar})

  const buttonOneState = useClickeyButton({initCount: 0})
  const buttonTwoState = useClickeyButton({initCount: 10})
  const prettyButtonState = useClickeyButton({initCount: 1000})

  const resetAllCounters = () => {
    buttonOneState.resetCounter()
    buttonTwoState.resetCounter()
    prettyButtonState.resetCounter()
  }
  
  


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={conwayState.iterateConway}>iterate conway</button>
        <button onClick={() => console.log(conwayState.board)}>log conway</button>
        <Conway board={conwayState.board}/>
        <ClickeyButton 
          label="One" 
          clickCounter={buttonOneState.clickCounter} 
          incrementCounter={buttonOneState.incrementCounter} 
          resetCounter={buttonOneState.resetCounter} 
        />
        <ClickeyButton 
          label="Two" 
          {...buttonTwoState}
        />
        <PrettyClickeyButton {...prettyButtonState} />
        <button onClick={resetAllCounters}>Reset all counters</button>
        <PreCall beganWork={new Date(2021, 9, 28, 8, 0, 0)} calltime={new Date(2021, 9, 28, 9, 0, 0 )}/>
        <NameAge yourName="Andy" yourAge={37}/>  
        <TimeSince thingThatHappened="Andy was born" timeItHappened={new Date(1984, 6, 4, 12, 30)} />
        <DumbMessage title="I am a fish" body="this is the message body" />
        <p>Neil Armstrong stepped on the moon on {dateFns.format(stepOnTheMoon, "yyyy-MM-dd")} at {dateFns.format(stepOnTheMoon, "HH:mm:ss")}. That's {dateFns.formatDuration(duration)} ago.</p>
        <p>I began working at POP on {dateFns.format(beganAtPop, "dd-MM-yy")}. I've been working at POP for {dateFns.formatDuration(durationAtPop)}.</p>		       
        <p> I'm contracted to work from {dateFns.format(dayStart, "HH:mm")} to {dateFns.format(dayEnd, "HH:mm")} every day, that's {dateFns.formatDuration(dayLength)} hours a day. I get {dateFns.format(lunchHour, "HH:mm")} hour for lunch </p>
       
    </header>
    </div>
  );
}
// was on line 85 put it back  <Conway {...conwayState} />
export default App;
