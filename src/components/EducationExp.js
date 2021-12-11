import React, { Component } from "react";

class EducationExp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isAddingEd: false,
        exp: {
          name: "",
          city: "",
          degree: "",
          startDate: 0,
          endDate: 0
        },
      };
  };

  toggleIsAdding= () => {
    this.state.isAddingEd ? this.setState({isAddingEd: false}) : this.setState({isAddingEd: true});
  };

  updateCurExp = (e) => {
    const changeExp = this.state.exp;
    let id = e.target.id;
    if(id === 'start-date') {
      id = 'startDate'
    } else if(id === 'end-date') {
      id = 'endDate'
    }
    changeExp[id] = e.target.value;
    this.setState({exp: changeExp});
  };

  saveExp = (e) => {
    e.preventDefault();

    let experiences = this.props.edExp.concat(this.state.exp);
    this.props.liftStateToCVInput('educationExp', experiences);
    this.cancelExp(e)
  };

  cancelExp = (e) => {
    e.preventDefault();

    this.setState({
      exp: { 
        name: "",
        city: "",
        degree: "",
        startDate: 0,
        endDate: 0
      }
    }, this.toggleIsAdding);
  };

  displayAddExpBtn = () => {
    if (!this.state.isAddingEd) {
      return <button onClick={this.toggleIsAdding}>+</button>
    }
  };

  displayBlankForm() {
    if (this.state.isAddingEd) {
      const form = 
      <form>
        <div>
            <label name="name">University / School name</label>
            <input onChange={this.updateCurExp} type="text" id="name" name="name" defaultValue={this.state.exp.name} required minLength="1"></input>
        </div>
        <div>
            <label name="city">City</label>
            <input onChange={this.updateCurExp} type="text" id="city" name="city" defaultValue={this.state.exp.city} required minLength="1"></input>
        </div>
        <div>
            <label name="degree">Degree / Certification</label>
            <input onChange={this.updateCurExp} type="text" id="degree" name="degree" defaultValue={this.state.exp.degree} required minLength="1"></input>
        </div>
        <div>
            <label name="start-date">Start date</label>
            <input onChange={this.updateCurExp} type="text" id="start-date" name="start-date" defaultValue={this.state.exp.startDate} required minLength="4" maxLength="4"></input>

            <label name="end-date">End date</label>
            <input onChange={this.updateCurExp} type="text" id="end-date" name="end-date" defaultValue={this.state.exp.endDate} required minLength="4" maxLength="4"></input>
        </div>
        <div>
            <button onClick={this.cancelExp}>Cancel</button>
            <button type="submit" onClick={this.saveExp}>Save</button>
        </div>
      </form>;

      return form;
    }
  };

  render() {

    return (
      <div>
        <div className="Heading">
            <h1>Education</h1>
            
            {this.displayAddExpBtn()}
        </div>
        {this.displayBlankForm()}
      </div>
    );
  }
};

export default EducationExp;
