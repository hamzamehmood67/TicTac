import { useState } from "react"

const initalGameBoard=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({isSelect}){
    // const [gameBoard,setGameBoard]=useState(initalGameBoard);

    // function handleOnclick(rowIdx, colIdx)
    // {
    //     setGameBoard((prevGameBoard)=>{
    //         const newGameBoard=[...prevGameBoard.map((innerArray)=> [...innerArray])]
    //         newGameBoard[rowIdx][colIdx]=ActivePlayer;
    //         return newGameBoard;
    //     })

    //     isSelect();
    // }

    return(
        <div id="game-board">
            {gameBoard.map((row, rowIdx)=> (<li key={rowIdx}>
                <ol>{row.map((col,colIdx)=>(<li key={colIdx}><button onClick={isSelect}>{col}</button></li>))}</ol>
            </li>))}
        </div>
    )
}