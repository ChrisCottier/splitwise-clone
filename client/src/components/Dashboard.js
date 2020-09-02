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