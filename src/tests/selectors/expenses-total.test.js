import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("Should check if empty array returns 0", () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test("Should return total for single value", () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(150);
});

test("Should return total if expenses array is passed", () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(19158.63);
});