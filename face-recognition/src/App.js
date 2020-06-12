import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }

const app = new Clarifai.App({
  apiKey: '7f3778c36ddd4f1c84ad929845592e38'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function (err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        {/* <Particles className='particles'
          params={particlesOptions}
        /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
