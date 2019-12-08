import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppStore } from "./AppStore";
import { Provider } from "mobx-react";
import * as serviceWorker from "./serviceWorker";
import fetchMock from "fetch-mock";

const dummyData = [
  {
    id: 1,
    title: "[サーバー]タイトル",
    date: "2019-12-17",
    abstract: "アブストラクトです。"
  },
  {
    id: 2,
    title: "[サーバー]タイトルその2",
    date: "2019-12-17",
    abstract: "アブストラクトその2です。"
  }
];
fetchMock.get("/api/summaries/", dummyData);

const stores = {
  appStore: new AppStore()
};
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
