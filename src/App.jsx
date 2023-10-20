import React from 'react';
import State from './State';
import Index from './conditional/Index';
import EventListener from './EventListener/EventListener';
import MultiSteep from './Multistepp/MultiSteep';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
Modal.setAppElement('#root');
function App() {
  return (
    <div>
      <State/>
      <Index/>
      <EventListener/>
      <MultiSteep/>
      
    </div>
  )
}

export default App


