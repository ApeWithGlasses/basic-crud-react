import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/layouts/Home";
import Services from "./assets/components/layouts/Services";
import ListServices from "./assets/components/layouts/ListServices";
import EditService from "./assets/components/layouts/EditService";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Home />
    },
    {
      path: '/services',
      element: < Services />
    },
    {
      path: '/listServices',
      element: < ListServices />
    },
    {
      path: '/edit/:id',
      element: < EditService />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
