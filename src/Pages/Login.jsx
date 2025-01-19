import React from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "123",
      role: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const body = JSON.stringify(values);
      console.log(values);

      const request = await fetch("http://localhost:3001/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body,
      });
      const response = await request.json();
      console.log(response.success);
      if (response.success) {
        console.log("hi");

        localStorage.setItem("token", response.token);
        localStorage.setItem("role", values.role);
        localStorage.setItem("name", response.name);
        localStorage.setItem("email", values.email);
        navigate("/" + values.role);
      } else {
        return null;
      }
    },
  });
  return (
    <div className="w-full py-[5rem] flex justify-center ">
      <div className="w-[40%] p-5 shadow-lg bg-blue-100">
        <div className="text-2xl">Login</div>
        <form onSubmit={formik.handleSubmit}>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
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
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="flex my-2 justify-center">
            Don't have an account ? &nbsp;
            <a
              href="/register"
              className="hover:underline hover:cursor-pointer hover:text-red-600"
            >
              Sign Up
            </a>
          </div>
          <div className="flex justify-center">
            <Button
              color="primary"
              variant="contained"
              className="w-[40%] "
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
