import React from 'react';

import PageLayout from './PageLayout'
import {ExpenseHeader} from './Dashboard'


const ExpensesCenter= () => {
    return (
        <div>hi</div>
    )
}

const Expenses = () => {
    // return <div>hi</div>
    return (
        <PageLayout center={<ExpensesCenter></ExpensesCenter>}></PageLayout>
    )
}

export default Expenses;