import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export const Dashboard = () => {
  return (
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
  );
};
