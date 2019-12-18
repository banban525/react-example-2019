import React from "react";
import "./App.css";
import { AppStore } from "./AppStore";
import { inject, observer } from "mobx-react";
import SummaryItem from "./SummaryItem";

interface AppProps {
  appStore?: AppStore;
}

@inject("appStore")
@observer
class App extends React.Component<AppProps> {
  // コンポーネントが構築される直前に呼ばれる
  public componentDidMount = (): void => {
    if (this.props.appStore === undefined) {
      return;
    }
    this.props.appStore.fetchData();
  };

  render(): JSX.Element {
    // appStoreはundefindedである場合があるので、その時は何も表示しない
    if (this.props.appStore === undefined) {
      return <div />;
    }

    // this.props.appStore.dataに従ってWebページを構築する
    return (
      <div className="App">
        {this.props.appStore.data.map(data => {
          return (
            <SummaryItem
              key={data.id}
              url={`./contents/${data.id}`}
              title={data.title}
              date={data.date}
              abstract={data.abstract}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
