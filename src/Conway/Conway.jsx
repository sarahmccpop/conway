import {useState} from 'react';
import './Conway.css';

// assigning a random value to be used in a cell on the board
const randomCell = () => {
    return Math.random() < 0.5 ? 0 : 1
}

// this function creates a random board with a specified number of columns and rows
// note cols is actually rows and rows is actually columns 
export const randomBoard = (cols, rows) => {
    // creating an array newBoard which is empty
    const newBoard = []
    // nested for loop to assign value to the cells in the 2D array
    for(var rowNum = 0; rowNum < rows; rowNum++){
        // creating a new empty array newRow
        const newRow = []
        for(var colNum = 0; colNum < cols; colNum++){
            // pushing the value of random cell into each column of newRow
            newRow.push(randomCell())
        }
        // adding newRow to newBoard
        newBoard.push(newRow)
    }
    // this new board is full of zeroes
    return newBoard
}

// this function "counts" the number of dead or alive cells surrounding it 
export const neighbourCount = (rowNum, colNum, board) => {
    // board
    // currentCell's state = board[rowNum][colNum]
    let count = 0 // number of alive neighbours (because an alive neighbours has value of 1 and a dead one is 0, so will add nothing to the total) 
    

    // these booleans return true or false as to whether at a boards edge or not 
    const onTheFarRight = Boolean(colNum+1 >= board[rowNum].length)
    const onTheFarLeft = Boolean(colNum < 1)
    const onTheTop = rowNum < 1
    const onTheBottom = rowNum+1 >= board.length

    // if there is column to the right of the centre square do...
    if (onTheFarRight !== true) {
        let squareToRight = board[rowNum][colNum+1]
        count += squareToRight;

        if(onTheTop !== true){
            const squareAboveRight = board[rowNum-1][colNum+1]
            count += squareAboveRight
        }
        if(onTheBottom !== true){
            const squareBelowRight = board[rowNum+1][colNum+1]
            count += squareBelowRight
        }
    }
     // if there is column to the left of the centre square do...
    if (onTheFarLeft !== true) {
        let squareToLeft = board[rowNum][colNum-1]
        count += squareToLeft;

        if(onTheTop !== true){
            const squareAboveLeft = board[rowNum-1][colNum-1]
            count += squareAboveLeft
        }
        if(onTheBottom !== true){
            const squareBelowLeft = board[rowNum+1][colNum-1]
            count += squareBelowLeft
        }
    }
    // if there is a row above the centre square do...
    if(!onTheTop){
        const squareAbove = board[rowNum-1][colNum]
        count += squareAbove
    }
    // if there is a row below the centre square do...
    if(!onTheBottom){
        const squareBelow = board[rowNum+1][colNum]
        count += squareBelow
    }
    
    // the total value of count is returned which is the number of 'alive' squares surrounding the square
    return count
}

// this function updates the current state depending on the value of count 
export const countToState = (count, currentState) => {
        let updatedState; // creating a new variable updatedState
        if (count === 2) {
            updatedState = currentState // if count is 2, the situation remains the same
        } else if (count === 3) {
            updatedState = 1; // if there are 3 live squares touching the square, it is set as alive
        } else {
            updatedState = 0; // in any other circumstance the cell is switched to dead 
        }
        return updatedState;
}

// this function loops through every cell on the board and calls the functions to set states
export const iterate = (board) => {
    const nextBoard = []
    for (var rowNum = 0; rowNum < board.length; rowNum++){
        const nextBoardNewRow = []
        for (var colNum = 0; colNum < board[rowNum].length; colNum++){

            const count = neighbourCount(rowNum, colNum, board)
            const currentState = board[rowNum][colNum]
            const nextState = countToState(count, currentState);
            nextBoardNewRow.push(nextState)
        }
        nextBoard.push(nextBoardNewRow)
    }

    return nextBoard;
}

// getters and setters function, assigning state to 'remember' the state of the board 
export const useConway = (rows, cols) => {
    // using function randomBoard to generate a random board with the specified numbers of cols and rows and giving it state
    const [board, setBoard] = useState(randomBoard(cols, rows))
    const [showConway, setShowConway] = useState(true)
    const toggleShowConway = () => {
        setShowConway(!showConway)
        console.log("State of showConway:" + showConway)
    }

    // updating the state by iterating a new board and assigning it to the label newBoard, newBoard is then used to set a new state
    const iterateConway = () => {
        const newBoard = iterate(board)
        setBoard(newBoard)
    }

    // used this function to add a button to load a random new board
    const randomize = () => {
        const newBoard = randomBoard(cols, rows)
        setBoard(newBoard)
    }

    return {
        board,
        showConway,
        toggleShowConway,
        iterateConway,
        randomize,
    }
}

//The map() function creates a new array populated with the results of calling a provided function on every element in the calling array.     
const rowToCells = (row) => {
    return row.map(
        (cell, cellNum) => {
            return <td key={cellNum} className={cell ? "alive" : "dead"}></td>
        }
    )
}


// this function takes a board as a parameter and contains another function which maps the board to a table appearing on screen
export const Conway = ({board}) => {

    

    const tableRows = board.map((row, rowNum) => {
        return <tr key={rowNum}>
            {rowToCells(row)}
        </tr>
    })

    return <div>
        <table>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </div>
}
