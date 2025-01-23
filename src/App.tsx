import logo from './assets/react.svg';
import './App.scss';
import { ClassCounter } from './ClassCounter';
import { FunctionCounter } from './FunctionCounter';

export const App = () => {
  return (
    <main className="App">
      <img src={logo} alt="logo" className="App__logo"/>
      <h1 className="App__title">React App</h1>
      <div className="App__demo">
        <ClassCounter />
      </div>

      <div className="App__demo">
        <FunctionCounter/>
      </div>
    </main>
  )
}