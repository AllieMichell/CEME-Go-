import React from 'react';
import {
  Grid
} from '@material-ui/core';

import newComment from './newComment';

class Comments extends React.Component {
  render() {
    return (
      <div>
        <newComment />
      </div>
    );
  }
}

export default Comments;
