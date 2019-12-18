import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

interface SummaryItemProps {
  title: string;
  date: string;
  abstract: string;
  url: string;
}

class SummaryItem extends React.Component<SummaryItemProps> {
  render(): JSX.Element {
    return (
      <Card style={{ width: 300, margin: 2 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Link to={this.props.url}>{this.props.title}</Link>}
          subheader={this.props.date}
        />
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.props.abstract}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default SummaryItem;
