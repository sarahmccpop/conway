// write a component called employee data
import {useState, useEffect} from 'react';

export function useEmployeeData(){
    const [inputtedText, setInputtedText] = useState("")
    const [isLoaded, setIsLoaded] = useState(true)
    const [userInfo, setUserInfo] = useState(null)
    const [error, setError] = useState(null)


    const handleChange = (event) => {
        const newText = event.target.value
        setInputtedText(newText);
    }

    const handleGetEmployeeData = () => {
        console.log("clicked button. Will try to get data from", url);
        setUserInfo(null)
        setIsLoaded(false);
    }

    useEffect(() => {

        if (isLoaded === true) {
            console.log("fetch is complete, nothing to do")
            return null
        }

        fetch(url)
        .then(response => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setUserInfo(result);
                setError(null)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        },[isLoaded]
    )



    //const url = "http://127.0.0.1:5000/user/" + inputtedText
    const url = `http://127.0.0.1:5000/user/${inputtedText}`

    return {
        userInfo,
        error,
        inputtedText,
        handleChange,
        handleGetEmployeeData
    }
}


export function EmployeeData(props){

    // This code means, I'm expecting props to be an object, 
    // with the least handleChange and InputtedText in it
    // {
    //    foo: 10,
    //    bar: "horse",
    //    handleChange: aFunction,
    //    inputtedText: "some text"
    // }
    // and I'm pulling out just the two values 
    // handleChange and InputtedText as variables
    const {handleChange, inputtedText, handleGetEmployeeData, userInfo, error} = props;

    return <div>
        <input type="text" value={inputtedText} onChange={handleChange}></input>
        <button onClick={handleGetEmployeeData}>Get employee data</button>
        { userInfo ? <UserInfo userInfo={userInfo} /> : null}
    </div>
}

function UserInfo(props){
    return <ul>
        {
            Object.entries(props.userInfo).map(
                ([key, value]) => {
                    return <li key={key}>{key}: {value}</li>
                }
            )
        }
    </ul>
}

/*

A bunch of ways to declare the doubling function, and to then 'map' it over the array.

const myArray = [1,2,3,4]

function double(x){
    return x*2
}

myArray.map(double)   // [2,4,6,8]

myArray.map(x => x*2)

myArray.map((x) => {
    return x*2
})

const doubleFunc = x => {
    return x * 2
}

myArray.map(doubleFunc)
*/