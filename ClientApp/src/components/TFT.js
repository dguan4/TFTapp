import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button'

export class TFT extends Component {
  static displayName = TFT.name;

  constructor(props) {
    super(props)
    this.state = {
      tftdata: {}
    }
  }

  componentDidMount() {
    this.populateTFTData()
  }

  render () {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello
        </Button>
      </div>
    );
  }

  async populateTFTData() {
    const response = await fetch('tft');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
