import React, { Component } from "react";

import GeneralInfo from "./GeneralInfo";

import EducationExp from "./EducationExp";

import PracticalExp from "./PracticalExp";



class CVInput extends Component {
  constructor(props) {
      super(props);
  };

  render() {

    return (
      <div className="cv-inputs" >
          <GeneralInfo />
          <EducationExp />
          <PracticalExp />
      </div>
    );
  }
};

export default CVInput;
