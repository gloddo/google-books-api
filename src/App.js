import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid";
import { searchDebounced, search } from "./utils";
import ProgressBar from "./components/ProgressBar";
import Pagination from "./components/Pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: [],
      totalItems: 0,
      actualIndex: 0,
      loading: false,
    };
  }

  componentDidMount() {
    window.location.hash = ""
  }

  getResult = async val => {
    this.setState({
      searchValue: val,
      loading: true,
    });
    const result = await searchDebounced(val);

    result &&
      this.setState({
        searchResult: result.items,
        totalItems: result.totalItems,
        actualIndex: 0,
        loading: false,
      });

    if (val.length === 0) {
      this.setState({
        searchResult: [],
        loading: false
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
      loading: true,
    });
    window.location.hash = newIndex / 10;
    const page = await search(this.state.searchValue, newIndex);
    page &&
      this.setState({
        searchResult: page.items,
        loading: false,
      });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.getResult} value={this.state.searchValue} />
        <ProgressBar visible={this.state.loading}/>
        <Pagination
          totalPages={Math.floor(this.state.totalItems / 10)}
          changePage={this.changePage}
          actualPage={this.state.actualIndex / 10}
        />
        <BookGrid
          result={this.state.searchResult}
          totalItems={this.state.totalItems}
          changePage={this.changePage}
          actualIndex={this.state.actualIndex}
        />
        <Pagination
          totalPages={Math.floor(this.state.totalItems / 10)}
          changePage={this.changePage}
          actualPage={this.state.actualIndex / 10}
        />
      </div>
    );
  }
}

export default App;
