import React from 'react';
import AddFriend from './AddFriend';
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import './styles/page-layout.css'
import AddExpenseModal from './AddExpenseModal'
import Navbar, {SideNav} from './Navbar'


const PageLayout = (props) => {

  const {center, right} = props
  const {userId, token, loggedOut} = useSelector(state=> state.auth);

  if (loggedOut) {
    return <Redirect to="/sign-up"></Redirect>
  }
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="container is-widescreen">
          <AddExpenseModal></AddExpenseModal>
          <div className="columns">
            <div id="left-column" className="column is-one-fifth">
              <SideNav></SideNav>
              <AddFriend/>
            </div>

            {/* this is the center */}
            <div id="center-column" className="column is-three-fifths">
              {center}
            </div>
            {/* This is the end of the center */}

            <div className="column is-one-fifth">
              {right}
              <div>FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}




export default PageLayout;
