import React, { Component } from "react";

class PracticalExp extends Component {
  constructor(props) {
      super(props);

      this.toggleIsAdding = this.toggleIsAdding.bind(this);

      this.state = {
        isAddingExp: false
      };
  };

  toggleIsAdding() {
    this.state.isAddingExp ? this.setState({isAddingExp: false}) : this.setState({isAddingExp: true});
  };

  blankForm() {
    const form =
      <form>
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
            <button onClick={this.toggleIsAdding}>Cancel</button>
            <button>Save</button>
        </div>
      </form>;
    return form
  };

  render() {

    return (
      <div>
        <div className="Heading">
            <h1>Experience</h1>

            {this.state.isAddingExp
              ? <div></div>
              : <button onClick={this.toggleIsAdding}>+</button> 
            }
        </div>
        {this.state.isAddingExp
          ? this.blankForm()
          : <div></div>
        }
      </div>
    );
  }
};

export default PracticalExp;