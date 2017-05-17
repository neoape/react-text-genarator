import React, { Component } from 'react'; 

export class EnableHTML extends Component {

  constructor(props){
    super(props)
    this.state={
      html: props.html,
      text: 'Disable HTML'
    }
  }

  toggle() {
    this.setState({
      html: !this.props.html,
      text: this.state.text == 'Disable HTML' ? 'Enable HTML': 'Disable HTML'
    }, () => {
      this.props.handler(this.state.html)
    })
  }

  render() {
    return (
      <div className="EnableHTML">
        <label htmlFor="EnableHTML">EnableHTML:</label>
        <button id="EnableHTML" onClick={this.toggle.bind(this)}>{this.state.text}</button>
      </div>
    );
  }
}
