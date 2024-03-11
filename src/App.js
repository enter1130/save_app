import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Page/Detail';
import Main from './Page/Main';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/register' element={'register'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
