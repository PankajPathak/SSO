import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = { values: [{}] };

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then((response) => {
      console.log(response)
      this.setState({
        values: response.data
      })
    })
    // this.setState({
    //   values: [{ id: 1, name: 'value 101' }, { id: 2, name: 'value 102' }, { id: 3, name: 'value 103' }, { id: 4, name: 'value 104' }]
    // });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>

            {
              this.state.values.map((value: any) => (<li>{value.name}</li>))
            }
          </ul>

        </header>
      </div>
    );
  }
}

export default App;
