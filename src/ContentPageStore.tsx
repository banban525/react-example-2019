import { action, observable } from "mobx";

interface BlogContent {
  id: number;
  title: string;
  date: string;
  content: string;
}

export class ContentPageStore {
  @observable
  data: BlogContent = {
    id: 0,
    title: "",
    date: "",
    content: ""
  };

  @action
  public fetchData = async (id: number): Promise<void> => {
    const json = (await (
      await fetch(`/api/contents/${id}`)
    ).json()) as BlogContent;
    this.data = json;
  };
}
