import React, { Component } from 'react';


export default class searchBar extends Component{
//COSTRUTTORE DEL COMPONENTE
constructor(props){
    super(props);
    this.state = {
        term : 'la',
    }
}

//EVENTO ON CHANGE
searchChange = (event) => {
    this.setState({term: event.target.value});
}


//RENDER DEL COMPONENTE
render(){
    return(
        <form className="form-inline">
            <input 
                onChange={this.searchChange}
                className="form-control mr-sm-2" 
                type="search" 
                value = {this.state.term}
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}
}