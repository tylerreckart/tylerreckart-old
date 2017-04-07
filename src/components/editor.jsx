import React, { Component } from 'react';
import Button from './button';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        <textarea />
        <Button title="Press Me" />
      </div>
    );
  }
}
