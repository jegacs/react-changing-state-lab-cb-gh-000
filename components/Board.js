import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    const { board, onClick } = this.props;
    const fields = board.map((field, index) => {
      return <Field player={field} key={index}  onClick={onClick.bind(null, index)} />
    });
    return (
      <div className='board'>
        {fields}
      </div>
    );
  }
}
