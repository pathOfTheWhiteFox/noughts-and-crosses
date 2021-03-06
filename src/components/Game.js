import React, { useState } from 'react'
import Board from './Board';
import { calculateWinner } from '../helpers';

const  styles = {
    width: '200px',
    margin: '20px auto'
}

const Game = () =>  {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber  + 1)
        const currentBoard = timeInHistory[stepNumber]
        const  squares = [...currentBoard]
        if (winner || squares[i]) return
        squares[i] = xIsNext ? 'X'  : 'O'
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((step, move) => {
            const destination = move ? `Go to Move#${move}` : 'Go to Start'
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
)

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game
