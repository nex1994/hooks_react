import logo from './assets/react.svg';
import './App.scss';
// import { Form } from './Forms';
// import { ClassCounter } from './ClassCounter';
import { FunctionCounter } from './FunctionCounter';
// import { useState } from 'react';

export const App = () => {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <main className="App">
      <img src={logo} alt="logo" className="App__logo"/>
      <h1 className="App__title">React Forms</h1>
      <FunctionCounter />
    </main>
  )
}