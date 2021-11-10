import { useState} from 'react'
import './RunOnce.css';

export const useBigRedButton = ({initCount}) => {
    const [stateOfWorld, setPressedButton] = useState(initCount);
    let message = "";
    const [messageToWorld, setMessageToWorld] = useState(message);
    
    const pressedBigRed = () => {
      
        let counter = initCount;
        if (counter === 0){
            counter++  
            console.log("Counter is :", counter)
            setPressedButton(counter);
            setMessageToWorld("BOOM!!!!");
                } else {
            console.log("end of world")
            setMessageToWorld("you can only destroy the world once");        
        }
    }


    

    return {
        stateOfWorld,
        setPressedButton,
        pressedBigRed,
        messageToWorld
    } 

}

export const WarningMessage = ({messageToWorld, pressedBigRed}) => {
    return <div>
        <p>This is the nuclear option</p>
        <p>It can only happen once</p>
        <p>Choose wisely</p>
        <button onClick={pressedBigRed} id='bigReadButton'>BIG RED BUTTON</button>
        <p id='gameOver'>{messageToWorld}</p>
        
    </div>
}
