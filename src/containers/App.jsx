import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
// import { robots } from "../robots";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { connect } from "react-redux";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
