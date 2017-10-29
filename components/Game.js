import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [
        null, null, null,
        null, null, null,
        null, null, null,
      ],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isComplete = this.isComplete.bind(this);
    this.getWinner = this.getWinner.bind(this);

  }

  handleReset (ev) {
    this.setState({
      board: [
        null, null, null,
        null, null, null,
        null, null, null,
      ],
      turn: 'X'
    });
    ev.preventDefault();

  }

  handleClick (i, ev) {
    ev.preventDefault();
    const updatedBoard = this.state.board.map((field, index) => {
      return index === i ? this.state.turn : field
    })
    this.setState({
      turn: this.state.turn === 'X' ? 'O' : 'X',
      board: updatedBoard
    })

  }

  getWinner () {

  }

  isComplete () {
    num = this.state.board.filter( x => x) // Return only valid or not null values
    return num.length === this.state.board.length
  }

  render () {

    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick}/>
        <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
