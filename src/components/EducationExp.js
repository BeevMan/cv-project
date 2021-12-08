import React, { Component } from "react";

class EducationExp extends Component {
  constructor(props) {
      super(props);

      this.toggleIsAdding = this.toggleIsAdding.bind(this);

      this.state = {
        isAddingEd: false
      };
  };

  toggleIsAdding() {
    this.state.isAddingEd ? this.setState({isAddingEd: false}) : this.setState({isAddingEd: true});
  };

  blankForm() {
    const form = 
      <form>
        <div>
            <label name="name">University / School name</label>
            <input type="text" id="name" name="name" required minLength="1"></input>
        </div>
        <div>
            <label name="city">City</label>
            <input type="text" id="city" name="city" required minLength="1"></input>
        </div>
        <div>
            <label name="degree">Degree / Certification</label>
            <input type="text" id="degree" name="degree" required minLength="1"></input>
        </div>
        <div>
            <label name="start-date">Start date</label>
            <input type="text" id="start-date" name="start-date" required minLength="4" maxLength="4"></input>

            <label name="end-date">End date</label>
            <input type="text" id="end-date" name="end-date" required minLength="4" maxLength="4"></input>
        </div>
        <div>
            <button onClick={this.toggleIsAdding}>Cancel</button>
            <button type="submit">Save</button>
        </div>
      </form>;

    return form;
  };

  render() {

    return (
      <div>
        <div className="Heading">
            <h1>Education</h1>
            
            {this.state.isAddingEd
              ? <div></div>
              : <button onClick={this.toggleIsAdding}>+</button>
            }
        </div>
        {this.state.isAddingEd
          ? this.blankForm()
          : <div></div>
        }
      </div>
    );
  }
};

export default EducationExp;
