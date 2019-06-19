import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./posts";

export default class Home extends Component {
  handleSearchBarSubmit(query) {
    console.log("trying to submit for query", query);
    //navigate to a new route
    this.props.history.push("/results");
  }
  render() {
    return (
      <div className="app">
        <div>
          <div>
            <Logo />
            <SearchBar
              onSubmit={query => {
                this.handleSearchBarSubmit(query);
              }}
            />
            <RecentPosts />
          </div>
        </div>
      </div>
    );
  }
}
