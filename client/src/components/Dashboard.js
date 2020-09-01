import React from 'react'
import 'bulma/css/bulma.css'
import Footer from './Footer'

const Dashboard = () => {
   
  return(
    <div>
      <div className='topbar'>
        <h1>Dashboard</h1>
        <div>
          <a href='/expenses'><button type='submit'>Add An Expense</button></a>
          <a href='/settle'><button type='submit'>Settle Up</button></a>
        </div>
      </div>
      <div class="columns db-balances">
        <div class="column is-narrow is-one-third balances">
          <div>Total Balance</div>
          <span>+ $8625.00 HC</span> 
        </div>
      </div>
      <div class="columns db-balances">
        <div class="column is-narrow is-one-third balances">
          <div>You Owe</div>
          <span>+ $0.00 HC</span> 
        </div>
      </div>
      <div class="columns db-balances">
        <div class="column is-narrow is-one-third balances">
          <div>You Are Owed</div>
          <span> $8625.00 HC</span> 
        </div>
      </div>
      <h2> You Owe </h2>
      <span>You Are Owed</span>
        <div>
          <button>
            <i>icon here</i>
            View As List
          </button>
        </div>
        <div>
          <button>
            <i>icon here</i>
            View Chart
          </button>
        </div>

      <Footer />
    </div>
  )
}

export default Dashboard