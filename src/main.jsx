import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router.jsx";
import Contexts from "./provider/Contexts.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contexts>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Contexts>
  </StrictMode>
);
