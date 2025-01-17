import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import TaskIcon from "@mui/icons-material/Task";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LogoutIcon from "@mui/icons-material/Logout";
const Home = () => {
  const [sideBarOpen, setsideBarOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          sideBarOpen ? "w-[20%]" : "w-[4%]"
        } h-screen text-white bg-darkblue transition-all`}
        onClick={() => {
          setsideBarOpen((prev) => {
            return !prev;
          });
        }}
      >
        <div className="w-full mb-5 text-end pe-2 hover:cursor-pointer">
          <MenuOpenIcon
            className="border border-white rounded p-0.5 mt-2"
            fontSize="large"
          ></MenuOpenIcon>
        </div>
        <div
          className={`hover:text-darkblue hover:bg-white py-3 text-xl transition-all ${
            !sideBarOpen ? "text-center" : ""
          }`}
        >
          <NavLink
            to="/task"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            className={`px-2 flex ${sideBarOpen ? "" : "justify-center"}`}
          >
            <TaskIcon></TaskIcon>
            {sideBarOpen ? (
              <div className="mx-2 flex items-center">Tasks</div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div
          className={`hover:text-darkblue hover:bg-white py-3 text-xl transition-all ${
            !sideBarOpen ? "text-center" : ""
          }`}
        >
          <NavLink
            to="/analysis"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            className={`px-2 flex ${sideBarOpen ? "" : "justify-center"}`}
          >
            <DonutLargeIcon></DonutLargeIcon>{" "}
            {sideBarOpen ? (
              <div className="mx-2 flex items-center">Analysis</div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
        <div
          className={`hover:text-darkblue hover:bg-white py-3 text-xl transition-all ${
            !sideBarOpen ? "text-center" : ""
          }`}
        >
          <NavLink
            to="/logout"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            className={`px-2 flex ${sideBarOpen ? "" : "justify-center"}`}
          >
            <LogoutIcon></LogoutIcon>
            {sideBarOpen ? (
              <div className="mx-2 flex items-center">Logout</div>
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
