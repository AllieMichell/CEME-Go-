import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Divider,
  Button,
} from '@material-ui/core';
import {
  Delete,
  Edit
} from '@material-ui/icons';

// STYLES
import '../../css/card.css';

// COMPONENTS
import DeleteButton from '../dialog/confirmDialog';

class PersonList extends React.Component {
    state = {
      persons: []
    }

    componentDidMount() {
      axios.get('http://localhost:3200/findeat/api/user/usersList')
        .then((res) => {
          const persons = res.data;
          this.setState({ persons });
        });
    }

    render() {
      return (
        <div>
          <br />
          <Typography color="primary" variant="h4" gutterBottom>
            Users List
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={1} />
            <Grid xs={10}>
              <div className="deck">
                {this.state.persons.map(person => (
                  <Card className="cardUsers">
                    <CardContent>
                      <Typography color="primary" variant="h6" component="h2" gutterBottom>
                        {person.username}
                      </Typography>
                      <div>
                        <Grid container spacing={1}>
                          <Grid item xs={1}>
                            <Avatar className="avatar">U</Avatar>
                          </Grid>
                          <Grid item xs={11}>
                            {person.name}
                            <br />
                            {person.email}
                          </Grid>
                        </Grid>
                      </div>
                      <hr />
                      <Typography variant="body2" component="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" name={person.name}>
                    Edit
                        <Edit />
                      </Button>
                      {/* <Button size="small" color="secondary">
                  Delete
                    <Delete />
                  </Button> */}
                      <DeleteButton />
                    </CardActions>
                  </Card>
                ))}
              </div>
            </Grid>
            <Grid xs={1} />
          </Grid>
        </div>
      );
    }
}

export default PersonList;
