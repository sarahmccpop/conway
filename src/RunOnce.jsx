import { useState} from 'react'
import './RunOnce.css';

export const UseBigRedButton = ({initCount}) => {
    const [stateOfWorld, setPressedButton] = useState(initCount);

    const pressedBigRed = () => {
        let counter = initCount;
        if (counter === 0){
            counter++  
            console.log("Counter is :", counter)
            setPressedButton(counter);
            youPressedIt();
            console.log("You pressed it");
                } else {
            console.log("end of world")
            setPressedButton(counter);
            worldHasEnded();
            
        }
    }
    
    const youPressedIt = () =>{
        return <div>
            <p>BOOM</p>
        </div>
    }

    const worldHasEnded = () => {
        return <div id='gameOver'>
            <p>
                WORLD DESTROYED
            </p>
        </div>
    }


    return {
        stateOfWorld,
        setPressedButton,
        pressedBigRed,
        worldHasEnded,
        youPressedIt
    } 

}

export const WarningMessage = () => {
    return <div>
        <p>This is the nuclear option</p>
        <p>It can only happen once</p>
        <p>Choose wisely</p>
        
    </div>
}
