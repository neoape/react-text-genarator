import React, { Component } from 'react'; 

export class ParaSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      paras: props.paras
    }
  }

  onChange(e) {
    this.setState({paras: e.target.value}, ()=> {
      this.props.onChange(this.state.paras)
    })
  }

  render() {
    return (
      <div className="ParaSelector">
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input value={this.state.paras} onChange ={this.onChange.bind(this)}></input>
      </div>
    );
  }
}
