import React from "react";
import './Certificates.css';
import Cert1 from '../assets/cert1.jpg';
import Cert2 from '../assets/cert2.jpg';

function Certificates() {
  return (
    <div id="certificates" className="certificates_con">
      <h1 className="">
        Certificates
      </h1>
      <div className="certificates">
        <div className="certificate">
          <img src={Cert1}  alt="" />
          <span>On-The-Job-Training Certificates</span>
        </div>
        <div className="certificate">
          <img src={Cert2}  alt="" />
          <span>Training in introduction to cloud agile and flexible computing service</span>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
