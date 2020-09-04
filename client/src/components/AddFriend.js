import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { apiUrl } from '../config';
import Friend from './Friend';
import {TextInput} from './sub-components/Form-Inputs'
import { getFriends } from '../actions/friends.js'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'bulma/css/bulma.css'
import './styles/page-layout.css'


// this is a friends list
const AddFriend = () => {
  const dispatch = useDispatch()
  const [friendsUpdated, setFriendsUpdated] = useState(false)
  const { userId, token } = useSelector(state => state.auth)
  const { friends } = useSelector(state => state.friends)

  useEffect(() => {
    if (!friendsUpdated) {
      dispatch(getFriends(userId))
      setFriendsUpdated(true)
    }

  }, []);

  if (!friends) return null;
  const friendsComponents = friends.map((friend) => <Friend key={friend.id} user={friend} />);

  return (
    <>

      <table className='.table table is-striped is-bordered is-widescreen'>
        <thead>
          <tr>
            <th>Friends
              <a className='add modal' href='#invite' >
                <i className='friend-icon'></i>
              </a>
                {/* Add + */}
            </th>
          </tr>
        </thead>
        <tbody>
          {friendsComponents}
        </tbody>
      </table>
      <Friending/>
      <form method='post' type='email' id="invite-friends">
        <p>Invite Friends</p>
        <input placeholder='Enter An Email Address' />
        <button type='submit'>Send Invite</button>
      </form>
    </>

  )
}

// this is to add a friend
export const Friending = () => {

  const [friendQuery, setFriendQuery] = useState("");
  const [friendUserId, setFriendUserId] = useState(null);
  const [matchingUsers, setMatchingUsers] =useState([]);

  const handleChange = (event) => {
    console.log('handle change')
    setFriendQuery(event.target.value)
    async function getMatchingFriends(friendQuery) {

      const res = await fetch(`${apiUrl}/users/?q=${friendQuery}`)
      console.log(res)
    }
    getMatchingFriends()
  }
  return (
    <>
      <TextInput
      label="Add A Friend"
      placeHolder='Search for friend here...'
      value={friendQuery}
      onChange={handleChange}
      required={false}
      name='friending'
      >
      </TextInput>
    </>
  )
}

export default AddFriend
