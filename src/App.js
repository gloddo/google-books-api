import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid";
import { searchDebounced, search } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: [],
      totalItems: 0,
      actualIndex: 0
    };
  }

  componentDidMount() {
    window.location.hash = ""
  }

  getResult = async val => {
    this.setState({
      searchValue: val
    });
    const result = await searchDebounced(val);

    result &&
      this.setState({
        searchResult: result.items,
        totalItems: result.totalItems,
        actualIndex: 0
      });

    if (val.length === 0) {
      this.setState({
        searchResult: []
      });
    }
  };

  changePage = async indexShift => {
    if (this.state.totalItems < 10) return null;
    const newIndex =
      this.state.actualIndex + indexShift >= 0
        ? this.state.actualIndex + indexShift
        : 0;
    this.setState({
      actualIndex: newIndex,
    });
    window.location.hash = newIndex / 10;
    const page = await search(this.state.searchValue, newIndex);
    page &&
      this.setState({
        searchResult: page.items
      });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.getResult} value={this.state.searchValue} />
        <BookGrid
          result={this.state.searchResult}
          totalItems={this.state.totalItems}
          changePage={this.changePage}
          actualIndex={this.state.actualIndex}
        />
      </div>
    );
  }
}

export default App;
