
'use client';


import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    if (isXNext) {
      newBoard[index] = 'X';
    } else {
      newBoard[index] = 'O';
    }
    
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  let status;
if (winner) {
  status = `Winner: ${winner}`;
} else {
  if (isXNext) {
    status = 'Next player: X';
  } else {
    status = 'Next player: O';
  }
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-14 bg-gradient-to-r from-violet-500 to-black">
      <h1 className="text-2xl font-bold mb-4">{status}</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-20 h-20 text-2xl font-bold border border-gray-900 rounded hover:bg-gray-300"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
 