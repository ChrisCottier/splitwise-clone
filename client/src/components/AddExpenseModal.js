import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { TextAreaInput, TextInput, NumberInput, FileInput, CategoryInput} from './sub-components/Form-Inputs'
import {EXPENSE_MODAL} from '../actions/modals'
import {getFriends} from '../actions/friends.js'


const MatchingFriends = (props) => {
  const {friends, string} = props;

  const matches= friends.filter(friend => {
    const name = friend.name;
    return name.includes(string)
  })

  return (
    <div></div>
  )
}

const FriendOnExpense = (props) => {
  const {friend} = props
  return (
  <div>{friend.name}<span>X</span></div>
  )
}

const AddExpenseModal = () => {
  const [friendsOnExpense, setFriendsOnExpense] = useState([])
  const [addFriend, setAddFriend] = useState('')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')

  const {expenseDisplay} = useSelector(state => state.modals)
  const {friends} = useSelector(state => state.friends)
  const {userId} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  console.log(friends)

  useEffect(() => {
    if (friends === undefined) {
      dispatch(getFriends(userId))
    }
  })


  const modalOff = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("cancel") ||
      event.target.classList.contains("delete")
    ) {
      dispatch({type: EXPENSE_MODAL, display: "none"})
    }

  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case "addFriend": {
        setAddFriend(event.target.value);
        return;
      }
      case "title": {
        setTitle(event.target.value);
        return;
      }
      case "amount": {
        setAmount(event.target.value);
        return;
      }
      case "note": {
        setNote(event.target.value);
        return;
      }
    }
  }
   if (!expenseDisplay) {
    return null;
  }

  return (
      <div class="modal" style={{display:expenseDisplay}}>
          <div class="modal-background" onClick={modalOff}></div>
          <div class="modal-card">
              <header class="modal-card-head">
                  <p class="modal-card-title">Create An Expense</p>
                  <button class="delete" aria-label="close" onClick={modalOff}></button>
              </header>
              <section class="modal-card-body">
              {/* <h1 className="title is-5">Create An Expense</h1> */}
                <form>
                  <TextInput
                  label="Add Friends"
                  name="addFriend"
                  placeHolder="Type friends' names here..."
                  value={addFriend}
                  handleChange={handleChange}
                  require={true}
                  ></TextInput>
                  {friendsOnExpense.map(friend => {
                    return <FriendOnExpense friend={friend}></FriendOnExpense>
                  })}
                  <TextInput
                  label="Title"
                  name="title"
                  placeHolder="Title..."
                  value={title}
                  handleChange={handleChange}
                  require={true}
                  ></TextInput>
                  <NumberInput
                  label="Amount"
                  placeHolder="How Much?"
                  name="amount"
                  value={amount}
                  handleChange={handleChange}
                  required={false}
                  >
                  </NumberInput>
                  <TextInput
                  label="Note"
                  name="note"
                  placeHolder="Optional note..."
                  value={note}
                  handleChange={handleChange}
                  require={true}
                  ></TextInput>
                </form>
              </section>
              <footer class="modal-card-foot">
                  <button class="button is-success">Save changes</button>
                  <button class="button cancel" onClick={modalOff}>Cancel</button>
              </footer>
          </div>
      </div>
  )
}

export default AddExpenseModal
