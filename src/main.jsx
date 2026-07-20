import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import Scrol from "./components/Scrol.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Scrol />
    <App />
    <Toaster position="top-right" richColors closeButton theme="dark" />
  </BrowserRouter>
);
