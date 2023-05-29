import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/layouts/Home";
import Services from "./assets/components/layouts/Services";
import ListServices from "./assets/components/layouts/ListServices";

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
      path: 'listServices',
      element: < ListServices />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
