import React from 'react';
import TextField from '@material-ui/core/TextField';

// eslint-disable-next-line react/prefer-stateless-function
class Input extends React.Component {
  render() {
    return (
      <TextField
        placeholder={this.props.place}
        label={this.props.label}
        style={{ margin: 8 }}
        // helperText="Full width!"
        fullWidth
        type={this.props.type}
        margin="normal"
        onChange={this.props.change}
        name={this.props.name}
            />
    );
  }
}

export default Input;
