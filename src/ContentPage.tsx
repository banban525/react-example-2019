import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import { ContentPageStore } from "./ContentPageStore";
import { inject, observer } from "mobx-react";

interface ContentPageProps extends RouteComponentProps<{ id: string }> {
  contentPageStore?: ContentPageStore;
}

@inject("contentPageStore")
@observer
class ContentPage extends React.Component<ContentPageProps> {
  public componentDidMount = (): void => {
    if (this.props.contentPageStore === undefined) {
      return;
    }
    const id = parseInt(this.props.match.params.id, 10);
    this.props.contentPageStore.fetchData(id);
  };

  render(): JSX.Element {
    if (this.props.contentPageStore === undefined) {
      return <div />;
    }
    const store = this.props.contentPageStore;
    return (
      <div className="App">
        <Card style={{ width: 300, margin: 2 }}>
          <CardHeader title={store.data.title} subheader={store.data.date} />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {store.data.content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ContentPage;
