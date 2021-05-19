import { useState } from 'react';
import './Expenses.css';
import './ExpensesFilter.css';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
      const [filteredYear, setFilteredYear] = useState('2020');
      const filterChangeHandler = selectYear => {
            setFilteredYear(selectYear);
      }

      const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

      return (
            <Card className="expenses">
                  <ExpensesFilter
                        selected={filteredYear}
                        onChangeFilter={filterChangeHandler} />
                  <ExpensesChart expenses={filteredExpenses} />
                  <ExpensesList expenses={filteredExpenses} filteredYear={filteredYear} />
            </Card>
      );

}

export default Expenses;
