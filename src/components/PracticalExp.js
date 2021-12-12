import React, { Component } from "react";

import uniqid from "uniqid";

class PracticalExp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isAddingExp: false,
        exp: {
          title: "",
          name: "",
          city: "",
          startDate: 0,
          endDate: 0,
          id: uniqid()
        }
      };
  };

  toggleIsAdding = () => {
    this.state.isAddingExp ? this.setState({isAddingExp: false}) : this.setState({isAddingExp: true});
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

    let experiences = this.props.practExp.concat(this.state.exp);
    this.props.liftStateToCVInput('practicalExp', experiences);
    this.cancelExp(e)
  };

  cancelExp = (e) => {
    e.preventDefault();

    this.setState({
      exp: {
        title: "",
        name: "",
        city: "",
        startDate: 0,
        endDate: 0,
        id: uniqid()
      }
    }, this.toggleIsAdding);
  };

  displayAddExpBtn = () => {
    if (!this.state.isAddingExp) {
      return <button onClick={this.toggleIsAdding}>+</button>
    }
  };

  displayExperiences() {
    if (this.props.practExp.length) {
      const elExperiences = 
        <div>
          {this.props.practExp.map((exp) => {
            const elExp = 
              <ul key={exp.id}>
                { (() => {
                      let strOfProperties = '';
                      for (const key in exp ) {
                        if (key !== 'id') {
                          strOfProperties += exp[key] + ' '
                      }}
                      return strOfProperties
                })()}
              </ul>;
            return elExp
          })}
        </div>

      return elExperiences
    }
  }

  displayBlankForm() {
    if (this.state.isAddingExp) {
      const form =
        <form>
          <div>
              <label name="title">Title</label>
              <input onChange={this.updateCurExp} type="text" id="title" name="title" required minLength="1"></input>
          </div>
          <div>
              <label name="name">Company Name</label>
              <input onChange={this.updateCurExp} type="text" id="name" name="name" required minLength="1"></input>
          </div>
          <div>
              <label name="city">City</label>
              <input onChange={this.updateCurExp} type="text" id="city" name="city" required minLength="1"></input>
          </div>
          <div>
              <label name="start-date">Start date</label>
              <input onChange={this.updateCurExp} type="text" id="start-date" name="start-date" required minLength="4" maxLength="4"></input>

              <label name="end-date">End date</label>
              <input onChange={this.updateCurExp} type="text" id="end-date" name="end-date" required minLength="4" maxLength="4"></input>
          </div>
          <div>
              <button onClick={this.cancelExp}>Cancel</button>
              <button onClick={this.saveExp}>Save</button>
          </div>
        </form>;

      return form
    }
  };

  render() {

    return (
      <div>
        <div className="Heading">
            <h1>Experience</h1>
            {this.displayAddExpBtn()}
        </div>
        {this.displayExperiences()}
        {this.displayBlankForm()}
      </div>
    );
  }
};

export default PracticalExp;