import React from 'react';
import { shallow } from 'enzyme'

import Dashboard from "./Dashboard"

it("should render the Dashboard", () => {
  const wrapper = shallow(<Dashboard />)
  expect(wrapper).toHaveText("Dashboard")
})
