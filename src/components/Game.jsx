import { useState } from "react";

import "../App.css";
import Board from './Board'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]) // creating array of arrays
    const [currentMove, setCurrentMove] = useState(0) // 1 // 2 // 3 // 4 // 1
    const xIsNext = currentMove % 2 === 0
    // return the last index value
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let discription
        if(move > 0) {
            discription = `Go to move #${move}`
        } 
        else {
            discription = `Go to game start`
        }

        return(
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{discription}</button>
            </li>
        )
    })

    return(
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}