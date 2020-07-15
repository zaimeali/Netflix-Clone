import React from 'react';
import './App.css';

// Component
import Row from './Row';

// API
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINAL" fetchUrl={ requests.fetchNetflixOriginals } />
      <Row title="Trending Now" fetchUrl={ requests.fetchTrending } />
    </div>
  );
}

export default App;
