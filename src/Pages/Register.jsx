import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const body = JSON.stringify(values);
      console.log(values);

      const request = await fetch("http://localhost:3001/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body,
      });
      const response = await request.json();
    },
  });
  return (
    <div className="w-full py-[5rem] flex justify-center ">
      <div className="w-[40%] p-5 shadow-lg bg-blue-100">
        <div className="text-2xl">Register</div>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            Already have an account ? &nbsp;
            <a
              href="/"
              className="hover:underline hover:cursor-pointer hover:text-red-600"
            >
              Sign in
            </a>
          </div>
          <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default Register;
