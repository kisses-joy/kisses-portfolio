/* eslint-disable react/prop-types */
import React from "react";

function Skill({ Icon, Title }) {
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="skill">
        <Icon color="#bc1970" size={25} className="skill-icon" />
        <span className="title-font font-medium text-white">{Title}</span>
      </div>
    </div>
  );
}

export default Skill;
