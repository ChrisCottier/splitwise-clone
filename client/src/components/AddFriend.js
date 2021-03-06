import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { apiUrl } from "../config";
import Friend from "./Friend";
import { TextInput } from "./sub-components/Form-Inputs";
import {
  getFriends,
  getMatchingUsers,
  CLEAR_MATCHES,
  addFriend,
} from "../actions/friends.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bulma/css/bulma.css";
import "./styles/page-layout.css";

// this is a friends list
const AddFriend = () => {
  const dispatch = useDispatch();
  const [friendsUpdated, setFriendsUpdated] = useState(false);
  const { userId, token } = useSelector((state) => state.auth);
  const { friends } = useSelector((state) => state.friends);

  useEffect(() => {
    if (!friendsUpdated) {
      dispatch(getFriends(userId));
      setFriendsUpdated(true);
    }
  }, []);

  if (!friends) return null;
  const friendsComponents = friends.map((friend) => (
    <Friend key={friend.id} user={friend} />
  ));

  return (
    <>
      <div id="friends-table-container">
        <table
          id="friends-table"
          className="friends-table table is-striped is-bordered is-widescreen"
        >
          <thead>
            <tr>
              <th>
                Friends
                <a className="add modal" href="#invite">
                  <i className="friend-icon"></i>
                </a>
                {/* Add + */}
              </th>
            </tr>
          </thead>
          <tbody>{friendsComponents}</tbody>
        </table>
      </div>
      <Friending />
      {/* <form method='post' type='email' id="invite-friends">
        <p>Invite Friends</p>
        <input className="input" placeholder='Enter An Email Address' />
        <button type='submit'>Send Invite</button>
      </form> */}
    </>
  );
};

// this is to add a friend
export const Friending = () => {
  const dispatch = useDispatch();
  const [friendQuery, setFriendQuery] = useState("");
  const [matchingUsersLocal, setMatchingUsersLocal] = useState(null);
  const { matchingUsers, matchingUsersQuery } = useSelector(
    (state) => state.friends
  );
  const { userId } = useSelector((state) => state.auth);

  const handleChange = async (event) => {
    setFriendQuery(event.target.value);
  };

  const addNewFriend = (event) => {
    const friendId = event.target.getAttribute("data-id");
    dispatch(addFriend(userId, friendId));
    setFriendQuery("");
  };

  useEffect(() => {
    if (friendQuery === "") {
      dispatch({ type: CLEAR_MATCHES });
      return;
    }
    dispatch(getMatchingUsers(userId, friendQuery));
  }, [friendQuery]);

  return (
    <>
      <TextInput
        label="Add A Friend"
        placeHolder="Search for friends"
        value={friendQuery}
        handleChange={handleChange}
        required={false}
        name="friending"
      ></TextInput>
      <div className="matches-root">
        <div
          className="matches-container"
          style={{
            border: matchingUsers.length > 0 ? "1px solid #5dc5a6" : "",
          }}
        >
          {matchingUsers.map((user) => {
            return (
              <div key={user.id} className="add-friend-match">
                <Friend user={user} />
                <button
                  className="button is-small"
                  data-id={user.id}
                  onClick={addNewFriend}
                >
                  Add
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddFriend;
