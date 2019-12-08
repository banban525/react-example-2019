//import { action, observable } from "mobx";

export interface BlogSummary {
  id: number;
  title: string;
  date: string;
  abstract: string;
}

export class AppStore {
  //@observable
  data: BlogSummary[] = [];

  //@action
  public fetchData = async (): Promise<void> => {
    const json = (await (
      await fetch("/api/summaries/")
    ).json()) as BlogSummary[];
    this.data = json;
  };
}
