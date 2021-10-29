import { useState} from 'react'


export const UseBigRedButton = ({initCount}) => {
    const [pressButton, setPressedButton] = useState(initCount);

    const pressedBigRed = () => {
        let counter = initCount;
        if (counter === 0){
            setPressedButton(counter);
            counter++  
        } else {
        }
       

    }
    return { 
        pressButton,
        setPressedButton,
        pressedBigRed
    } 
    



}



export const RunOnceBigRedButton = ({pressedBigRed}) => {
    return <div>
        <p>This is the nuclear option</p>
        <p>It can only happen once</p>
        <p>Choose wisely</p>
        <button onClick={pressedBigRed} >Big Red Button</button>
    </div>
}
