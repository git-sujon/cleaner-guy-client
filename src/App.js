import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
