import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Board from './Components/Board';
import Header from './Components/Header';
import Country from './Pages/Country';

import './Styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="country">
              <Route path=":name" element={<Country />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
