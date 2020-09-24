import React , {Component}from 'react';
import './App.css';

//CONST & VARS
const APIKEY = '8ed69995';
const APIURL = `http://www.omdbapi.com`;

class App extends Component {
  componentDidMount(){
    fetch(APIURL + '?apikey=' + APIKEY + '&s=back to the future').then( res => res.json())
    .then(apiResult => console.log(apiResult));
  }
  render() {
    return (
      <div className="App">
        <h1>Hellooo</h1>
      </div>
    );
  }
}

export default App;
