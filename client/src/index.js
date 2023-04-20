import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { makeStore } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={makeStore()}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>
);
