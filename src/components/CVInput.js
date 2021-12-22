import React, { Component } from "react";

import GeneralInfo from "./GeneralInfo";

import EducationExp from "./EducationExp";

import PracticalExp from "./PracticalExp";



class CVInput extends Component {
  constructor(props) {
      super(props);

      this.state = {
        generalInfo: { /*
          firstName: '',
          lastName: '',
          email: '',
          phone: 0 */
        },
        educationExp: [
          /*{
            name: ,
            city: ,
            degree: ,
            startDate: ,
            endDate:
          },
          {}, ...*/
        ],
        practicalExp: [
          /*{
            title: ,
            name: ,
            city: ,
            startDate: ,
            endDate: 
          },
          {}, ...*/
        ],
      };
  };

  liftStateToCVInput = (name, value) => {
    this.setState({[name]: value}, () => console.log("CVInput's state", this.state));
  };

  copyArrayOfObj(arr) {
    const newArray = arr.map((obj) => JSON.parse(JSON.stringify(obj)));
    return newArray
  };

  render() {

    return (
      <div className="cv-inputs" >
          <GeneralInfo liftStateToCVInput={this.liftStateToCVInput} />
          <EducationExp liftStateToCVInput={this.liftStateToCVInput} edExp={this.state.educationExp} copyArrayOfObj={this.copyArrayOfObj} />
          <PracticalExp liftStateToCVInput={this.liftStateToCVInput} practExp={this.state.practicalExp} copyArrayOfObj={this.copyArrayOfObj} />
      </div>
    );
  }
};

export default CVInput;
