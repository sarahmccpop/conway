// relevant reading https://reactjs.org/docs/hooks-overview.html

// always remember to import useState from react to access it 
import { useState} from 'react'
import './ClickeyButton.css'



// custom hook -reusable state
// Hooks are functions that let you “hook into” React state and lifecycle features from function components
export const useClickeyButton = ({initCount}) => {
    // declaring a new state variable called clickCounter
    // and setClickCount to assign an updated value to it
    const [clickCounter, setClickCounter] = useState(initCount);

    // this function 
    const handleClicked = () => console.log("click!")

    const incrementCounter = () => {
        setClickCounter(clickCounter+1);  
    }

    const resetCounter = () => {
        setClickCounter(initCount);
    }

    return {
        clickCounter,
        setClickCounter,
        handleClicked,
        incrementCounter,
        resetCounter,
    }
}

// component - reusable rendering
export const ClickeyButton = ({label, clickCounter, incrementCounter, resetCounter}) => {
    
    return <div>
        <p>I am button {label}</p>
        <p>You have clicked the button {clickCounter} times</p>
        <button onClick={incrementCounter} >Click me</button>
        <button onClick={resetCounter}>Reset button</button>
        </div>
}

export const PrettyClickeyButton= ({clickCounter, incrementCounter}) => {

    return <div className="pretty">
        <h1 onClick={incrementCounter}>INCREASE THE COUNT</h1>
        <ol>
            <li>{clickCounter}</li>
            <li>{clickCounter}</li>
            <li>{clickCounter}</li>
            <li>{clickCounter}</li>
        </ol>
    </div>
}
/*
export const ClickeyButton = ({label, initCount=0}) => {

    const [clickCounter, setClickCounter] = useState(initCount);

    const handleClicked = () => console.log("click!")

    const incrementCounter = () => {
        setClickCounter(clickCounter+1);  
    }

    const resetCounter = () => {
        setClickCounter(initCount);
    }

    return <div>
        <p>I am button {label}</p>
        <p>You have clicked the button {clickCounter} times</p>
        <button onClick={incrementCounter} >Click me</button>
        <button onClick={resetCounter}>Reset button</button>
        </div>
}

*/