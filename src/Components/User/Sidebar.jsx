import React from "react";

export const Sidebar = () => {
  return (
    <>
      <div className="bg-black">
        <NavLink
          to="/user"
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
        >
          Home
        </NavLink>
      </div>
      <div className="bg-black">
        <NavLink
          to="/user1"
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
        >
          About
        </NavLink>
      </div>
      <div className="bg-black">
        <NavLink
          to="/user2"
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};
