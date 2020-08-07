import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button'

export class TFT extends Component {
  static displayName = TFT.name;

  render () {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello
        </Button>
      </div>
    );
  }
}
