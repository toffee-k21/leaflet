import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Sign from "./Pages/Sign";

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/Home",
    element: <Home />,
  }]
);

export default App;
