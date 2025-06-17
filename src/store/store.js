import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import libraryReducer from "./librarySlice";
import papersReducer from "./papersSlice";
import homeReducer from "./homeSlice";
import headerReducer from "./headerSlice";
import cvReducer from "./cvSlice";
import appReducer from "./appSlice";

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#9C9C9C",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0000",
  },
});

const store = configureStore({
  reducer: {
    library: libraryReducer,
    papers: papersReducer,
    home: homeReducer,
    header: headerReducer,
    cv: cvReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
