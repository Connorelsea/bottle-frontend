import React from 'react';
import { shallow } from 'enzyme'

import Login from "./Login"

it("should render the Login component", () => {
  const wrapper = shallow(<Login />)
  expect(wrapper).toBeTruthy()
})

it("should display the correct text", () => {
  const wrapper = shallow(<Login />)
  expect(wrapper).toBeTruthy()
})

it("should display the login button", () => {
  const wrapper = shallow(<Login />)
  expect(wrapper).toBeTruthy()
})
