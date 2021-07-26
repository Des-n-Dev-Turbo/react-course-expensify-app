import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddPage } from '../../components/AddPage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push : jest.fn() };
    wrapper = shallow(<AddPage onSubmit={onSubmit} history={history} />);
});

test('Should test add page', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

/*
test('Should test onSubmit',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toLastHaveBeenCalledWith('/');
    expect(onSubmit).toLastHaveBeenCalledWith(expenses[2]);
});
*/