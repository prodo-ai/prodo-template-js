import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import { model } from "../src/model";
import { createMemoryHistory } from "history";

describe("App", () => {
  it("can render App without crashing", async () => {
    const { Provider } = model.createStore({
      route: {
        history: createMemoryHistory(),
      },
      initState: {},
    });

    render(
      <Provider>
        <App />
      </Provider>,
    );
  });
});
