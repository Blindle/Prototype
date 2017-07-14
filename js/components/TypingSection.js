import React, { Component, PropTypes } from 'react';
import { Button, Container, Separation } from '../sharedStyles';

export default class Counter extends Component {
  static propTypes = {
    onTyping: React.PropTypes.func,
  };

  render() {
    return (
      <Container>
        <Button onClick={this.props.onTyping(0)}/>
        <Button onClick={this.props.onTyping(1)}/>
        <Button onClick={this.props.onTyping(2)}/>
        <Separation />
        <Button onClick={this.props.onTyping(3)}/>
        <Button onClick={this.props.onTyping(4)}/>
        <Button onClick={this.props.onTyping(5)}/>
      </Container>
    );
  }
};