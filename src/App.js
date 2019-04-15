import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookGrid from './components/BookGrid';
import { searchDebounced } from './utils';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchValue: "",
      searchResult: []
    }
  }

  getResult = async val => {
    this.setState({
      searchValue: val,
    })
    const result = await searchDebounced(val)
    console.log(result);
    
    this.setState({
      searchResult: result,
    })
    
  }
  render() {
    return (
      <div>
        <SearchBar onChange={this.getResult} value={this.state.searchValue} />
        {/* <BookGrid result={this.state.searchResult} /> */}
      </div>
    );
  }
}

export default App;
