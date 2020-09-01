import React from 'react'
import 'bulma/css/bulma.css'
import Footer from './Footer'
import './Dashboard.css'

const Dashboard = () => {
   
  return(
    <div className='dashboard header'>
      <div className='topbar'>
        <h1>Dashboard</h1>
        <div>
          <a className='actions' href='/expenses'><button type='submit'>Add An Expense</button></a>
          <a className='actions' href='/settle'><button type='submit'>Settle Up</button></a>
        </div>
      </div>
      <div className="columnss db-balances">
        <div className="column is-narrow is-one-third balances">
          <div>Total Balance</div>
          <span>+ $8625.00 HC</span> 
        </div>
      </div>
      <div className="columnss db-balances">
        <div className="column is-narrow is-one-third balances">
          <div>You Owe</div>
          <span>+ $0.00 HC</span> 
        </div>
      </div>
      <div className="columnss db-balances">
        <div className="column is-narrow is-one-third balances">
          <div className='right'>You Are Owed</div>
          <span> $8625.00 HC</span> 
        </div>
      </div>
      <div>
        <h2> 
          You Owe
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
        <span>You Are Owed</span>
        </h2>
      </div>
      <div className='summary'>
        <div left-side>
          You do not owe anything HC
        </div>
        <div className='right-side'>
          <span><a href='/friends/:id'>Guest 2</a></span>
          <span> Owes You $2875.00</span>
        </div>
        <div className='right-side'>
          <span><a href='/friends/:id'>Guest 3</a></span>
          <span> Owes You $2875.00</span>
        </div>
        <div className='right-side'>
          <span><a href='/friends/:id'>Guest 4</a></span>
          <span> Owes You $2875.00</span>
        </div>
      </div>  

      <Footer />
    </div>
  )
}

export default Dashboard