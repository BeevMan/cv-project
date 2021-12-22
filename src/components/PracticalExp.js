import React, { Component } from "react";

import uniqid from "uniqid";

class PracticalExp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isAddingExp: false,
        isEditingExp: false,
        expInEdit: {},
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

    const experiences = this.props.practExp.concat(this.state.exp);
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

  toggleIsEditing = (e) => {
    let exp;
    if (e) {
      if (e.target.innerText === 'Cancel') {
        e.preventDefault();
      } else {
        const id = e.target.parentNode.getAttribute('id');
        const experiences = this.props.practExp;
        const expInd = experiences.findIndex((exp) => exp.id === id);
        exp = experiences[expInd];
      }
    }
    this.state.isEditingExp ? this.setState({isEditingExp: false, expInEdit: {}}) : this.setState({isEditingExp: true, expInEdit: exp});
  };

  saveExpEdit = (e) => {
    e.preventDefault();
    const experiences = this.props.practExp;
    const expInd = experiences.findIndex((exp) => exp.id === this.state.expInEdit.id);
    experiences[expInd] = this.state.expInEdit;
    this.props.liftStateToCVInput('practicalExp', experiences);
    this.toggleIsEditing();
  };

  saveExpEditOnChange = (e) => {
    const changeExp = this.state.expInEdit;
    let id = e.target.id;
    if(id === 'start-date') {
      id = 'startDate'
    } else if(id === 'end-date') {
      id = 'endDate'
    }
    changeExp[id] = e.target.value;
    this.setState({expInEdit: changeExp});
  };

  editExperience = () => {
    const exp = this.state.expInEdit;
    const form =
      <form>
        <div>
            <label name="title">Title</label>
            <input type="text" id="title" name="title" onChange={this.saveExpEditOnChange} value={exp.title} required minLength="1"></input>
        </div>
        <div>
            <label name="name">Company Name</label>
            <input type="text" id="name" name="name"  onChange={this.saveExpEditOnChange} value={exp.name} required minLength="1"></input>
        </div>
        <div>
            <label name="city">City</label>
            <input type="text" id="city" name="city" onChange={this.saveExpEditOnChange} value={exp.city} required minLength="1"></input>
        </div>
        <div>
            <label name="start-date">Start date</label>
            <input type="text" id="start-date" name="start-date" onChange={this.saveExpEditOnChange} value={exp.startDate} required minLength="4" maxLength="4"></input>

            <label name="end-date">End date</label>
            <input type="text" id="end-date" name="end-date" onChange={this.saveExpEditOnChange} value={exp.endDate} required minLength="4" maxLength="4"></input>
        </div>
        <div>
            <button onClick={this.toggleIsEditing}>Cancel</button>
            <button onClick={this.saveExpEdit}>Save edit</button>
        </div>
      </form>;
      return form
  };

  displayExperiences() {
    if (this.props.practExp.length) {
      const elExperiences = 
        <div>
          <ul>
            {this.props.practExp.map((exp) => {
              const elExp = 
                <li key={exp.id} id={exp.id}>
                  { (() => {
                        let strOfProperties = '';
                        for (const key in exp ) {
                          if (key !== 'id') {
                            strOfProperties += exp[key] + ' '
                        }}
                        return strOfProperties
                  })()}
                  <button onClick={this.toggleIsEditing}>edit</button>
                </li>;
              return elExp
            })}
          </ul>
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
              <input onChange={this.updateCurExp} type="text" id="title" name="title" value={this.state.exp.title} required minLength="1"></input>
          </div>
          <div>
              <label name="name">Company Name</label>
              <input onChange={this.updateCurExp} type="text" id="name" name="name" value={this.state.exp.name} required minLength="1"></input>
          </div>
          <div>
              <label name="city">City</label>
              <input onChange={this.updateCurExp} type="text" id="city" name="city" value={this.state.exp.city} required minLength="1"></input>
          </div>
          <div>
              <label name="start-date">Start date</label>
              <input onChange={this.updateCurExp} type="text" id="start-date" name="start-date" value={this.state.exp.startDate} required minLength="4" maxLength="4"></input>

              <label name="end-date">End date</label>
              <input onChange={this.updateCurExp} type="text" id="end-date" name="end-date" value={this.state.exp.endDate} required minLength="4" maxLength="4"></input>
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
        { this.state.isEditingExp
          ? this.editExperience()
          : this.displayExperiences()
        }
        {this.displayBlankForm()}
      </div>
    );
  }
};

export default PracticalExp;