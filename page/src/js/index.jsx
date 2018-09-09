import React from "react";
import configureStore from "./store/index";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import route from "./routes"

let store = configureStore();
let root = document.getElementsByClassName("root")[0];

ReactDom.render(
    <Provider store={store}>
        {route}
    </Provider>
,root)

