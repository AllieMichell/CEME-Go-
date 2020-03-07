import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Input';

// eslint-disable-next-line react/prefer-stateless-function
class Btn extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary" href={this.props.link} type={this.props.tipe}>
        <Icon />
        {this.props.name}
      </Button>
    );
  }
}

export default Btn;
