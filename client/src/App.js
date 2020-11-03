import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Idol Initiatives</h1>
      </header>
    </div>
  );
}

export default App;
