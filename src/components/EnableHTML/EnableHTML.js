import React, { Component } from 'react'; 

export class EnableHTML extends Component {

  constructor(props){
    super(props)
    this.state={
      html: props.html
    }
    this.text = 'Disable HTML'
  }

  toggle() {
    this.setState({html: !this.props.html}, () => {
      this.text = this.state.html ? 'Disable HTML' : 'Enable HTML'
      this.props.handler(this.state.html)
    })
  }

  render() {
    return (
      <div className="EnableHTML">
        <label htmlFor="EnableHTML">EnableHTML:</label>
        <button id="EnableHTML" onClick={this.toggle.bind(this)}>{this.text}</button>
      </div>
    );
  }
}
