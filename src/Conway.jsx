import {useState} from 'react';
import './Conway.css';

const randomCell = () => {
    return Math.random() < 0.5 ? 0 : 1
}

export const randomBoard = (cols, rows) => {
    const newBoard = []
    for(var rowNum = 0; rowNum < rows; rowNum++){
        const newRow = []
        for(var colNum = 0; colNum < cols; colNum++){
            newRow.push(randomCell())
        }
        newBoard.push(newRow)
    }
    return newBoard
}

export const neighbourCount = (rowNum, colNum, board) => {
    // board
    // currentCell's state = board[rowNum][colNum]
    let count = 0 // number of 'alive' neighbours
    const onTheFarRight = Boolean(colNum+1 >= board[rowNum].length)
    const onTheFarLeft = Boolean(colNum < 1)
    const onTheTop = rowNum < 1
    const onTheBottom = rowNum+1 >= board.length

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
    
    if(!onTheTop){
        const squareAbove = board[rowNum-1][colNum]
        count += squareAbove
    }

    if(!onTheBottom){
        const squareBelow = board[rowNum+1][colNum]
        count += squareBelow
    }
    
    return count
}

export const countToState = (count, currentState) => {
        let updatedState;
        if (count === 2) {
            updatedState = currentState
        } else if (count === 3) {
            updatedState = 1;
        } else {
            updatedState = 0;
        }
        return updatedState;
}

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


export const useConway = (rows, cols) => {
    const [board, setBoard] = useState(randomBoard(cols, rows))

    const iterateConway = () => {
        const newBoard = iterate(board)
        setBoard(newBoard)
    }

    const randomize = () => {
        const newBoard = randomBoard(cols, rows)
        setBoard(newBoard)
    }

    return {
        board,
        iterateConway,
        randomize,
    }
}

const rowToCells = (row) => {
    return row.map(
        (cell, cellNum) => {
            return <td key={cellNum} className={cell ? "alive" : "dead"}></td>
        }
    )
}

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
