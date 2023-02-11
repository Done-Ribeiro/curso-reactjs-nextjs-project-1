import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// React - componentes de Classes
// stateless -> não tem estado
//
class App extends Component {
  // constructor(props) {
  //   super(props);
  // (1)*
  //   this.handlePClick = this.handlePClick.bind(this);

  //   this.state = {
  //     name: 'Done Ribeiro',
  //     counter: 0,
  //   };
  // }

  // nao precisa do construtor se o state for declarado como um: class Fields.. desta forma abaixo
  state = {
    name: 'Done Ribeiro',
    counter: 0,
  };

  // (1)*
  // não precisa do bind, se nos nossos métodos usarmos arrow functions
  handlePClick = () => {
    this.setState({ name: 'Júnior' });
  };

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

// React - componentes de Função
// stateless -> não tem estado
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
