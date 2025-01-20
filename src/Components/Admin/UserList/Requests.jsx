import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import DataTable from "../../DataTable";
import { fetchGet } from "../../../api/fetch";

const Requests = ({
  isRequestsModalOpen,
  setisRequestsModalOpen,
  pendingUsers,
}) => {
  const approveUser = async (id) => {
    const response = await fetchGet(
      "admin/approveUser?id=" + id,
      localStorage.getItem("token")
    );
  };
  const rejectUser = (id) => {
    console.log(id);
  };
  const columns = [
    { field: "index", headerName: "Sr no.", width: 130 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        console.log(params.id);

        return (
          <div className="flex gap-x-3 mt-2">
            <Button
              onClick={() => {
                approveUser(params.id);
              }}
              color="success"
              variant="contained"
            >
              Approve
            </Button>
            <Button
              onClick={() => {
                rejectUser(params.id);
              }}
              color="error"
              variant="contained"
            >
              Reject
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Modal
      open={isRequestsModalOpen}
      onClose={() => {
        setisRequestsModalOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Manage Requests
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <DataTable rows={pendingUsers} columns={columns}></DataTable>
        </Typography>
      </Box>
    </Modal>
  );
};

export default Requests;
