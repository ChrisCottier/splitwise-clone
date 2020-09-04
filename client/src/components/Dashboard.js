import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Redirect, NavLink} from 'react-router-dom'

import './styles/dashboard.css'
import { EXPENSE_MODAL } from '../actions/modals'
import {getUserDebts} from '../actions/debts'
import PageLayout from './PageLayout'

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
  )
}

const IAmOwedDebtTile = (props) => {
  const {debt} = props;

  return (
    <NavLink to={`/friend/${debt.borrower_id}`}>
      <div className='i-am-owed debt-background'>
        {/* <div>PROFILE PIC</div> */}
        {/* <div>{debt.created_at}</div> */}
        <div>
          <div>{debt.borrower.name}</div>
          <div className='debt-owes-you'>{`owes you $${debt.amount}`}</div>
        </div>
      </div>
    </NavLink>
  )
}

const IOweDebtTile = (props) => {
  const {debt} = props;

  return (
    <NavLink to={`/friend/${debt.lender_id}`}>
      <div className='i-owe debt-background'>
        {/* <div>PROFILE PIC</div> */}
        {/* <div>{debt.created_at}</div> */}
        <div>
          <div>{debt.lender.name}</div>
          <div className='debt-i-owe'>{`you owe $${debt.amount}`}</div>
        </div>
      </div>
    </NavLink>
  )
}

const DashboardCenter = () => {
  const dispatch = useDispatch()
  const [debtsUpdated, setDebtsUpdated] = useState(false)

  const {userId, token, loggedOut} = useSelector(state=> state.auth);
  const {iOwe, iAmOwed, totalIAmOwed, totalIOwe, netOwed} = useSelector(state => state.debts)
  useEffect(()=>{
    if (!userId || debtsUpdated ) return;
    dispatch(getUserDebts(userId))
    setDebtsUpdated(true)
  })

  if (loggedOut) {
    return <Redirect to="/sign-up"></Redirect>
  }
  if (!token || !netOwed) {
    return null;
  }
  return (

    <>
      <ExpenseHeader title={'Dashboard'}></ExpenseHeader>
      <Balances netOwed={netOwed} totalIOwe={totalIOwe} totalIAmOwed={totalIAmOwed} ></Balances>
      <header className="dashboard-owe-header">
        <div>YOU OWE </div>
        <div>YOU ARE OWED </div>
      </header>
      <div className="columns">
        <div id="dashboard-left" className="column is-half">
          {iOwe.map(debt => {
            return <IOweDebtTile key={debt.id} debt={debt}></IOweDebtTile>
          })}
        </div>
        <div id="dashboard-right" className="column is-half">

          {iAmOwed.map(debt => {
            return <IAmOwedDebtTile key={debt.id} debt={debt}></IAmOwedDebtTile>
          })}
        </div>
      </div>
    </>

  )
}

const Dashboard = () => {
  return <PageLayout center={<DashboardCenter></DashboardCenter>}></PageLayout>
}

export default Dashboard;

// const Dashboard = () => {
//   const dispatch = useDispatch()
//   const [debtsUpdated, setDebtsUpdated] = useState(false)

//   const {userId, token, loggedOut} = useSelector(state=> state.auth);
//   const {iOwe, iAmOwed, totalIAmOwed, totalIOwe, netOwed} = useSelector(state => state.debts)
//   useEffect(()=>{
//     if (!userId || debtsUpdated ) return;
//     dispatch(getUserDebts(userId))
//     setDebtsUpdated(true)
//   })

//   const updateDash = () => {

//   }

//   if (loggedOut) {
//     return <Redirect to="/sign-up"></Redirect>
//   }
//   if (!token || !netOwed) {
//     return null;
//   }
//   return (
//     <>
//       <Navbar></Navbar>
//       <main>
//         <div className="container is-widescreen">
//           <AddExpenseModal></AddExpenseModal>
//           <div className="columns">
//             <div className="column is-one-fifth">
//               <SideNav></SideNav>
//               <div><AddFriend onClick={updateDash} /> </div>
//             </div>

//             {/* this is the center */}
//             <div className="column is-three-fifths">
//               <ExpenseHeader title={'Dashboard'}></ExpenseHeader>
//               <Balances netOwed={netOwed} totalIOwe={totalIOwe} totalIAmOwed={totalIAmOwed} ></Balances>
//               <div className="columns">
//                 <div className="column is-half">
//                   <div>YOU OWE </div>
//                   {iOwe.map(debt => {
//                     return <IOweDebtTile key={debt.id} debt={debt}></IOweDebtTile>
//                   })}
//                 </div>
//                 <div className="column is-half">
//                   <div>YOU ARE OWED </div>
//                   {iAmOwed.map(debt => {
//                     return <IAmOwedDebtTile key={debt.id} debt={debt}></IAmOwedDebtTile>
//                   })}
//                 </div>
//               </div>
//             </div>
//             {/* This is the end of the center */}

//             <div className="column is-one-fifth">
//               <div>FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }





// import React from 'react'
// import 'bulma/css/bulma.css'
// import Footer from './Footer'
// import './styles/Dashboard.css'

// const Dashboard = () => {

//   return(
//     <div className='dashboard header'>
//       <div className='topbar'>
//         <h1>Dashboard</h1>
//         <div>
//           <a className='actions' href='/expenses'><button type='submit'>Add An Expense</button></a>
//           <a className='actions' href='/settle'><button type='submit'>Settle Up</button></a>
//         </div>
//       </div>
//       <div className="columnss db-balances">
//         <div className="column is-narrow is-one-third balances">
//           <div>Total Balance</div>
//           <span>+ $8625.00 HC</span>
//         </div>
//       </div>
//       <div className="columnss db-balances">
//         <div className="column is-narrow is-one-third balances">
//           <div>You Owe</div>
//           <span>+ $0.00 HC</span>
//         </div>
//       </div>
//       <div className="columnss db-balances">
//         <div className="column is-narrow is-one-third balances">
//           <div className='right'>You Are Owed</div>
//           <span> $8625.00 HC</span>
//         </div>
//       </div>
//       <div>
//         <h2>
//           You Owe
//           <div>
//             <button>
//               <i>icon here</i>
//               View As List
//             </button>
//           </div>
//           <div>
//             <button>
//               <i>icon here</i>
//               View Chart
//             </button>
//           </div>
//         <span>You Are Owed</span>
//         </h2>
//       </div>
//       <div className='summary'>
//         <div left-side>
//           You do not owe anything HC
//         </div>
//         <div className='right-side'>
//           <span><a href='/friends/:id'>Guest 2</a></span>
//           <span> Owes You $2875.00</span>
//         </div>
//         <div className='right-side'>
//           <span><a href='/friends/:id'>Guest 3</a></span>
//           <span> Owes You $2875.00</span>
//         </div>
//         <div className='right-side'>
//           <span><a href='/friends/:id'>Guest 4</a></span>
//           <span> Owes You $2875.00</span>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }
