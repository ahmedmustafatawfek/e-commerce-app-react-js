import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TokenContextProvider from "./context/tokenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContextProvider from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let query = new QueryClient();
root.render(
  <CartContextProvider>
    <QueryClientProvider client={query}>
      <TokenContextProvider>
        <App />
      </TokenContextProvider>
    </QueryClientProvider>
  </CartContextProvider>
);
