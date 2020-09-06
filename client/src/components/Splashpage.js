import React from 'react'
import '../components/styles/splash.css'

const Splashpage = () => {
  return (
    <div>
      <div classname='landing-page-container'>
        <div className='nav-bar'>
          {/* <Navbar /> */}
          <h1>LOGO Goes Here</h1>
        </div>
        <div className='navbar-links'>
          <button><a type='submit'>Log In</a></button>
          <button><a type='submit'>Sign Up</a></button>
        </div>
        <div className='area-1'>
          <h1>
            <span>Less stress when sharing expenses on trips.</span>
          </h1>
          <ul>

            <li className='icons'>
              <a>Icon1</a>
            </li>
          </ul>
          <ul>

            <li className='icons'>
              <a>Icon2</a>
            </li>
          </ul>
          <ul>

            <li className='icons'>
              <a>Icon3</a>
            </li>
          </ul>
          <ul>

            <li className='icons'>
              <a>Icon4</a>
            </li>
          </ul>
        </div>
        <div className='under-icons'>
          <p>Keep track of your shared expenses and balances with housemates,
            trips, groups, friends, and family.
          </p>
          <button type='submit'><a href='/signup'>Sign Up</a></button>
          <p> Free for iphone, Android, and web.</p>
        </div>
      </div>
      <div className='main-container'>
        <div className='balances'>
          <div className='header header-one'>
            <h1>Track Balances</h1>
            <p>Keep track of shared expenses, balances, and who owes who.</p>
            <img src='https://secure.splitwise.com/assets/home_page/fixtures/asset1.png' />
          </div>
        </div>
        <div className='balances'>
          <div className='header header-two'>
            <h1>Organize Expenses</h1>
            <p>Split expenses with any group: trips, housemates, friends,and family.</p>
            <img src='https://secure.splitwise.com/assets/home_page/fixtures/asset1.png' />
          </div>
        </div>
        <div className='balances'>
          <div className='header header-three'>
            <h1>Pay friends back</h1>
            <p>Settle up with a friend and record any cash or online payment.</p>
            <img src='https://secure.splitwise.com/assets/home_page/fixtures/asset1.png' />
          </div>
        </div>
        <div className='balances'>
          <div className='header header-four'>
            <h1>Add expenses Easily</h1>
            <p>Quickly add expenses on the go before you forget who paid.</p>
            <img src='https://secure.splitwise.com/assets/home_page/fixtures/asset1.png' />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Splashpage
