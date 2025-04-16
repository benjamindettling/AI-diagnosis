import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App";
import "@picocss/pico/css/pico.min.css";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Header />
      <App />
      <Footer />
  </React.StrictMode>,
);
