import React from 'react';

import './styles/dashboard.css'

export const ExpenseHeader = (props) => {
  const {title} = props;
  return (
    <div className="dashboard-header">
      <div className="title is-5">{title}</div>
      <div className="buttons">
        <button className="button add-expense-button">Add an Expense</button>
        <button className="button settle-up-button">Settle Up</button>
      </div>
    </div>
  )
}

export const Balances = (props) => {
  const {totalBalance, youOwe, youAreOwed} = props;

  return(
    <div className="balance-header">
      <div className="balance-box">
        <div>total balance</div>
        <div>{totalBalance}</div>
      </div>
      <div className="balance-box">
        <div>you owe</div>
        <div>{youOwe}</div>
      </div>
      <div className="balance-box">
        <div>you are owed</div>
        <div>{youAreOwed}</div>
      </div>
    </div>
  )
}

const ExpeneModal = () => {
  return (<div></div>)
}

const Dashboard = () => {
  return (
    <main>
      <div className="container is-widescreen">
        <div className="columns">
          <div className="column is-one-fifth">
            <div>FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER </div>
          </div>
          <div className="column is-three-fifths">
            <ExpenseHeader title={'Dashboard'}></ExpenseHeader>
            <Balances totalBalance={5}></Balances>
            <div className="columns">
              <div className="column is-half">
                <div>LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT </div>
              </div>
              <div className="column is-half">
                <div>RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT </div>
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div>FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER </div>
          </div>
        </div>
      </div>



    </main>
  )
}




export default Dashboard;
