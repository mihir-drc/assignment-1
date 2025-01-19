import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideBarLink = ({ link, icon, title, sideBarOpen }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return title == "Logout" ? (
    <NavLink
      end
      to={link}
      style={({ isActive }) => {
        return isActive ? { color: "#09122C", backgroundColor: "white" } : {};
      }}
      onClick={handleLogout}
      className={`px-2 gap-x-5 font-semibold hover:text-darkblue hover:bg-white py-3 text-xl transition-all flex ${
        sideBarOpen ? "" : "justify-center "
      }`}
    >
      {icon}
      {sideBarOpen ? (
        <div className="mx-2 flex text-lg items-center">{title}</div>
      ) : (
        ""
      )}
    </NavLink>
  ) : (
    <NavLink
      end
      to={link}
      style={({ isActive }) => {
        return isActive ? { color: "#09122C", backgroundColor: "white" } : {};
      }}
      className={`px-2 gap-x-5 font-semibold hover:text-darkblue hover:bg-white py-3 text-xl transition-all flex ${
        sideBarOpen ? "" : "justify-center "
      }`}
    >
      {icon}
      {sideBarOpen ? (
        <div className="mx-2 flex text-lg items-center">{title}</div>
      ) : (
        ""
      )}
    </NavLink>
  );
};

export default SideBarLink;
