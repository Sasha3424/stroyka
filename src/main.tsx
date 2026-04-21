import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

/* Старые ссылки вида /#/cart → нормальный путь /cart (BrowserRouter). */
if (typeof window !== "undefined") {
  const h = window.location.hash;
  if (h.startsWith("#/") && h.length > 2) {
    window.history.replaceState(null, "", h.slice(1) + window.location.search);
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

