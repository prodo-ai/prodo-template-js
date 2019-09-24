import { createModel } from "@prodo/core";
import loggerPlugin from "@prodo/logger";

export const model = createModel().with(loggerPlugin);
export const { state, watch, dispatch } = model.ctx;
