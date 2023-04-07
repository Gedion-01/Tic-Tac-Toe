# Tic-Tac-Toe
#Introduction

This code defines a Game component in React, which renders a game of Tic-Tac-Toe. The game state is managed using React's useState hook, and the Board component is used to render the game board.
#Functionality

When the Game component is rendered, it initializes the game state using the useState hook. It sets the initial player as 'X', initializes the game history to an array with one element (an array of 9 null values), and sets the current move to 0.

The handlePlay function is called when a player makes a move on the game board. It updates the game history by adding the new board state to the history array, updates the current move index to the latest move, and toggles the player turn.

The jumpTo function is called when the user clicks on a move in the game history. It sets the current move index to the selected move, and updates the player turn based on whether the move was made by 'X' or 'O'.

The moves array is generated using the history array. It maps each element in the array to a button element that represents a move in the game history. The text displayed on the button depends on the index of the move in the history array.

Finally, the Game component returns a div that contains the Board component and the game history as a list of moves.
