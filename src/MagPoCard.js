import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class MagPoCard extends Component {
  constructor(props) {
      super(props);
  }
  onStart() {}
  onStop() {}
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <Draggable {...dragHandlers}>
        <div className="box">{this.props.magpotext}</div>
      </Draggable>
    );
  }
}
