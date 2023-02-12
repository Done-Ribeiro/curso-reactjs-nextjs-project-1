import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1',
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2',
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3',
      },
    ],
  };
  timeoutUpdate = null;

  // executa 1x assim que o componente é montado na tela
  // muito usado para carregamento de dados de uma API
  componentDidMount() {
    this.handleTimeout();
  }

  // executa toda a vez que um estado é atualizado
  // (pode gerar loop infinito)
  componentDidUpdate() {
    this.handleTimeout();
  }

  // executa toda a vez que o componente vai ser desmontado
  // perfeito pra limpar "lixo" da tela, como o timeout no nosso caso
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { counter, posts } = this.state;
    posts[0].title = 'O título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  };

  render() {
    const { counter, posts } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
