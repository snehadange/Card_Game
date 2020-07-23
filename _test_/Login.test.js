import React from 'react';
import renderer from 'react-test-renderer';
import fetch from 'node-fetch'
import fetchMock from 'fetch-mock';
import LoginScreen from '../App/Screens/LoginScreen'




const data = {
  "email": 'react@gmail.com',
  "password":'react1234'
}

it('works', () => {
  expect(1).toBe(1);
});

//snapshot testing for react Component
test("Login screen",()=>{
  const snap=renderer.create(
     <LoginScreen/>
  ).toJSON();
  expect(snap).toMatchSnapshot()
}) 

describe("isAuthenticated", () => {
  // resets your mocks so tests don't bleed into each other

  beforeEach(() => {
    fetchMock.reset();
  })
  afterEach(() => {
    fetchMock.restore();

  });

  test("success",async () => {
    fetchMock.once("http://localhost:8000/src/router/login",{
      status:200,
      body: JSON.stringify("Login:"),
      statusText: 'success',  
      headers: {'Content-Type': 'application/json'},
    });
    const res = await fetch("http://localhost:8000/src/router/login",{
      headers:{
        'Content-Type': 'application/json',
         },
       method:'post',
       body: JSON.stringify(data),
    }).then(function (res) {
      expect(res.status).toEqual(200); // Pass
      return res.json(); // return here
    }).then((json)=>{
      console.log(json); // print undefine
      expect(json).toEqual(json); 
    })
    
  })

})











