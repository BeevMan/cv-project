import React, { Component } from "react";

import GeneralInfo from "./GeneralInfo";

import EducationExp from "./EducationExp";

import PracticalExp from "./PracticalExp";



class CVInput extends Component {
  constructor(props) {
      super(props);

      this.liftStateToCVInput = this.liftStateToCVInput.bind(this);

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
          },*/
        ],
        practicalExp: [
          /*{
            title: ,
            name: ,
            city: ,
            startDate: ,
            endDate: 
          } */
        ],
      };
  };

  liftStateToCVInput(name, value) {
    this.setState({[name]: value});
  };

  render() {

    return (
      <div className="cv-inputs" >
          <GeneralInfo liftStateToCVInput={this.liftStateToCVInput} />
          <EducationExp />
          <PracticalExp />
      </div>
    );
  }
};

export default CVInput;
