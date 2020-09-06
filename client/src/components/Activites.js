import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { apiUrl } from '../config';

import './styles/dashboard.css';
import { Comment, Debt, Expense, Friend, Group, Transaction } from './sub-components/ActivityTypes'
import { getRecentActivity } from '../actions/user';


const RecentActivity = (props) => {
    const dispatch = useDispatch();
    // const [recentActivity, setRecentActivity] = useState([]);
    const { userId, name, token } = useSelector(state => state.auth);
    const [activityUpdated, setActivityUpdated] = useState(false);
    const { activity } = useSelector(state => state.users)

    // console.log(userId)
    useEffect(() => {
        if (userId === undefined) return;
        if (!activityUpdated) {
            console.log('about to dispatch')
            dispatch(getRecentActivity(userId))
            setActivityUpdated(true)
        }
    }, [userId]);
    // console.log(userId)
    console.log(activity)
    // // console.log(state)



    if (activity) {
        const { comments, debts, expenses, friends, groups, transactions } = activity;
        console.log(comments)
        return (
            <>
                <h1> Recent Activity </h1>
                {comments.map(comment=>{
                    return (
                    <p key={comment.id}  >{name} commented on {comment.message}</p>
                    )
                })}
                {/* <p></p> */}
            </>
        );
    } else {
        return null;
    }



    // useEffect(() => {

    //     const getActivity = async () => {
    //         // const res = await fetch(`${apiUrl}/activities/${userId}`);
    //         const res = await fetch(`${apiUrl}/activities/1`);
    //         const data = await res.json();
    //         console.log(data)
    //         setRecentActivity(data);
    //         // const { comments, debts, expenses, friends, groups, transactions } = recentActivity;
    //         // const allActivity = [comments, debts, expenses, friends, groups, transactions];
    //     }
    //     getActivity();
    //     // getActivity.preventDefault();
    // }, []);


    // console.log(recentActivity);
    // console.log(allActivity);

    // if (true) {
    //     return (
    //         <>
    //             <h1> Recent Activity </h1>
    //             <p>No Recent Activiy</p>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h1> Recent Activity </h1>
    //         </>
    //     );






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
