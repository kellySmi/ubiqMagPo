import React, { Component } from 'react';
import MagPoCard from './MagPoCard';
import {words} from './words.js';
//import Draggable from 'react-draggable';
//var Draggable = window.ReactDraggable;
export default class MagPoBoard extends Component {
  //var Draggable = window.ReactDraggable;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
{words.map((m)=>{
  return (<MagPoCard magpotext={m} />);
})}
</div>
    );
  }

}
