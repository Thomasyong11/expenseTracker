import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="b567f3d5-35aa-420f-85f1-da44dcee167f" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
