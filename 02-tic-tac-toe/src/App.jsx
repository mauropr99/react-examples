import confetti from 'canvas-confetti';
import './App.css'
import { useState } from 'react';
import { Square } from './components/Square';
import {TURNS} from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {

  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem('board');
    return boardLocalStorage ? JSON.parse(boardLocalStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn');
    return turnLocalStorage ? JSON.parse(turnLocalStorage) : TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))


    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X) 

    
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={restartGame}>Restart</button>
      
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} restartGame={restartGame}></WinnerModal>
    </main>
  )
}

export default App
