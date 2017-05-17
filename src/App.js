import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ParaSelector,
  EnableHTML
} from './components/'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      paras: 4,
      text: '',
      html: true
    }

    this.handler = this.handler.bind(this)
  }

  handler(e) {
    this.setState({html: e}, () => {
      this.getText()
    })
  }

  onChange(e) {
    this.setState({paras: e}, () => {
      this.getText()
    })
  }

  componentWillMount() {
    this.getText()
  }

  getText() {
    return fetch(`http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ text: data.text })
      }).then(data => {
        return this.state.text
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Text generator</h1>
        <ParaSelector onChange= {this.onChange.bind(this)} paras= {this.state.paras}/>
        <EnableHTML handler= {this.handler.bind(this)} html = {this.state.html}/>
        <div className="display">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default App;
