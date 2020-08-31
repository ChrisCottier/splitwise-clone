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
        
        <a href='#friend2'>
          <i className='user-icon'> Guest 2</i>
        </a>
        <a href='#friend3'>
          <i className='user-icon'> Guest 3</i>
        </a>
        <a href='#friend4'>
          <i className='user-icon'> Guest 4</i>
        </a>
        <a href='#friend5'>
          <i className='user-icon'> Guest 5</i>
        </a>
        <a href='#friend6'>
          <i className='user-icon'> Guest 6</i>
        </a>
        <a href='#friend7'>
          <i className='user-icon'> Guest 7</i>
        </a>
    </div>



  )
}

export default AddFriend