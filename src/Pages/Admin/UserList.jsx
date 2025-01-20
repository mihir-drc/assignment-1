import React, { useEffect, useState } from "react";
import { fetchGet } from "../../api/fetch";
import { Badge, Button } from "@mui/material";
import AddUserModal from "../../Components/Admin/UserList/AddUserModal";
import Datatable from "../../Components/DataTable";
import Requests from "../../Components/Admin/UserList/Requests";

const UserList = () => {
  const [userData, setuserData] = useState([]);
  const [pendingUsers, setpendingUsers] = useState([]);
  const [isAddUserModalOpen, setisAddUserModalOpen] = useState(false);
  const [isRequestsModalOpen, setisRequestsModalOpen] = useState(false);
  const columns = [
    { field: "index", headerName: "Sr no.", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "role",
      headerName: "Role",
      width: 90,
    },
  ];
  const fetchUserData = async () => {
    const response = await fetchGet(
      "admin/userData",
      localStorage.getItem("token")
    );
    const modiUsers = response.users.map((obj, index) => {
      return {
        ...obj,
        id: obj._id,
        role: obj.role.charAt(0).toUpperCase() + obj.role.slice(1),
        index: index + 1,
      };
    });
    const modiPendingUser = response.pendingUsers.map((obj, index) => {
      return {
        ...obj,
        id: obj._id,
        role: obj.role.charAt(0).toUpperCase() + obj.role.slice(1),
        index: index + 1,
      };
    });
    setuserData(modiUsers);
    setpendingUsers(modiPendingUser);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <AddUserModal
        fetchUserData={fetchUserData}
        isAddUserModalOpen={isAddUserModalOpen}
        setisAddUserModalOpen={setisAddUserModalOpen}
      ></AddUserModal>
      <Requests
        isRequestsModalOpen={isRequestsModalOpen}
        setisRequestsModalOpen={setisRequestsModalOpen}
        pendingUsers={pendingUsers}
      ></Requests>
      <div className="text-end flex justify-between ">
        <div className="text-3xl font-bold">Users</div>
        <div className="flex gap-x-3">
          <div>
            <Button
              variant="contained"
              onClick={() => {
                setisAddUserModalOpen(true);
              }}
            >
              Add User
            </Button>
          </div>
          <div>
            <Badge badgeContent={pendingUsers.length} color="error">
              <Button
                variant="contained"
                onClick={() => {
                  setisRequestsModalOpen(true);
                }}
              >
                Requests
              </Button>
            </Badge>
          </div>
        </div>
      </div>
      <div className="my-5">
        <Datatable columns={columns} rows={userData}></Datatable>
      </div>
    </div>
  );
};

export default UserList;
