import React from 'react';
import ReactDOM from 'react-dom';
import {EnableHTML} from './EnableHTML';
import {shallow} from 'enzyme';
import App from '../../App';

it('changes text', () => {
  const _App = shallow(
    <App />
  )
  const _EnableHTML = shallow(
    <EnableHTML handler= {_App.instance().handler.bind(_App)} html = {true}/>
  );
  let button = _EnableHTML.find('#EnableHTML')
  let text = _EnableHTML.instance().text
  expect(_EnableHTML.find('#EnableHTML').text()).toBe(_EnableHTML.instance().state.text)
  button.simulate('click')
  expect(_EnableHTML.find('#EnableHTML').text()).toBe(_EnableHTML.instance().state.text)
});

