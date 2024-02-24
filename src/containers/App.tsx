import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList.tsx";
import Searchbox from "../components/Searchbox.tsx";
// import { robots } from "../robots";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { connect } from "react-redux";
import { getData } from "../utils/data.utils.ts";

import { setSearchField } from "../actions";

const mapStateToProps = (state: any) => {
  // Any for now
  return {
    searchField: state.searchRobots.searchField,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // Any for now
  return {
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.target.value)),
  };
};

export type Robot = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     setRobots(users);
    //   });

    const fetchUsers = async () => {
      const users = await getData<Robot[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobots(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
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
