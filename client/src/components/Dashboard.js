import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";

import "./styles/dashboard.css";
import { EXPENSE_MODAL } from "../actions/modals";
import { getUserDebts } from "../actions/debts";
import PageLayout from "./PageLayout";

export const ExpenseHeader = (props) => {
  const { title } = props;
  const dispatch = useDispatch();

  const showExpenseModal = () => {
    dispatch({ type: EXPENSE_MODAL, display: "block" });
  };

  return (
    <>
      <div className="month-divider">
        <div className="dashboard-header">
          <div className="title is-5">{title}</div>
          <div className="buttons">
            <div className="composite-button">
              <button
                className="button add-expense-button"
                onClick={showExpenseModal}
              >
                <p>Add an expense</p>
              </button>
              <button className="button caret">
                <a className="caret">
                  <span className="caret">
                    <i className="fa fa-caret-down"></i>
                  </span>
                </a>
              </button>
            </div>
            <div className="settle-up">
              <button className="button settle-up-button">
                <p>Settle up</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Balances = (props) => {
  const { netOwed, totalIOwe, totalIAmOwed } = props;

  return (
    <div className="balance-header">
      <div className="balance-box">
        <div>total balance</div>
        <div>{netOwed}</div>
      </div>
      <div className="balance-box">
        <div>you owe</div>
        <div>{totalIOwe}</div>
      </div>
      <div className="balance-box">
        <div>you are owed</div>
        <div>{totalIAmOwed}</div>
      </div>
    </div>
  );
};

const IAmOwedDebtTile = (props) => {
  const { debt } = props;

  return (
    <NavLink to={`/expenses`}>
      <div className="i-am-owed debt-background">
        {/* <div>PROFILE PIC</div> */}
        {/* <div>{debt.created_at}</div> */}
        <div>
          <div>{debt.borrower.name}</div>
          <div className="debt-owes-you">{`owes you $${debt.amount}`}</div>
        </div>
      </div>
    </NavLink>
  );
};

const IOweDebtTile = (props) => {
  const { debt } = props;

  return (
    <NavLink to={`/expenses`}>
      <div className="i-owe debt-background">
        {/* <div>PROFILE PIC</div> */}
        {/* <div>{debt.created_at}</div> */}
        <div>
          <div>{debt.lender.name}</div>
          <div className="debt-i-owe">{`you owe $${debt.amount}`}</div>
        </div>
      </div>
    </NavLink>
  );
};

const DashboardCenter = () => {
  const dispatch = useDispatch();
  const [debtsUpdated, setDebtsUpdated] = useState(false);

  const { userId, token, loggedOut } = useSelector((state) => state.auth);
  const { iOwe, iAmOwed, totalIAmOwed, totalIOwe, netOwed } = useSelector(
    (state) => state.debts
  );
  useEffect(() => {
    if (!userId || debtsUpdated) return;
    dispatch(getUserDebts(userId));
    setDebtsUpdated(true);
  });

  if (loggedOut) {
    return <Redirect to="/sign-up"></Redirect>;
  }
  if (!token || !netOwed) {
    return null;
  }
  return (
    <>
      <ExpenseHeader title={"Dashboard"}></ExpenseHeader>
      <Balances
        netOwed={netOwed}
        totalIOwe={totalIOwe}
        totalIAmOwed={totalIAmOwed}
      ></Balances>
      <header className="dashboard-owe-header">
        <div>YOU OWE </div>
        <div>YOU ARE OWED </div>
      </header>
      <div className="columns">
        <div id="dashboard-left" className="column is-half">
          {iOwe.map((debt) => {
            return <IOweDebtTile key={debt.id} debt={debt}></IOweDebtTile>;
          })}
        </div>
        <div id="dashboard-right" className="column is-half">
          {iAmOwed.map((debt) => {
            return (
              <IAmOwedDebtTile key={debt.id} debt={debt}></IAmOwedDebtTile>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  return <PageLayout center={<DashboardCenter></DashboardCenter>}></PageLayout>;
};

export default Dashboard;
