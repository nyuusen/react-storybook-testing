import { useState } from 'react'
import { Board, BoardState } from './Board'
import '../index.css'

type Step = {
  readonly squares: BoardState
  readonly xIsNext: boolean
}

type GameState = {
  readonly history: readonly Step[]
  readonly stepNumber: number
}

export const Game = () => {
  const [state, setState] = useState<GameState>({
      history: [
          {
              squares: [null, null, null, null, null, null, null, null, null],
              xIsNext: true,
          },
      ],
      stepNumber: 0,
  })

  const current = state.history[state.stepNumber]
  const winner = calculateWinner(current.squares)
  let status: string
  if (winner) {
      status = `Winner: ${winner}`
  } else if (state.stepNumber === 9) {
      status = 'Draw!'
  } else {
      status = `次のプレイヤー: ${current.xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i: number) => {
      if (winner || current.squares[i]) {
          return
      }

      const next: Step = (({ squares, xIsNext }) => {
          const nextSquares = squares.slice() as BoardState
          nextSquares[i] = xIsNext ? 'X' : 'O'
          return {
              squares: nextSquares,
              xIsNext: !xIsNext,
          }
      })(current)

      setState(({ history, stepNumber }) => {
          const newHistory = history.slice(0, stepNumber + 1).concat(next)

          return {
              history: newHistory,
              stepNumber: newHistory.length - 1,
          }
      })
  }

  const jumpTo = (move: number) => {
      setState(prev => ({
          ...prev,
          stepNumber: move,
      }))
  }

  const moves = state.history.map((step, move) => {
      const desc = move > 0 ? `Go to move #${move}` : 'Go to game start'
      return (
          <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
      )
  })

  return (
      <div className='game'>
          <div className='game-board'>
              <Board squares={current.squares} onClick={handleClick} />
          </div>
          <div className='game-info'>
              <div data-cy="game-status">{status}</div>
              <ol>{moves}</ol>
          </div>
      </div>
  )
}

const calculateWinner = (squares: BoardState) => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
      ) {
          return squares[a]
      }
  }
  return null
}
