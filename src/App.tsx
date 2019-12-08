import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { AppStore } from "./AppStore";
import { inject, observer } from "mobx-react";

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
            <Card key={data.id} style={{ width: 300, margin: 2 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={data.title}
                subheader={data.date}
              />
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {data.abstract}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default App;
