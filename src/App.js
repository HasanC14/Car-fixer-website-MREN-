import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/PublicRoutes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto" data-theme="dark">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
