import React, { Component } from 'react';
import "isomorphic-fetch";
import { Button } from '../js/sharedStyles';
import TypingSection from '../js/components/TypingSection';
import Letters from '../js/components/Letters';
import doAction from '../js/utils/configuration';

export default class Blindle extends Component {
  state = {
    currentMenu: 'NAVIGATION',
    currentPosition: 0,
    words: [],
  };

  onTyping = (pos) => () => {
    console.log('Typing with' + pos);
  };

  onEvent = action => () => this.setState(doAction(this.state, action));

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <Button onClick={this.onEvent('onClickBack')}/>
          <Button onClick={this.onEvent('onClickOk')}/>
        </div>
        <div>
          <Button onClick={this.onEvent('onClickLeft')}/>
          <TypingSection onTyping={this.onTyping} />
          <Button onClick={this.onEvent('onClickRight')}/>
        </div>
        <Letters word={this.state.words[this.state.currentPosition]} />
      </div>
    );
  }
};
