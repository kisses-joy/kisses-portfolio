
import { Link } from "react-scroll";
import "./Navbar.css";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navCon">
      <nav>
        <Link
          className="nav-link"
          activeClass="active"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          smooth spy duration={500}>
          Home
        </Link>
        <Link className="nav-link" activeClass="active" to="skills" smooth spy duration={500}>
          Skills
        </Link>
        <Link className="nav-link" activeClass="active" to="certificates" smooth spy duration={500}>
          Certificates
        </Link>
      </nav>
      <div >
        <a
          href="https://www.facebook.com/joy.zeuqsav"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook color={"#FFF"} size={"25px"} />
        </a>
        <a
          href="./"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin color={"#FFF"} size={"25px"}/>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
