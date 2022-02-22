import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [navState, setNavState] = useState(false);
  const navItems = [
    {
      link: "about",
      title: "Overview",
    },
    {
      link: "contagion",
      title: "Contagion",
    },
    {
      link: "symptoms",
      title: "Symptoms",
    },
    {
      link: "solution",
      title: "Prevention",
    },
  ];

  return (
    <nav>
      <div className="container">
        <div className="brand">
          <div className="logo">
            <img src="assets/Logo.png" alt="" />
          </div>
          <div className="responsive-toggle">
            {navState ? (
              <i className="fas fa-bars" onClick={() => setNavState(false)}></i>
            ) : (
              <i className="fas fa-bars" onClick={() => setNavState(true)}></i>
            )}
          </div>
        </div>

        <div className="links" style={{ top: navState ? "-4rem" : "-40rem" }}>
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                   activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    id="nav-link"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
