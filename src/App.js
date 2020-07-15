import React from 'react';
import './App.css';

// Component
import Banner from './Banner';
import Row from './Row';

// API
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Banner 
        fetchUrl={ requests.fetchNetflixOriginals }
      />
      <Row 
        title="NETFLIX ORIGINAL" 
        fetchUrl={ requests.fetchNetflixOriginals } 
        // by default isLargeRow will be true
        isLargeRow  
      />
      <Row title="Trending Now" fetchUrl={ requests.fetchTrending } />
      <Row title="Top Rated" fetchUrl={ requests.fetchTopRated } />
      <Row title="Action Movies" fetchUrl={ requests.fetchActionMovies } />
      <Row title="Comedy Movies" fetchUrl={ requests.fetchComedyMovies } />
      <Row title="Horror Movies" fetchUrl={ requests.fetchHorrorMovies } />
      <Row title="Romanctic Movies" fetchUrl={ requests.fetchRomanceMovies } />
    </div>
  );
}

export default App;
