

export default function GameBoard({isSelect, board}){

   
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
            {board.map((row, rowIdx)=> (<li key={rowIdx}>
                <ol>{row.map((col,colIdx)=>(<li key={colIdx}><button disabled={col===null? false: true} onClick={()=>isSelect(rowIdx, colIdx)}>{col}</button></li>))}</ol>
            </li>))}
        </div>
    )
}