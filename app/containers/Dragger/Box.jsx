// Box.jsx
import React from "react";
import { DragSource } from 'react-dnd';

export default class Box extends React.Component {
  render() {
    return (
      <div style={{width: 100, height: 100, backgroundColor: "#f10215"}}></div>
    )
  }
}