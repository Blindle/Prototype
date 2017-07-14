import React, { Component }from 'react';
import { Container } from '../sharedStyles';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "f222ae8510d0eb26c3ade58b483913843c3d80eb8132f102039684903ed591c1",
  secret: "c3fefd1e91a91301c496dd7470dd7ac93bde10525492b299f1b322d73951244f",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

export default class unsplashContainer extends Component {
  state = {
    backgroundUrl: ''
  };

  componentDidMount() {
    unsplash.photos.getRandomPhoto({
      collections: [910886],
    })
      .then(toJson)
      .then(json => {
        const backgroundUrl = json.urls.full;
        this.setState({ backgroundUrl });
      });
  }

  render(){
    return (
      <Container background={this.state.backgroundUrl}>
        {this.props.children}
      </Container>
    );
  }
};
