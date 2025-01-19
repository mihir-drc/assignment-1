import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import TaskIcon from "@mui/icons-material/Task";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SideBarLink from "./SideBarLink";
const Home = () => {
  const [sideBarOpen, setsideBarOpen] = useState(true);

  const sideBarLinks = {
    user: [
      {
        link: "",
        icon: <DashboardIcon className="my-auto"></DashboardIcon>,
        title: "Dashboard",
        sideBarOpen,
      },
      {
        link: "tasks",
        icon: <TaskIcon className="my-auto"></TaskIcon>,
        title: "Tasks",
      },
      {
        link: "projects",
        icon: <WorkOutlineIcon className="my-auto"></WorkOutlineIcon>,
        title: "Projects",
      },
      {
        link: "analysis",
        icon: <DonutLargeIcon className="my-auto"></DonutLargeIcon>,
        title: "Analysis",
      },
      {
        link: "/",
        icon: <LogoutIcon className="my-auto"></LogoutIcon>,
        title: "Logout",
      },
    ],
    admin: [
      {
        link: "",
        icon: <DashboardIcon className="my-auto"></DashboardIcon>,
        title: "Dashboard",
        sideBarOpen,
      },
      {
        link: "users",
        icon: (
          <SupervisedUserCircleIcon className="my-auto"></SupervisedUserCircleIcon>
        ),
        title: "Users",
      },
      {
        link: "tasks",
        icon: <TaskIcon className="my-auto"></TaskIcon>,
        title: "Tasks",
      },
      {
        link: "projects",
        icon: <WorkOutlineIcon className="my-auto"></WorkOutlineIcon>,
        title: "Projects",
      },
      {
        link: "analysis",
        icon: <DonutLargeIcon className="my-auto"></DonutLargeIcon>,
        title: "Analysis",
      },
      {
        link: "/",
        icon: <LogoutIcon className="my-auto"></LogoutIcon>,
        title: "Logout",
      },
    ],
  };

  const navigate = useNavigate();
  return (
    <div className="flex">
      <div
        className={`${
          sideBarOpen ? "w-[20%]" : "w-[4%]"
        } h-screen text-white bg-darkblue shadow-2xl transition-all duration-300`}
      >
        <div className="flex justify-between items-center my-5 ps-2  ">
          {sideBarOpen ? (
            <div
              className="flex items-center gap-x-3 hover:cursor-pointer"
              onClick={() => {
                navigate("/" + localStorage.getItem("role"));
              }}
            >
              <img
                src="/logo.png"
                alt="logo"
                className="rounded-full w-10 h-10"
              />

              <div className="text-2xl font-semibold whitespace-nowrap">
                Task Board
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className="hover:cursor-pointer mx-2"
            onClick={() => {
              setsideBarOpen((prev) => {
                return !prev;
              });
            }}
          >
            <MenuOpenIcon
              className="border border-white rounded p-0.5"
              fontSize="large"
            ></MenuOpenIcon>
          </div>
        </div>
        <div className="mt-6">
          {sideBarLinks[localStorage.getItem("role")].map((ele, index) => {
            return (
              <SideBarLink
                key={index}
                icon={ele.icon}
                link={ele.link}
                title={ele.title}
                sideBarOpen={sideBarOpen}
              ></SideBarLink>
            );
          })}
        </div>
      </div>
      <div className="px-10 py-2 bg-slate-100 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
