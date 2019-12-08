import { AppStore } from "./AppStore";
import fetchMock from "fetch-mock";

const dummyData = [
  {
    id: 1,
    title: "タイトル",
    date: "2019-12-17",
    abstract: "アブストラクトです。"
  },
  {
    id: 2,
    title: "タイトルその2",
    date: "2019-12-17",
    abstract: "アブストラクトその2です。"
  }
];
fetchMock.get("/api/summaries/", dummyData);

test("fetchData test", () => {
  const target = new AppStore();
  target.fetchData().then(() => {
    expect(target.data).toEqual(dummyData);
  });
});
