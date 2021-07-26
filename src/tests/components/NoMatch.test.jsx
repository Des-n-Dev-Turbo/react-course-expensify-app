import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NoMatch from '../../components/NoMatch';

test('Should render error page', () => {
    const wrapper = shallow(<NoMatch />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});