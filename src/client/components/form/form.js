import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SubmitIcon from '@material-ui/icons/Input';
// Components
import AccountCircle from '@material-ui/icons/AccountCircle';


// Styles
import '../../css/form.css';

// eslint-disable-next-line react/prefer-stateless-function
class FormUser extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
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

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:3200/findeat/api/user/newUser', newUser)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} className="bgF" />
          <Grid item xs={4}>
            <Grid item xs={11}>
              <h1 className="titleF">Create account</h1>
              <form onSubmit={this.onSubmit}>
                <TextField
                  placeholder="Jhon"
                  label="Name"
                  style={{ margin: 8 }}
                  fullWidth
                  type="text"
                  margin="normal"
                  onChange={this.onChangeName}
                  value={this.state.name}
                />
                <br />
                <TextField
                  placeholder="Jhon"
                  label="Username"
                  style={{ margin: 8 }}
                  fullWidth
                  type="text"
                  margin="normal"
                  onChange={this.onChangeUsername}
                  value={this.state.username}
                />
                <br />
                <TextField
                  placeholder="example@email.com"
                  label="Email"
                  style={{ margin: 8 }}
                  fullWidth
                  type="mail"
                  margin="normal"
                  onChange={this.onChangeEmail}
                  value={this.state.email}
                />
                <br />
                <TextField
                  placeholder="Password"
                  label="Password"
                  style={{ margin: 8 }}
                  fullWidth
                  type="password"
                  margin="normal"
                  onChange={this.onChangePassword}
                  value={this.state.password}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  <SubmitIcon />
                  Register
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FormUser;
