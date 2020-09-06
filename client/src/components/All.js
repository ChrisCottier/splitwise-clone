import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { apiUrl } from '../config';

// import './styles/dashboard.css';
import './styles/page-layout.css'
import { EXPENSE_MODAL } from '../actions/modals'
import PageLayout from './PageLayout'
import '.././components/styles/dashboard.css'
import Expense from './sub-components/Expenses'
import { getExpenses } from '../actions/all';
import { getRecentActivity } from '../actions/user';
import Navbar, {SideNav} from './Navbar';
import AddFriend from './AddFriend';

export const ExpenseHeader = (props) => {
  const { title } = props;
  const dispatch = useDispatch();

  const showExpenseModal = () => {
    dispatch({ type: EXPENSE_MODAL, display: "block" })
  }

  return (
    <div className="dashboard-header">
      <div className="title is-5">{title}</div>
      <div className="buttons">
        <button className="button add-expense-button is-warning" onClick={showExpenseModal}>Add an Expense</button>
        <button className="button settle-up-button">Settle Up</button>
      </div>
    </div>
  )
}

const All = (props) => {
  const dispatch = useDispatch();
  const { userId, name, token } = useSelector(state => state.auth);
  const [activityUpdated, setActivityUpdated] = useState(false);
  const { activity } = useSelector(state => state.users)

  useEffect(() => {
    if (userId === undefined) return;
    if (!activityUpdated) {
      // dispatch(getExpenses(userId))
      dispatch(getRecentActivity(userId))
      setActivityUpdated(true)
    }
  }, [userId]);



  if (activity) {
    let currentUser = { userId, name };
    const { expenses } = activity;

    const expenseComponents = expenses.map((expense) => <Expense key={expense.id} expense={expense} />);

    const allActivityComponents = { 
      expenses: expenseComponents,
    };
    return (
      <>
        <Navbar/>
        <div className='container is-widescreen'>
        </div>
        <div className='columns'>
          <div id='left-column' className='column is-one-fifth'>
            <SideNav/>
            <AddFriend />
          </div>
          <div id='center-column' className='column is-three-fifths'>
            <ExpenseHeader title={'All Expenses'}/>
          </div>
          <div className='column is-one-fifth'>
            <p>YOUR TOTAL BALANCE</p>
            <div> you are owed</div>
            <div>$8625.00</div>
          </div>

        </div>
        <div>{expenseComponents}</div>
      </>
    );
  } else {
    return null;
  }

};

export default All