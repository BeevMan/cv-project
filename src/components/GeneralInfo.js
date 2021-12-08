import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <form>
        <h1>Personal Info</h1>
        <div>
            <label name="first-name">First Name</label>
            <input onChange={this.props.updateGeneralInfo} type="text" id="first-name" name="first-name" required minLength="1"></input>
        </div>
        <div>
            <label name="last-name">Last Name</label>
            <input onChange={this.props.updateGeneralInfo} type="text" id="last-name" name="last-name" required minLength="1"></input>
        </div>
        <div>
            <label name="email">Email</label>
            <input onChange={this.props.updateGeneralInfo} type="text" id="email" name="email" required minLength="1"></input>
        </div>
        <div>
            <label name="phone">Phone</label>
            <input onChange={this.props.updateGeneralInfo} type="text" id="phone" name="phone" required minLength="1"></input>
        </div>
      </form>
    );
  }
};

export default GeneralInfo;