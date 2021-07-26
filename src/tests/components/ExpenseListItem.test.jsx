import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should Render the expense data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[2]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});