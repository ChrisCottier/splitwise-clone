import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "../components/styles/splash.css";
import { SplashNav } from "./Splash";

const Splashpage = () => {
  const { loggedOut } = useSelector((state) => state.auth);

  if (loggedOut === false) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <div>
      <SplashNav />
      <div className="landing-page-container">
        {/* <div className='nav-bar'>
          <h1>LOGO Goes Here</h1>
        </div>
        <div className='navbar-links'>
          <button><a type='submit'>Log In</a></button>
          <button><a type='submit'>Sign Up</a></button>
        </div> */}

        <div className="area-1-container">
          <div className="area-1__left">
            <h1>
              <span className="area-1-span">
                Less stress when sharing expenses on trips.
              </span>
            </h1>
            <div className="icon-list">
              <ul>
                <li className="icons">
                  <a href="/login">
                    <i className="fas fa-plane" />
                  </a>
                </li>
              </ul>
              <ul>
                <li className="icons">
                  <a href="/login">
                    <i className="fas fa-home" />
                  </a>
                </li>
              </ul>
              <ul>
                <li className="icons">
                  <a href="/login">
                    <i className="fas fa-heart" />
                  </a>
                </li>
              </ul>
              <ul>
                <li className="icons">
                  <a href="/login">
                    <i className="fas fa-asterisk" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="under-icons">
              <p className="header-one__paragraph">
                Keep track of your shared expenses and balances with housemates,
                trips, groups, friends, and family.
              </p>
              <div className="button-one">
                <button className="header-one__button" type="submit">
                  <a className="header-one__link" href="/login">
                    Log In
                  </a>
                </button>
              </div>
              <div className="button-two">
                <button className="header-one__button" type="submit">
                  <a className="header-one__link" href="/signup">
                    Sign Up
                  </a>
                </button>
              </div>
              <p className="under-button">
                {" "}
                Free for : <i className="fab fa-apple" /> and{" "}
                <i className="fab fa-android" />, and web.
              </p>
            </div>
          </div>
        </div>
        <div className='area-1-col__2 area-two-container'>
          <div className='col__2-image'>
            <img src='https://indiegogo-clone.s3.us-east-2.amazonaws.com/splitwise.png' alt='logo' className='logo-styling' />
          </div>
        </div>
      </div>
      <div className="area-1__right column2">
        <div className="quote">
          <blockquote>
            {" "}
            "I never fight with roommates over bills because of this genius
            expense-splitting app. This is quite literally the best financial
            app out on the market. Being backed by Elon Musk, Jack Dorsey, and
            the top venture capital firm isn't a bad thing, either. Sign Up
            Today!"
          </blockquote>
        </div>
        <div className="image-and-name">
          <span className="testimonial-customer__name">Business Insider</span>
          <img
            className="testimonial-customer__image"
            src="https://secure.splitwise.com/assets/home_page/logos/bi.png"
            alt=''
          />
        </div>
      </div>
      <div className="main-container">
        <div className="balances">
          <div className="header header-one">
            <h1>Track Balances</h1>
          </div>
          <div className="header-content">
            <p>Keep track of shared expenses, balances, and who owes who.</p>
            <img src="https://splitwise-clone.s3.us-east-2.amazonaws.com/landing/asset1.png" alt=''/>
          </div>
        </div>
        <div className="expenses">
          <div className="header header-two">
            <h1>Organize Expenses</h1>
          </div>
          <div className="header-content">
            <p>
              Split expenses with any group: trips, housemates, friends,and
              family.
            </p>
            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset2.png" alt='' />
          </div>
        </div>
        <div className="friends">
          <div className="header header-three">
            <h1>Pay friends back</h1>
          </div>
          <div className="header-content">
            <p>
              Settle up with a friend and record any cash or online payment.
            </p>
            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset3.png" alt=''/>
          </div>
        </div>
        <div className="add-expenses">
          <div className="header header-four">
            <h1>Add expenses Easily</h1>
          </div>
          <div className="header-content">
            <p>Quickly add expenses on the go before you forget who paid.</p>
            <img src="https://secure.splitwise.com/assets/home_page/fixtures/asset4.png" alt=''/>
          </div>
        </div>
        <div className="pro-box">
          <div className="pro-box-left">
            <h1 className="pro-box-left__header">Get even more with PRO</h1>
            <p className="pro-box-left__pari">
              {" "}
              Get even more organing with reciept scanning, charts, and graphs,
              currency conversion, and more!
            </p>
            <div className="pro-box__button">
              <button type="submit">
                <a className="button-link" href="/signup">
                  Sign Up
                </a>
              </button>
            </div>
          </div>
          <div className="pro-box-right">
            <div className="pro-box-right__image">
              <img src="https://splitwise-clone.s3.us-east-2.amazonaws.com/landing/asset5.png" alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splashpage;
