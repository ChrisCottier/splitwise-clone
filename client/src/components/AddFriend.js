import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { apiUrl } from '../config';
import Friend from './Friend';
import {getFriends} from '../actions/friends.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'bulma/css/bulma.css'

const AddFriend = () => {
  const dispatch=useDispatch()
  const [friendsUpdated,setFriendsUpdated] = useState(false)
  const { userId, token } = useSelector(state => state.auth)
  const {friends} = useSelector(state => state.friends)

  useEffect(() => {
    if (!friendsUpdated) {
      dispatch(getFriends(userId))
      setFriendsUpdated(true)
    }

  }, []);

  if (!friends) return null;
  const friendsComponents = friends.map((friend) => <Friend key={friend.id} user={friend} />);

  return (
    <div>

      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <button>
            <img src="https://assets.splitwise.com/assets/fat_rabbit/email-db939b398a4bea03ee3f5fe956e3476f1d9eab86ca731b9293e53082be9f11e2.png" alt=""></img>
              INVITE FRIENDS BY EMAIL ADDRESS
            </button>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>

      <table className='.table table is-striped is-bordered is-widescreen'>
        <thead>
          <tr><th>
            <a className='add modal' href='#invite' >
              <i className='friend-icon'></i>
                  Add +
              </a>
          </th>
          </tr>
        </thead>
        <tbody>
          {friendsComponents}
        </tbody>
      </table>
      <form method='post' type='email'>
        <p>Invite Friends</p>
        <input placeholder='Enter An Email Address' />
        <button type='submit'>Send Invite</button>
      </form>
    </div>

  )
}

export default AddFriend
