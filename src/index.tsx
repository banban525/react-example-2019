import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppStore } from "./AppStore";
import ContentPage from "./ContentPage";
import { ContentPageStore } from "./ContentPageStore";
import { Provider } from "mobx-react";
import * as serviceWorker from "./serviceWorker";
import fetchMock from "fetch-mock";
import { BrowserRouter, Route } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    title: "[サーバー]タイトル",
    date: "2019-12-17",
    abstract: "アブストラクトです。",
    content: "これは本文です。"
  },
  {
    id: 2,
    title: "[サーバー]タイトルその2",
    date: "2019-12-17",
    abstract: "アブストラクトその2です。",
    content: "これは本文です。"
  }
];
fetchMock.get("/api/summaries/", dummyData);

fetchMock.get("/api/contents/1", dummyData[0]);
fetchMock.get("/api/contents/2", dummyData[1]);

const stores = {
  appStore: new AppStore(),
  contentPageStore: new ContentPageStore()
};
ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter basename={"/"}>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/contents/:id" component={ContentPage} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
