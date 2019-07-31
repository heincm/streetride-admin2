import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron';
import Container from './Components/Container';
import Selector from './Components/Selector/index';

class App extends Component {
  render() {
    return (
      <>
<Jumbotron></Jumbotron>
<Container> 
      <Selector>

      </Selector>
</Container>
      </>
    );
  }
}

export default App;
