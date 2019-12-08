import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import "./App.css";

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Card style={{ width: 300, margin: 2 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="タイトル"
            subheader="2019-12-17"
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              アブストラクトです。
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: 300, margin: 2 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="タイトルその2"
            subheader="2019-12-17"
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              アブストラクトその2です。
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
