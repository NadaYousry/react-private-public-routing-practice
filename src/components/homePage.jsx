import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>this is hoeme page</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
export default HomePage;
