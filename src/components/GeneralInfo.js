import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.updateGeneralInfo = this.updateGeneralInfo.bind(this); // in lieu of binding like this, updateGeneralInfo could be turned into an arrow function

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0 
    }
  };

  updateGeneralInfo(e) {
    const name = e.target.name;
    const value = e.target.value;

    if(name === 'first-name') {
      this.setState({firstName: value}, () => this.props.liftStateToCVInput('generalInfo', this.state))
    }
    else if(name === 'last-name') {
      this.setState({lastName: value}, () => this.props.liftStateToCVInput('generalInfo', this.state))
    } 
    else if(name === 'email') {
      this.setState({email: value}, () => this.props.liftStateToCVInput('generalInfo', this.state))
    } 
    else if(name === 'phone') {
      this.setState({phone: value}, () => this.props.liftStateToCVInput('generalInfo', this.state))
    }
  }

  render() {

    return (
      <form>
        <h1>Personal Info</h1>
        <div>
            <label name="first-name">First Name</label>
            <input onChange={this.updateGeneralInfo} type="text" id="first-name" name="first-name" value={this.state.firstName} required minLength="1"></input>
        </div>
        <div>
            <label name="last-name">Last Name</label>
            <input onChange={this.updateGeneralInfo} type="text" id="last-name" name="last-name" value={this.state.lastName} required minLength="1"></input>
        </div>
        <div>
            <label name="email">Email</label>
            <input onChange={this.updateGeneralInfo} type="text" id="email" name="email" value={this.state.email} required minLength="1"></input>
        </div>
        <div>
            <label name="phone">Phone</label>
            <input onChange={this.updateGeneralInfo} type="text" id="phone" name="phone" value={this.state.phone} required minLength="1"></input>
        </div>
      </form>
    );
  }
};

export default GeneralInfo;