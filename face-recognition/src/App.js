import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/* <ImageLinkForm />
    <FaceRecognition /> */}
    </div>
  );
}

export default App;
