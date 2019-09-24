import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { model } from "./model";

import "./styles.css";

const { Provider } = model.createStore({
  logger: true,
  initState: {},
});

const render = () => {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById("root"),
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}

render();
