import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { fetchPost } from "../../../api/fetch";
const AddUserModal = ({
  isAddUserModalOpen,
  setisAddUserModalOpen,
  fetchUserData,
}) => {
  const [isSnackbarOpen, setisSnackbarOpen] = useState(false);
  const [snackBarInfo, setsnackBarInfo] = useState({
    severity: "success",
    message: "",
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "123",
      role: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const body = JSON.stringify(values);

      const response = await fetchPost(
        "admin/addUser",
        localStorage.getItem("token"),
        body
      );
      if (response.success) {
        setisSnackbarOpen(true);
        setsnackBarInfo({ severity: "success", message: response.message });
        setisAddUserModalOpen(false);
        fetchUserData();
        formik.resetForm();
      } else {
        setisSnackbarOpen(true);
        setsnackBarInfo({ severity: "error", message: response.message });
      }
    },
  });
  return (
    <>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => {
          setisSnackbarOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setisSnackbarOpen(false);
          }}
          severity={snackBarInfo.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarInfo.message}
        </Alert>
      </Snackbar>
      <Modal
        open={isAddUserModalOpen}
        onClose={() => {
          setisAddUserModalOpen(false);
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
            width: 700,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <div className="my-3">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="my-3">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="my-3">
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>

              <div className="w-[50%]">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formik.values.role}
                      name="role"
                      label="Age"
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="0" disabled>
                        Select Role
                      </MenuItem>
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="manager">Manager</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className="flex my-2 justify-center">
                <Button
                  color="primary"
                  variant="contained"
                  className="w-[40%] "
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddUserModal;
