import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white ">
      <Navbar />
      <div className="flex-grow">
        <Outlet /> 
      </div>
      <Footer/>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;