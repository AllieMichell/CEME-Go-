import React from 'react';
import axios from 'axios';
import '../../css/comment.css';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';
import {
  Favorite,
  Share,
  ExpandMore,
  MoreVert,
  ThumbUp,
  Input,
} from '@material-ui/icons';
import newComment from './newComment';
// eslint-disable-next-line react/prefer-stateless-function
class CardComment extends React.Component {
    state = {
      comments: []
    }

    componentDidMount() {
      axios.get('http://localhost:3200/handnote/api/comment/commentsList')
        .then((res) => {
          const comments = res.data;
          this.setState({ comments });
        });
    }

    render() {
      return (
        <div className="padding">
          <Grid container spacing={2}>
            <Grid xs={3} />
            <Grid xs={6}>
              <form>
                <TextField
                  id="idName"
                  label="Name"
                  style={{ margin: 8 }}
                  type="text"
                  placeholder="Carlos"
                // helperText="Full width!"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
                <TextField
                  id="idComment"
                  label="Comment"
                  style={{ margin: 8 }}
                  type="text"
                  placeholder="Comment ..."
                    // helperText="Full width!"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.onChangeComment}
                  value={this.state.comment}
                  />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  >
                  <Input />
                    Add Comment
                </Button>
              </form>
            </Grid>
            <Grid xs={3} />
          </Grid>
          {this.state.comments.map(comment => (
            <Grid container spacing={2}>
              <Grid xs={3} />
              <Grid xs={6}>
                <Card className="cardComment">
                  <CardHeader
                    className="background"
                    avatar={(
                      <Avatar aria-label="recipe" className="avatar">A</Avatar>
                  )}
                    action={(
                      <IconButton aria-label="settings">
                        <MoreVert />
                      </IconButton>
                  )}
                    title={comment.name}
                    subheader={comment.date}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {comment.comment}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className="media"
                    image="C:/Users/allie/Desktop/Projects/Find-eat/src/client/images/react.png"
                    title="React image"
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="like" color="primary">
                      <ThumbUp />
                    </IconButton>
                    <IconButton aria-label="favorites" color="secondary">
                      <Favorite />
                    </IconButton>
                    <IconButton aria-label="share" color="inherit">
                      <Share />
                    </IconButton>
                  </CardActions>
                </Card>
                <Grid xs={3} />
              </Grid>
            </Grid>

          ))}
        </div>
      );
    }
}

export default CardComment;
