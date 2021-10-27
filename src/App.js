import logo from './logo.svg';
import * as dateFns from 'date-fns';
import './App.css';

function App() {
        const stepOnTheMoon = new Date('1969-07-20T20:17:00');
	const now = Date.now();
	const duration = dateFns.intervalToDuration({start: stepOnTheMoon, end: now})
	
	const dayStart = new Date(null, null, null, 9, 0, 0);
	const dayEnd = new Date(null, null, null, 18, 0, 0);
	const dayLength = dateFns.intervalToDuration({start: dayStart, end: dayEnd})
	const lunchHour = new Date(null, null, null,  1, 0, 0);
  return (
    <div className="App">
      <header className="App-header">
      <p>Neil Armstrong stepped on the moon on {dateFns.format(stepOnTheMoon, "yyyy-MM-dd")} at {dateFns.format(stepOnTheMoon, "HH:mm:ss")}. That's {dateFns.formatDuration(duration)} ago.</p>
        <p> I'm contracted to work from {dateFns.format(dayStart, "HH:mm")} to {dateFns.format(dayEnd, "HH:mm")} every day, that's {dateFns.formatDuration(dayLength)} hours a day.
	 I get {dateFns.format(lunchHour, "HH:mm")} hour for lunch </p>
    </header>
    </div>
  );
}

export default App;
