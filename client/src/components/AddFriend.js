import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AddFriend = () => {

  return(
    <div>
      <div>Friends</div>
        <a className='add' href= '#invite'>
          <i className='friend-icon'></i>
          Add +
        </a>
      {/* add friend modal */}
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <button>
            <img src="https://assets.splitwise.com/assets/fat_rabbit/email-db939b398a4bea03ee3f5fe956e3476f1d9eab86ca731b9293e53082be9f11e2.png"></img>
            INVITE FRIENDS BY EMAIL ADDRESS
          </button>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>

        <table className='.table table is-striped is-bordered is-fullwidth'>
          <thead>Friends</thead>
          <tr>
            <td>
              <a href='#friend2'>
                <i className='user-icon'> Guest 2</i>
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
          </tr>
        </table>
        {/* form */}
        <form method='post' type='email'>
          <p>Invite Friends</p>
          <input placeholder='Enter An Email Address' />
          <button type='submit'>Send Invite</button>
        </form>
    </div>

  )
}

export default AddFriend