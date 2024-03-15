import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Sign from "./Pages/Sign";
import Profile from "./components/Profile";
import Library from "./Pages/Library";
import UploadProfilePic from "./components/UploadProfilePic";

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    path: "/Home",
    element: <Home />,
  },{
    path:"/profile",
    element: <Profile />
  },{
    path:'/library',
    element: <Library />
  },{
    path:'/uploadprofile',
    element: <UploadProfilePic />
  }]
);

export default App;
