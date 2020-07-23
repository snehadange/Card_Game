import React from 'react';

import renderer from 'react-test-renderer';
import FirstScreen from '../App/Screens/FirstScreen';

it('works', () => {
    expect(1).toBe(1);
  });

test("First screen",()=>{
  const snap=renderer.create(
     <FirstScreen/>
  ).toJSON();
  expect(snap).toMatchSnapshot()
})  