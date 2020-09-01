import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {apiUrl} from '../config';
import Friend from './Friend';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import friending from '../friending'
import 'bulma/css/bulma.css'

const AddFriend = () => {
  const {userId, token} = useSelector(state => state.auth)
  console.log(userId)
  const [friends, setFriends] = useState([]);

  useEffect(()=>{
      if (!token || friends) return;
      const fetchData = async() =>{
      const res = await fetch(`${apiUrl}/friends/${userId}`);
      const data = await res.json();
      console.log(data)
      setFriends(data.friends);
    }
    fetchData();
  }, []);

  const friendsComponents = friends.map((friend) => <Friend key={friend.id} friend={friend}/>);
    if (!token) {
      return <Redirect to="/login"></Redirect>
    }
    return(
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
          <tr>
            <th>
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

      {/* <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
            <img src="https://assets.splitwise.com/assets/fat_rabbit/email-db939b398a4bea03ee3f5fe956e3476f1d9eab86ca731b9293e53082be9f11e2.png" alt=""></img>
              Invite Friends
            <input placeholder='Enter names or email addresses'>To:</input>
            <textarea placeholder='Include an optional message'></textarea>
            <span><a>Preview The Message You'll Send</a></span>
            <button>Send Invites and Add Friends</button> 
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div> */}
    </div>

)
}

export default AddFriend
{/* <tr>
  <td>
    <a href='#friend2'>
      <i className='user-icon'> Guest 2</i>
      <FontAwesomeIcon icon='coffee' />
    </a>
  </td>
</tr>
<tr>
  <td>
    <a href='#friend2'>
      <i className='user-icon'> Guest 3</i>
    </a>
  </td>
</tr>
<tr>
  <td>
    <a href='#friend2'>
      <i className='user-icon'> Guest 4</i>
    </a>
  </td>
</tr>
<tr>
  <td>
    <a href='#friend2'>
      <i className='user-icon'> Guest 5</i>
    </a>
  </td>
</tr>
<tr>
  <td>
    <a href='#friend2'>
      <i className='user-icon'> Guest 6</i>
    </a>
  </td>
</tr>
<tr>
  <td>
    <a href='#friend2'>
      <i className='user-icon'> Guest 7</i>
    </a>
  </td>
</tr> */}