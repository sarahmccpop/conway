import { useState} from 'react'

export const useNameAge = ({initAge, initName}) => {
    const [value, setValue] = useState({
        "name": initName,
        "age": initAge,
    })

    const updateName = (newName) => {


        
        const newValue = {
            "name": newName,
            "age": value.age,
        }

        setValue(newValue)

    }

    return {
        value,
        updateName,
    }
}

export const NameAge = ({yourName, yourAge}) => {
    return <p>Your name is {yourName} and your age is {yourAge}</p>
}


export const useNumbersList = (initNumbers) => {
    // immutability 
    const [numbers, setNumbers] = useState(initNumbers)

    const appendNumber = (newNumber) => {
        const newNumbers = []

        for(var i = 0; i < numbers.length; i++){
            const oldNumber = numbers[i]
            newNumbers.push(oldNumber)
        }

        newNumbers.push(newNumber)

        setNumbers(newNumbers)

    }

    const appendNumberWithMap = (newNumber) => {
        const newNumbers = numbers.map((item, i) => item)
        newNumbers.append(newNumber)
        setNumbers(newNumbers)
    }

    const appendNumberWithFancyReactSyntax = (newNumber) => {

        const newNumbers = [...numbers, newNumber]

        setNumbers(newNumbers)
        
        //setNumbers([...numbers, newNumber])
    }


    return {
        numbers,
        setNumbers,
        appendNumber,
        appendNumberWithMap,
        appendNumberWithFancyReactSyntax,
    }
}