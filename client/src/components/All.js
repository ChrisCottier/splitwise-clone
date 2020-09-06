import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'

import './styles/dashboard.css'
import { EXPENSE_MODAL } from '../actions/modals'
import { getUserDebts } from '../actions/debts'
import PageLayout from './PageLayout'

export const AllHeader = (props) => {
  const { title } = props;

  return (
    <div className="dashboard-header">
      <div className="title is-5">{title}</div>
    </div>
  )
}

// const DashboardCenter = () => {
//   const dispatch = useDispatch()
//   const [recentActivity, setrecentActivity] = useState([])

//   const { userId, token, loggedOut } = useSelector(state => state.auth);
//   const { iOwe, iAmOwed, totalIAmOwed, totalIOwe, netOwed } = useSelector(state => state.debts)
//   useEffect(() => {
//     if (!userId || debtsUpdated) return;
//     dispatch(getUserDebts(userId))
//     setDebtsUpdated(true)
//   })

//   if (loggedOut) {
//     return <Redirect to="/sign-up"></Redirect>
//   }
//   if (!token || !netOwed) {
//     return null;
//   }

//   return (
//     <>
//       <ActivityHeader title={'Expenses'} />
//     </>
//   )
// }

// const Dashboard = () => {
//   return <PageLayout center={<DashboardCenter></DashboardCenter>}></PageLayout>
// }

// export default Dashboard;