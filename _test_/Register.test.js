import React from 'react';
import Registration from '../App/Screens/Registration';
import renderer from 'react-test-renderer';
import fetch from 'node-fetch'
import fetchMock from 'fetch-mock';

const register_data = {
        "name":"mamata",
        "email":"mamta@gmail.com",
        "password":"mamta123",
        "phoneNumber":9757177475

}

it('works', () => {
    expect(1).toBe(1);
});


//snapshot testing for react Component
test("Register screen", () => {
    const snap = renderer.create(
        <Registration />
    ).toJSON();
    expect(snap).toMatchSnapshot()
})

describe("Register", () => {

    beforeEach(() => {
        fetchMock.reset();
    })
    afterEach(() => {
        fetchMock.restore();
    });

    test("success register", async () => {
        fetchMock.once("http://localhost:8000/src/router/registerUser", {
            status:200,
            body:JSON.stringify("Successfull:"),
            headers:{'Content-Type': 'application/json',}
        })
        const res = await fetch("http://localhost:8000/src/router/registerUser",
        {
            headers:{
                'Content-Type': 'application/json',
                 },
               method:'post',
               body: JSON.stringify(register_data),
        }).then(function(res){
            expect(res.status).toEqual(200)
            return res.json()
        }).then((json)=>{
            console.log(json);
            expect(json).toBe(json)
        })
       
    })


})

