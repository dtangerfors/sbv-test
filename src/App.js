import React, { Component } from "react";
import "remixicon/fonts/remixicon.css";

import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        loggedIn: false,
        userData: null,
      },
      bookingSuccess: {
        status: false,
        message: "",
      },
      popupForm: {
        isOpen: false,
        isUpdatingBooking: false,
        bookingKey: '',
      },
    };
  }

  render() {
    return (
      <>
        <div className="App">
            <Login login={this.login} />
        </div>
      </>
    );
  }
}
