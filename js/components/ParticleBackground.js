import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particleConfig from './particleConfig';

export default class Background extends React.Component {
  state = {
    height: 100,
    width: 100,
  };

  saveWindowProperties = () => {
    if(this.state.height !== window.innerHeight || this.state.width !== window.innerWidth)
      this.setState({
        height: window.innerHeight,
        width: window.innerWidth,
      })
  };

  componentDidMount() {
    this.saveWindowProperties();
  }

  render() {
    return <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Particles
        params={particleConfig}
        width={this.state.width}
        height={this.state.height}
      />
    </div>;
  }
}