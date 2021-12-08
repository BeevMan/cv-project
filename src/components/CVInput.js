import React, { Component } from "react";

import GeneralInfo from "./GeneralInfo";

import EducationExp from "./EducationExp";

import PracticalExp from "./PracticalExp";



class CVInput extends Component {
  constructor(props) {
      super(props);

      this.updateGeneralInfo = this.updateGeneralInfo.bind(this);

      this.state = {
        generalInfo: { /*
          firstName: '',
          lastName: '',
          email: '',
          phone: 0 */
        },
        educationExp: [
          { /*
            name: ,
            city: ,
            degree: ,
            startDate: ,
            endDate: */
          },
        ],
        practicalExp: [
          { /*
            title: ,
            name: ,
            city: ,
            startDate: ,
            endDate: */ 
          }
        ],
      };
  };

  updateGeneralInfo(e) {
    console.log(this.state.generalInfo);
    const name = e.target.name;
    const value = e.target.value;
    let editInfo = this.state.generalInfo;

    if(name === 'first-name') {
      editInfo.firstName = value;
      this.setState({generalInfo: editInfo})
    }
    else if(name === 'last-name') {
      editInfo.lastName = value;
      this.setState({generalInfo: editInfo})
    } 
    else if(name === 'email') {
      editInfo.email = value;
      this.setState({generalInfo: editInfo})
    } 
    else if(name === 'phone') {
      editInfo.phone = value;
      this.setState({generalInfo: editInfo})
    } 
    else {
      console.log('unkown general info being changed')
    }
    console.log(this.state.generalInfo)
  }

  render() {

    return (
      <div className="cv-inputs" >
          <GeneralInfo updateGeneralInfo={this.updateGeneralInfo} />
          <EducationExp />
          <PracticalExp />
      </div>
    );
  }
};

export default CVInput;
