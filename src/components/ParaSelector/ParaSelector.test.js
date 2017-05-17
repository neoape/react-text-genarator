import React from 'react';
import ReactDOM from 'react-dom';
import {ParaSelector} from './ParaSelector';
import {shallow} from 'enzyme';

it('changes paragraphs amount', () => {
  const _ParaSelector = shallow(
    <ParaSelector />
  )
  _ParaSelector.setState({paras: 10})
  let input = _ParaSelector.find('input')
  expect(input.props().value).toBe(_ParaSelector.instance().state.paras)
});

