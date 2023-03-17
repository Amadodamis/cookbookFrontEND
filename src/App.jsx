import Root from "./router/root";
import ErrorPage from "./error-page";
import AgregarReceta from "./components/agregarReceta/AgregarReceta";
import EditarReceta from "./components/editarRecetaComponents/EditarReceta"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { loader as getRecipeLoader } from "./services/getRecipe"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add",
        element: <AgregarReceta />
      },
      {
        path: "edit/:id",
        element: <EditarReceta />,
        loader: getRecipeLoader,
      },
      {
        path: "delete/:id",
        element: <div>Borraste una receta </div>
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
