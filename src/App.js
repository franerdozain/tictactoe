import './App.css';
import { useState } from 'react'

function Square({value, onSquareClick}) {
  return (
    <button
      className="btn btn-outline-secondary"
     onClick={onSquareClick}
    >
      {value}
    </button>)
}

export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();

    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O"

    setXIsNext(!xIsNext)
    setSquares(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = `Winner is ${winner}`
  } else {
    status = `Next player is ${xIsNext ? "X" : "O"}`
  }

  return (
    <div className="App ">
      <header className="App-header  py-4 ">
      </header>
      <div>{status}</div>
      <div className="btn-group-vertical" role="group" aria-label="Vertical button group">

        <div className="btn-group-mg" role="group" aria-label="Second group">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="btn-group-mg" role="group" aria-label="Second group">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="btn-group-mg" role="group" aria-label="Second group">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </div>
    </div>
  );
} 

function calculateWinner(squares) {
  const winnerCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0; i < winnerCombinations.length; i++){
    const [a, b, c] = winnerCombinations[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

