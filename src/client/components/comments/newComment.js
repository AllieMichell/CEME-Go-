import React from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Input
} from '@material-ui/icons';

class newComment extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      username: '',
      email: '',
      comment: '',
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeComment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const nComment = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      comment: this.state.comment,
    };
    axios.post('http://localhost:3200/handnote/api/comment/newComment', nComment)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      username: '',
      email: '',
      comment: '',
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid xs={3} />
          <Grid xs={6}>
            <form onSubmit={this.onSubmit}>
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
                onChange={this.onChangeName}
                value={this.state.name}
              />
              <TextField
                id="idUsername"
                label="Username"
                style={{ margin: 8 }}
                type="text"
                placeholder="Serverlie"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onChangeUsername}
                vlue={this.state.username}
              />
              <TextField
                id="idEmail"
                label="Email"
                style={{ margin: 8 }}
                type="mail"
                placeholder="example@email.com"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onChangeEmail}
                value={this.state.email}
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
      </div>
    );
  }
}


export default newComment;
