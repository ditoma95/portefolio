import { createBrowserRouter, Outlet } from "react-router-dom";
import Services from "../components/Services/Services";
import Projets from "../components/Projets/Projets";
import Skill from "../components/Skills/Skill";
import Ditoma from "../components/Ditoma";
import Cv from "../components/Projets/Cv";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Rout />,
  
      children: [
        {
          path: 'skill',
          element: <Skill />,
        },
        {
          path: 'cv',
          element: <Cv />,
        },
        {
          path: 'services',
          element: <Services />,
        },
        {
          path: 'projet',
          element: <Projets />,
        },
      ]
  
    }
])
  
export function Rout () {
    return <>
      <Ditoma />
      <div>
        <Outlet />
      </div>
  
    </>
  }
  