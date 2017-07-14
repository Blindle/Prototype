import React, { Component, PropTypes } from 'react';
import { Point, Container, LeftSide, RightSide } from '../sharedStyles';
import brailleGenerator from '../utils/brailleGenerator';

const Letter = ({ points }) => (
  <div>
    <LeftSide>
      <Point enable={points[0]} />
      <Point enable={points[1]} />
      <Point enable={points[2]} />
    </LeftSide>
    <RightSide>
      <Point enable={points[3]} />
      <Point enable={points[4]} />
      <Point enable={points[5]} />
    </RightSide>
  </div>
);

export default class Letters extends Component {
  static propTypes = {
    word: React.PropTypes.string,
  };

  render() {
    const brailleText = brailleGenerator(this.props.word);
    return (
      <Container>
        { brailleText.map(points => <Letter points={points} />)}
      </Container>
    );
  }
};

