import React, { useState } from "react";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Logo from "./../assets/logo.png";

function Navigation() {
  const location = useLocation();

  const isRegisterPage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      {isRegisterPage || isLoginPage ? null : (
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineAppstore onClick={showSidebar} />
            </Link>
            <div className="navbar-form">
              <h1 style={{ color: "white", fontFamily: "monospace" }}>
                Ruinz Corp
              </h1>
            </div>
          </div>

          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <IoIcons.IoCloseSharp />
                </Link>
              </li>
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="profile_content">
              <div className="profile">
                <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                  <div className="profile_details">
                    <img src={Logo} alt="profile logo" />
                    <div className="name_job">
                      <div className="name">Profile</div>
                      <div className="job">Posisi</div>
                    </div>
                  </div>
                </Link>
                <Link to="/" className="bx bx-log-out" id="log_out">
                  <AiIcons.AiOutlineLogout />
                </Link>
              </div>
            </div>
          </nav>
        </IconContext.Provider>
      )}
    </div>
  );
}
export default Navigation;
