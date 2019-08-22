import React, {Component} from "react";
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'
import Box from './Box';
import Dustbin from './Dustbin';

export default class DustbinContaier extends Component {
  render() {
    return (
      <DragDropContextProvider backend = { HTML5Backend }>
        <div>
            <Dustbin/>
            <Box/>
        </div>
      </DragDropContextProvider>
    );
  }
}