import React, { Component } from "react";

import uniqid from "uniqid";

class EducationExp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isAddingEd: false,
        isEditingExp: false,
        editingExpId: 0,
        expInEdit: {},
        exp: {
          name: "",
          city: "",
          degree: "",
          startDate: 0,
          endDate: 0,
          id: uniqid()
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

    const experiences = this.props.edExp.concat(this.state.exp);
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
        endDate: 0,
        id: uniqid()
      }
    }, this.toggleIsAdding);
  };

  displayAddExpBtn = () => {
    if (!this.state.isAddingEd) {
      return <button onClick={this.toggleIsAdding}>+</button>
    }
  };

  toggleIsEditing = (e) => {
    let exp;
    if (e) {
      const id = e.target.parentNode.getAttribute('id');
      const experiences = this.props.edExp;
      const expInd = experiences.findIndex((exp) => exp.id === id);
      exp = experiences[expInd];
    }
    this.state.isEditingExp ? this.setState({isEditingExp: false, expInEdit: {}}) : this.setState({isEditingExp: true, expInEdit: exp});
  };

  saveExpEdit = (e) => {
    e.preventDefault();
    const experiences = this.props.edExp;
    const expInd = experiences.findIndex((exp) => exp.id === this.state.expInEdit.id);
    experiences[expInd] = this.state.expInEdit;
    this.props.liftStateToCVInput('educationExp', experiences);
    this.toggleIsEditing(); // should I pass e into this function???
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
            <label name="name">University / School name</label>
            <input type="text" id="name" name="name" onChange={this.saveExpEditOnChange} defaultValue={exp.name} required minLength="1"></input>
        </div>
        <div>
            <label name="city">City</label>
            <input type="text" id="city" name="city"  onChange={this.saveExpEditOnChange} defaultValue={exp.city} required minLength="1"></input>
        </div>
        <div>
            <label name="degree">Degree / Certification</label>
            <input type="text" id="degree" name="degree" onChange={this.saveExpEditOnChange} defaultValue={exp.degree} required minLength="1"></input>
        </div>
        <div>
            <label name="start-date">Start date</label>
            <input type="text" id="start-date" name="start-date" onChange={this.saveExpEditOnChange} defaultValue={exp.startDate} required minLength="4" maxLength="4"></input>

            <label name="end-date">End date</label>
            <input type="text" id="end-date" name="end-date" onChange={this.saveExpEditOnChange} defaultValue={exp.endDate} required minLength="4" maxLength="4"></input>
        </div>
        <div>
            <button onClick={this.toggleIsEditing}>Cancel</button>
            <button onClick={this.saveExpEdit}>Save edit</button>
        </div>
      </form>;
      return form
  };

  displayExperiences() {
    if (this.props.edExp.length) {
      const elExperiences = 
        <div>
          <ul>
            {this.props.edExp.map((exp) => {
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
        { this.state.isEditingExp
          ? this.editExperience()
          : this.displayExperiences()
        }
        {this.displayBlankForm()}
      </div>
    );
  }
};

export default EducationExp;
