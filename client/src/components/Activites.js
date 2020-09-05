import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { apiUrl } from '../config';

import './styles/dashboard.css';
import { getRecentActivity } from '../actions/user';


const RecentActivity = (props) => {
    const dispatch = useDispatch();
    const [recentActivity, setRecentActivity] = useState([]);
    const { userId, token } = useSelector(state => state.auth);

    useEffect(() => {
        const getActivity = async () => {
            // const res = await fetch(`${apiUrl}/activities/${userId}`);
            const res = await fetch(`${apiUrl}/activities/1`);
            const data = await res.json();
            setRecentActivity(data);
        }
        getActivity();
    }, []);

    // useEffect(() => {
    //     const activity = dispatch(getRecentActivity(userId))
    //     setRecentActivity(activity)
    // });

    if (!token || recentActivity.length) {
        return null;
    }
    const { comments, debts, expenses, friends, groups, transactions } = recentActivity;
    const allActivity = [comments, debts, expenses, friends, groups, transactions];
    console.log(recentActivity);
    console.log(allActivity);

    return (
        <>
            <h1> Recent Activity </h1>
        </>
    );


};


export default RecentActivity;
// export const ActivityHeader = (props) => {
//     const { title } = props;

//     return (
//         //   just return a header
//         <div className="dashboard-header">
//             <div className="title is-5">{title}</div>
//         </div>
//     )
// }

// const commentComponent = () => {

// }

// const debtComponent = () => {

// }

// const expenseComponent = () => {

// }

// const friendComponent = () => {

// }

// const groupComponent = () => {

// }

// const transactionComponent = () => {

// }


// const DashboardCenter = () => {
//     const dispatch = useDispatch()
//     const [recentActivity, setRecentActivity] = useState([])

//     const { userId, token } = useSelector(state => state.auth);
//     const { comments, debts, expenses, friends, groups, transactions } = useSelector(state => state.data)

//     useEffect(() => {
//         setRecentActivity(dispatch(getRecentActivity(userId)))
//     }, [])

//     if (!token) {
//         return <Redirect to="/"></Redirect>
//     }

//     return (
//         <>
//             <ActivityHeader title={'Recent Activity'} />
//         </>
//     )
// }

// const Dashboard = () => {
//     return <PageLayout center={<DashboardCenter></DashboardCenter>}></PageLayout>
// }
