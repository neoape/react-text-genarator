import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders text', () => {
  const app = shallow(
    <App />
  );
  const display = app.find('.display')
  return app.instance().getText().then(data => {
    expect(display.text()).toEqual(data)
  })
});

