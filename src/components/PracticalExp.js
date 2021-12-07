import React, { Component } from "react";

class PracticalExp extends Component {
  constructor(props) {
      super(props);
  };

  render() {

    return (
      <form>
        <h1>Experience</h1>
        <div>
            <label name="title">Title</label>
            <input type="text" id="title" name="title" required minLength="1"></input>
        </div>
        <div>
            <label name="name">Company Name</label>
            <input type="text" id="name" name="name" required minLength="1"></input>
        </div>
        <div>
            <label name="city">City</label>
            <input type="text" id="city" name="city" required minLength="1"></input>
        </div>
        <div>
            <label name="start-date">Start date</label>
            <input type="text" id="start-date" name="start-date" required minLength="4" maxLength="4"></input>

            <label name="end-date">End date</label>
            <input type="text" id="end-date" name="end-date" required minLength="4" maxLength="4"></input>
        </div>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
      </form>
    );
  }
};

export default PracticalExp;