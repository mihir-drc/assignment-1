import React, { useState } from "react";
import TaskCard from "../../Components/User/Dashboard/TaskCard";
import ProjectCard from "../../Components/User/Dashboard/ProjectCard";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
export const Dashboard = () => {
  const [taskArray, settaskArray] = useState([
    {
      title: "To Do",
      count: 0,
      textColor: "#000",
      backgroundColor: "#1976D280",
    },
    {
      title: "In Progress",
      count: 0,
      textColor: "#000",
      backgroundColor: "#F9A82580",
    },
    {
      title: "Completed",
      count: 0,
      textColor: "#000",
      backgroundColor: "#388E3C80",
    },
    {
      title: "Overdue",
      count: 0,
      textColor: "#000",
      backgroundColor: "#D32F2F80",
    },
  ]);
  const [projectArray, setprojectArray] = useState([
    {
      title: "Total Projects",
      count: 0,
      textColor: "#000",
      backgroundColor: "#1976D280",
    },
    {
      title: "Active Projects",
      count: 0,
      textColor: "#000",
      backgroundColor: "#F9A82580",
    },
    {
      title: "Completed Projects",
      count: 0,
      textColor: "#000",
      backgroundColor: "#388E3C80",
    },
  ]);
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-gradient-to-br from-blue-500/50 to-indigo-600/50 shadow-lg border border-gray-200 mt-2 p-2 px-10 font-semibold h-[9rem] w-[60%] text-3xl pt-10">
          Welcome {localStorage.getItem("name")} !
        </div>
        <div className=" h-[9rem] bg-white border border-gray-500 rounded-md shadow-md mt-2 pt-3 px-4 w-[35%]  ">
          <div className="flex justify-between ">
            <div className="text-3xl font-bold">Contact Info</div>
            <div>
              <ModeEditIcon className="hover:cursor-pointer"></ModeEditIcon>
            </div>
          </div>
          <div className="pt-7">
            <div>Email : {localStorage.getItem("email")}</div>
            <div>Contact : {localStorage.getItem("name")}</div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-5 border border-gray-300">
        <span className="text-2xl font-bold">Tasks</span>
        <div className="flex gap-x-3">
          {taskArray.map((ele, index) => {
            return <TaskCard key={index} ele={ele}></TaskCard>;
          })}
        </div>
      </div>
      <div className="flex">
        <div className="mt-5 w-[50%] p-5 border border-gray-300">
          <span className="text-2xl font-bold">Projects</span>
          <div className="grid grid-cols-2 gap-x-3">
            {projectArray.map((ele, index) => {
              return <ProjectCard key={index} ele={ele}></ProjectCard>;
            })}
          </div>
        </div>
        <div className="mt-5 w-[50%] p-5 border border-gray-300">
          <div className="flex items-center gap-x-2">
            <span className="text-2xl font-bold">Notifications</span>
            <Badge badgeContent={1} color="error">
              <NotificationsIcon fontSize="medium" />
            </Badge>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
