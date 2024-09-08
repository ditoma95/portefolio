import {RouterProvider } from "react-router-dom"
import { router } from "./routes/Router"




const App = () => {
  return (
    <div className="bg-[#70372C]"> 
      <RouterProvider router={router} />

    </div>
  )
}

export default App