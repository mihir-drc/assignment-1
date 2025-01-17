import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Dashboard as UserDashboard } from "./Pages/User/Dashboard";
import Home from "./Pages/User/Home";
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
    path: "/user",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
