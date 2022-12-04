import React from "react";
import "./Nav.css"
const Nav = () => {
  return (
    <nav style={navStyle}>
      <div className="navbar">
          <div className="navLogo">
            <img src="./netflix.png"/>
          </div>
          <div className="barra">
            <ul>
              <li className="navSelect"><a href="#">Inicio</a></li>
              <li><a href="#">Series TV</a></li>
              <li><a href="#">Peliculas</a></li>
              <li><a href="#">Más recientes</a></li>
              <li><a href="#">Mi lista</a></li>
          </ul>
        </div> 
        </div>        
    </nav>
 );
};

export default Nav;

const navStyle = {
  display: "flex",
  height: "50px",
  background: "black",
  width: "100%",
};
