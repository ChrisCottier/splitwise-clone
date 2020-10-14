import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './styles/settle-up-modal.css'
import { SETTLE_UP_MODAL } from '../actions/modals';
import { dateTimeObj } from '../utils'
import { payDebt } from '../actions/debts'

const DebtDetails = (props) => {
    const dispatch = useDispatch();
    const { userId } = useSelector(state => state.auth);

    const [payAmount, setPayAmount] = useState('')
    const { dateTime, debt } = props;

    const handleChange = (event) => {
        setPayAmount(event.target.value);
    }

    const submitPayment = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(payDebt({ userId, debtId: debt.id, payAmount }))

    }

    return (
        <div key={debt.id} className="settle-up-grid settle-up-debt">
            <span>{debt.lender.name}</span>
            <span>{debt.expense.title}</span>
            <span>{`${dateTime.dayOfWeek}, ${dateTime.month} ${dateTime.dayOfMonth}, ${dateTime.year}`}</span>
            <span>{`$${debt.amount}`}</span>
            <span>
                <form className="settle-up-form" onSubmit={submitPayment}>
                    <input
                        className="input"
                        placeholder={'Amount'}
                        value={payAmount}
                        onChange={handleChange}
                        name={'payAmount'}
                    ></input>
                    <button type="submit" className="button">Pay</button>


                </form>
            </span>
        </div>
    )
}

const SettleUpModal = () => {
    const dispatch = useDispatch();
    const { settleUpDisplay } = useSelector(state => state.modals);
    const { iOwe, transactions, errors } = useSelector(state => state.debts);


    const modalOff = () => {
        dispatch({ type: SETTLE_UP_MODAL, display: 'none' })
    }
    if (!iOwe) return null;
    return (
        <div className="modal" style={{ display: settleUpDisplay }}>
            <div className="modal-background" onClick={modalOff}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Settle A Debt</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={modalOff}
                    ></button>
                </header>
                <section className="modal-card-body">
                    {errors.map((error, ind) => {
                        return <p key={ind} className='failure'>{error}</p>
                    })}
                    {transactions.map(transaction => {
                        return (
                            <p key={transaction.id} className='success'>
                                {`You paid $${transaction.amount} to ${transaction.reciever.name}`}
                            </p>
                        )
                    })}
                    <div id="settle-up-container">
                        <header className="settle-up-grid settle-up-header">
                            <span>Lender</span>
                            <span>Expense</span>
                            <span>Date</span>
                            <span>Amount</span>
                            <span>Settle</span>
                        </header>
                        {iOwe.map(debt => {
                            if (debt.amount === '0.00') return <></>
                            const dateTime = dateTimeObj(debt.created_at);
                            return (
                                <DebtDetails key={debt.id} dateTime={dateTime} debt={debt}></DebtDetails>
                            )
                        })}

                    </div>

                </section>
                <footer className="modal-card-foot"></footer>
            </div>
        </div>
    );
}

export default SettleUpModal;