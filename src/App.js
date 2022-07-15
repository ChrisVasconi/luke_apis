import React from 'react';
import './App.css';
import {Routes, Route, useParams, useState} from 'react-router-dom';
import Form from './views/Form';
import Display from './components/Display';

const Errorpage = () =>{
  return(
    <h1> These are not the Droids you are looking for </h1>
  )
}

function App() {
  return (
    <> 
    <h1> Search </h1>
    <Routes>
      <Route path="/" element={<Form/>} > 
        <Route path=":category/:id" element={<Display/>} />
        <Route path="*" element={<Errorpage/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
