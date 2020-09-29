import React , {Component}from 'react';
import './App.css';
import VideoList from './components/movie_list'
import Navbar from './components/navbar'
//CONST & VARS
const APIKEY = '8ed69995';
const APIURL = `http://www.omdbapi.com`;

//FUNCTIONS 
function fetchMovies(search = 'back to the future'){
  return fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then( res => res.json())
}; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies : [],
      totalCount : 0,

    }
  }
  
  componentDidMount(){
    fetchMovies().then(res => {
        this.setState({
          movies : res.Search,
          totalCount : res.totalResults
        })
    })
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="container">
        <VideoList movies={this.state.movies}></VideoList>
      </div>
      </>
    );
  }
}

export default App;
