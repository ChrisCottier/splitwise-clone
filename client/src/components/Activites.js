import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { apiUrl } from '../config';
import PageLayout from './PageLayout';
import { Comment, Debt, Expense, Group, Transaction } from './sub-components/ActivityTypes'
import './styles/dashboard.css';
import { getRecentActivity } from '../actions/user';


const RecentActivityCenter = (props) => {
    const dispatch = useDispatch();
    const { userId, name, token } = useSelector(state => state.auth);
    const [activityUpdated, setActivityUpdated] = useState(false);
    const { activity } = useSelector(state => state.users)

    useEffect(() => {
        if (userId === undefined) return;
        if (!activityUpdated) {
            dispatch(getRecentActivity(userId))
            setActivityUpdated(true)
        }
    }, [userId]);

    if (activity) {
        let currentUser = { userId, name };
        const { comments, debts, expenses, groups, transactions } = activity;

        const commentComponents = comments.map((comment) => <Comment key={comment.id} comment={comment} />);
        const debtComponents = debts.map((debt) => <Debt key={debt.id} debt={debt} currentUser={currentUser} />);
        const expenseComponents = expenses.map((expense) => <Expense key={expense.id} expense={expense} />);
        const groupComponents = groups.map((group) => <Group key={group.id} group={group} currentUser={currentUser} />);
        const transactionComponents = transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} currentUser={currentUser} />)

        const allActivityComponents = { // I have this ready for modularity if necessary
            comments: commentComponents,
            debts: debtComponents,
            expenses: expenseComponents,
            groups: groupComponents,
            transactions: transactionComponents,

        };
        return (
            <>
                <h1 style={{ fontSize: '30px' }}> Recent Activity </h1>
                <div style={{ width: '600px' }}>
                    <div>{commentComponents}</div>
                    <div>{debtComponents}</div>
                    <div>{expenseComponents}</div>
                    <div>{groupComponents}</div>
                    <div>{transactionComponents}</div>
                </div>
            </>
        );
    } else {
        return null;
    }
};

const RecentActivity = () => {
    return (
        <PageLayout center={<RecentActivityCenter></RecentActivityCenter>}></PageLayout>
    )
}
export default RecentActivity;
