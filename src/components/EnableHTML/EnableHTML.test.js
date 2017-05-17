import React from 'react';
import ReactDOM from 'react-dom';
import EnableHTML from './EnableHTML';
import {shallow} from 'enzyme';

it('changes text', () => {
  const _EnableHTML = shallow(
    <EnableHTML />
  );
  const button = _EnableHTML.find('#EnableHTML')
  console.log(button)
});

