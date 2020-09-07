import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import AddFriend from "./AddFriend";
import "./styles/page-layout.css";
import AddExpenseModal from "./AddExpenseModal";
import Navbar, { SideNav } from "./Navbar";
import { getUserDebts } from "../actions/debts";

const RightColumn = () => {
  //static display of total balance
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { netOwed } = useSelector((state) => state.debts);

  const [columnUpdated, setColumnUpdated] = useState(false);

  useEffect(() => {
    if (!userId || columnUpdated) return;
    dispatch(getUserDebts(userId));
    setColumnUpdated(true);
  });

  if (!netOwed) return null;
  const positiveAmount = netOwed > 0;

  return (
    <div className="net-owed">
      <h1>YOUR TOTAL BALANCE</h1>
      {positiveAmount ? (
        <>
          <div>you are owed </div>
          <div>{`$${netOwed}`}</div>
        </>
      ) : (
        <>
          <div>you owe </div>
          <div>{`$${netOwed}`}</div>
        </>
      )}
    </div>
  );
};

const PageLayout = (props) => {
  const { center, right } = props;
  const { loggedOut } = useSelector((state) => state.auth);
  const location = window.location.pathname.slice(1);

  // if (loggedOut !== true || loggedOut !== false) {
  //   return null;
  // }

  if (loggedOut) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="container is-widescreen">
          <AddExpenseModal></AddExpenseModal>
          <div className="columns">
            <div id="left-column" className="column is-one-fifth">
              <SideNav location={location}></SideNav>
              <AddFriend />
            </div>

            {/* this is the center */}
            <div id="center-column" className="column is-three-fifths">
              {center}
            </div>
            {/* This is the end of the center */}

            <div className="column is-one-fifth">
              {right}
              <RightColumn></RightColumn>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageLayout;
