import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Dashboard as UserDashboard } from "./Pages/User/Dashboard";
import { Dashboard as AdminDashboard } from "./Pages/Admin/Dashboard";
import { Tasks as UserTasks } from "./Pages/User/Tasks";
import { Projects as UserProjects } from "./Pages/User/Projects";
import Home from "./Components/Home";
import UserList from "./Pages/Admin/UserList";

const routes = new createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/admin",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "users",
        element: <UserList></UserList>,
      },
    ],
  },
  {
    path: "/user",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "tasks",
        element: <UserTasks></UserTasks>,
      },
      {
        path: "projects",
        element: <UserProjects></UserProjects>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
