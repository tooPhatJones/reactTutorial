import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {testComponent} from './testComponent'
import React from 'react';

configure({ adapter: new Adapter() });


it("renders correctly", () => {
  const wrapper = shallow(
    <testComponent />
  );
  expect(wrapper).toMatchSnapshot();
});

















