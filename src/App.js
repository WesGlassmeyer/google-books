import React, { Component } from "react";
import "./App.css";
import config from "../config";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import BookList from "./BookList/BookList";
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    bookResults: this.props.starterBookResults,
    searchQuery: "the+art+of+war",
    bookFilter: "",
    printFilter: "",
  };

  handleSearchSubmit = (searchSubmitEvent, searchInput) => {
    searchSubmitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput,
    });
    const baseUrl = `https://www.googleapis.com/books/v1/volumes`;
    const key = config.API_KEY;
    const formattedSearchUrl = this.formatQuery(baseUrl, searchInput, key);
    fetch(formattedSearchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong. Please try again later.");
        }
        return response;
      })
      .then((response) => response.json())
      .then((bookResultsObj) => {
        console.log("Good response from Google Books API:", bookResultsObj);
        this.setState({
          bookResults: bookResultsObj,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  formatQuery = (baseUrl, searchInput, key) => {
    const { bookFilter, printFilter } = this.state;
    let formattedQuery;
    if (searchInput !== "") {
      formattedQuery = "?q=" + searchInput;
    }
    if (bookFilter !== "") {
      formattedQuery = formattedQuery + "&filter=" + bookFilter;
    }
    if (printFilter !== "") {
      formattedQuery = formattedQuery + "&bookType=" + printFilter;
    }
    const formattedUrl = baseUrl + formattedQuery + "&key=" + key;
    console.log("formatted URL:", formattedUrl);
    return formattedUrl;
  };

  handlePrintType = (printTypeFormEvent) => {
    if (printTypeFormEvent) {
      this.setState({
        printFilter: printTypeFormEvent,
      });
    }
  };

  handleBookType = (bookTypeFormEvent) => {
    if (bookTypeFormEvent) {
      this.setState({
        bookFilter: bookTypeFormEvent,
      });
    }
  };

  render() {
    const { bookResults } = this.state;
    const isMobile = window.innerWidth <= 500;
    let responsiveFilter;
    if (isMobile) {
      responsiveFilter = null;
    } else {
      responsiveFilter = (
        <Filter
          handlePrintType={this.handlePrintType}
          handleBookType={this.handleBookType}
        />
      );
    }

    return (
      <div>
        <Header />
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        {responsiveFilter}
        <BookList bookResults={bookResults} />
      </div>
    );
  }
}
