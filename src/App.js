import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Sign from "./Pages/Sign";
import Profile from "./components/Profile";
import Library from "./Pages/Library";

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
  }]
);

export default App;
