import React, { Component } from 'react'

class CommandForm extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    console.log(this.id)
    this.state = {
        "socket": props.socket,
        "value": ""
    };
  }

  handleChange = (event) => {
    this.setState({...this.state,value: event.target.value});
  };

  handleSubmit = (event) => {
    this.send(this.state.value)
    event.preventDefault();
  };

  send(command){
      this.state.socket.emit('new_input',
          {"command": command ,
            "terminal_id": this.id
          });
      this.state.value = ""
  }

  render() {
    return (
      <form className="command_form" onSubmit={this.handleSubmit}>
          <input autoFocus className="command_input"
                 placeholder="$ Insert your command"
                 type="text"
                 value={this.state.value}
                 onChange={this.handleChange} />
      </form>
    );
  }
}

export default CommandForm