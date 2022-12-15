import React from "react";
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import Profile from "../assets/profile.png";
import "./Hero.css";

function Hero() {
  return (
    <div
      id="hero"
      className="hero-con"
    >
      <div className="qoutes">
        <h1 className="">
          Hello, I&apos;m Princess.
        </h1>
        <p className="">
          A passionate computer science graduating student.
        </p>
        <div >
          <Link
            to="skills"
            smooth
            spy
            duration={500}
            className="see-more-btn"
          >
            See More
            <span className="">
              <BsArrowRightShort size={25} color="#FFF" />
            </span>
          </Link>
        </div>
      </div>
      <div className="">
        <img style={{
          width: "400px", 
          height: "400px", 
          objectFit: "cover",
          borderRadius: "50%"}} src={Profile} alt="Kisses" />
      </div>
    </div>
  );
}

export default Hero;
