import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp, FaCss3, FaHtml5 } from "react-icons/fa";
import Skill from "../components/Skill";
import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="skills-con">
      <h1 className="">
        Developer Skills
      </h1>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <Skill Icon={FaHtml5} Title="HTML" />
        <Skill Icon={FaCss3} Title="CSS" />
        <Skill Icon={IoLogoJavascript} Title="JavaScript" />
        <Skill Icon={FaPhp} Title="PHP" />
      </div>
    </div>
  );
}

export default Skills;
