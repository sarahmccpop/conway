import * as dateFns from "date-fns";
// importing component names from files
import { TimeSince, DumbMessage } from "./DateTime/TimeSince";
import { NameAge } from "./NameAge";
import { PreCall } from "./DateTime/OT";
import {
  useClickeyButton,
  ClickeyButton,
  PrettyClickeyButton,
} from "./ClickeyButton/ClickeyButton";
import {
  useBigRedButton as useBigRedButton,
  WarningMessage,
} from "./RunOnce/RunOnce";
import { randomBoard, iterate, useConway, Conway } from "./Conway/Conway";
import { EmployeeData, useEmployeeData } from "./EmployeeData";

// importing css for App.js (css for components is imported in components files)
import "./App.css";

// in here are the vars that will be rendered in return section
function App() {
  // FIRST ELEMENT at top of screen nuclear option - Warning & Button all within this
  const bigRed = useBigRedButton({ initCount: 0 });

  // SECOND ELEMENT in console and on screen - Conway
  // console.log("randomBoard", randomBoard(4, 3))
  // declaring a label firstBoard and assigning it the value as the result of the function randomBoard which appears in the console
  const firstBoard = randomBoard(3, 4);
  // initial view of firstBoard
  console.log("This is Sarahs random board", firstBoard);
  // once firstBoard has been iterated
  console.log("this is the board of neighbour counts", iterate(firstBoard));

  // this is the section which appears onscreen
  // declaring a label conwayState which is the value of useConway with arguments
  // this is used later to display a table
  // conwayState can access all of the functions in useConway
  const conwayState = useConway(60, 80);

  /* this if statement can be used to change the text on the hide/show button according to what it should do. Can use this but unfashionable now and better to use ternary operator instead which is in the return section
  let revealButtonLabel = '';
  if (conwayState.showConway){
    revealButtonLabel = "Hide";
  } else {
    revealButtonLabel = "Show me";
  }
  */

  // destructuring - this is another way to declare the variable names
  const { board, showConway, toggleShowConway, iterateConway, randomize } =
    useConway(10, 10);

  // THIRD ELEMENT on screen - clicking buttons
  // Declaring different buttons to show object state can be independent, even though using the same functions to assign the state
  const buttonOneState = useClickeyButton({ initCount: 0 });
  const buttonTwoState = useClickeyButton({ initCount: 10 });
  const prettyButtonState = useClickeyButton({ initCount: 1000 }); // misnomer - this button is the big grey box

  // the reset button resets the counters for ALL buttons at present
  const resetAllCounters = () => {
    buttonOneState.resetCounter();
    buttonTwoState.resetCounter();
    prettyButtonState.resetCounter();
  };

  // FOURTH ELEMENT - incredibly basic OT calculation
  const dayStart = new Date(null, null, null, 9, 0, 0);
  const dayEnd = new Date(null, null, null, 18, 0, 0);
  const dayLength = dateFns.intervalToDuration({
    start: dayStart,
    end: dayEnd,
  });
  const lunchHour = new Date(null, null, null, 1, 0, 0);

  // FIFTH ELEMENT - your name is and age is
  // this is directly set in the return code

  // SIXTH ELEMENT - how long since born calculation
  // this is directly set in the return code

  // SEVENTH ELEMENT
  // I am a fish - from Dumb message

  // EIGHTH ELEMENT - time calculations using date-fns
  const stepOnTheMoon = new Date("1969-07-20T20:17:00");
  const now = Date.now();
  const duration = dateFns.intervalToDuration({
    start: stepOnTheMoon,
    end: now,
  });

  const beganAtPop = new Date("2021-10-04T09:00:00");
  const durationAtPop = dateFns.intervalToDuration({
    start: beganAtPop,
    end: now,
  });

  // Random
  // This section shows ways to differing ways to declare objects and assign them values
  const obj = {
    hello: 1,
    world: 2,
  };

  const obj2 = {
    hello: 1,
    world: 2,
  };

  const foo = "fish";
  const bar = 27;

  const obj3 = {
    foo,
    bar,
  };
  // Different ways to log objects values below
  //console.log(obj, obj2, obj3)

  //console.log({foo, bar})

  //console.log("hard to understand", obj, obj2, obj3, foo, bar)

  // console.log("easier to understand", {obj, obj2, obj3, foo, bar})

  const employeeState = useEmployeeData();

  return (
    <div className="App">
      <header className="App-header">
        <EmployeeData {...employeeState}/>
        <WarningMessage {...bigRed} />
  

        <button onClick={conwayState.iterateConway}>iterate conway</button>
        <button onClick={() => console.log(conwayState.board)}>
          log conway
        </button>
        <button onClick={conwayState.randomize}>
          {" "}
          New Random Board of same size
        </button>
        <button onClick={conwayState.toggleShowConway}>
          {conwayState.showConway ? "Hide" : "Show"}
        </button>
        {conwayState.showConway && <Conway {...conwayState} />}


        <ClickeyButton
          label="One"
          clickCounter={buttonOneState.clickCounter}
          incrementCounter={buttonOneState.incrementCounter}
          resetCounter={buttonOneState.resetCounter}
        />
        <ClickeyButton label="Two" {...buttonTwoState} />
        <PrettyClickeyButton {...prettyButtonState} />
        <button onClick={resetAllCounters}>Reset all counters</button>
        <PreCall
          beganWork={new Date(2021, 9, 28, 8, 0, 0)}
          calltime={new Date(2021, 9, 28, 9, 0, 0)}
        />
        <NameAge yourName="Andy" yourAge={37} />
        <TimeSince
          thingThatHappened="Andy was born"
          timeItHappened={new Date(1984, 6, 4, 12, 30)}
        />
        <DumbMessage title="I am a fish" body="this is the message body" />
        <p>
          Neil Armstrong stepped on the moon on{" "}
          {dateFns.format(stepOnTheMoon, "yyyy-MM-dd")} at{" "}
          {dateFns.format(stepOnTheMoon, "HH:mm:ss")}. That's{" "}
          {dateFns.formatDuration(duration)} ago.
        </p>
        <p>
          I began working at POP on {dateFns.format(beganAtPop, "dd-MM-yy")}.
          I've been working at POP for {dateFns.formatDuration(durationAtPop)}.
        </p>
        <p>
          {" "}
          I'm contracted to work from {dateFns.format(
            dayStart,
            "HH:mm"
          )} to {dateFns.format(dayEnd, "HH:mm")} every day, that's{" "}
          {dateFns.formatDuration(dayLength)} hours a day. I get{" "}
          {dateFns.format(lunchHour, "HH:mm")} hour for lunch{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
