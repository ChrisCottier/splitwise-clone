import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TextAreaInput, TextInput, NumberInput, FileInput, CategoryInput } from './sub-components/Form-Inputs'
import { EXPENSE_MODAL } from '../actions/modals'
import { getFriends } from '../actions/friends.js'
import { newExpense } from '../actions/expenses'
import { getUserDebts } from '../actions/debts'
import './styles/expense-modal.css'


const MatchingFriends = (props) => {
  const { friends, string, friendsOnExpense, setFriendsOnExpense, setAddFriend } = props;

  const matches = friends.filter(friend => {
    const name = friend.name;
    return name.includes(string) && string.length >= 1 && !friendsOnExpense.includes(friend)
  })

  const addToList = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const indexOfSelection = parseInt(event.target.getAttribute('name'))
    const selection = matches[indexOfSelection]
    const add = [...friendsOnExpense, selection]
    setFriendsOnExpense(add)
    setAddFriend('')
  }
  return (
    <div className="friend-options">
      {matches.map((friend, index) => {

        return (
          <a className="hover-click" name={index} key={friend.id} onClick={addToList}>{friend.name}</a>
        )
      }
      )}
    </div>
  )
}

const FriendOnExpense = (props) => {
  const { friend } = props
  return (
    <div>{friend.name}<span>**Cancel icon here**</span></div>
  )
}

const AddExpenseModal = () => {
  const [friendsUpdated, setFriendsUpdated] = useState(false)
  const [friendsOnExpense, setFriendsOnExpense] = useState([])
  const [addFriend, setAddFriend] = useState('')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')

  const { expenseDisplay } = useSelector(state => state.modals)
  const { friends } = useSelector(state => state.friends)
  const { userId, token } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!friendsUpdated) {
      dispatch(getFriends(userId))
      setFriendsUpdated(true)
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
      dispatch({ type: EXPENSE_MODAL, display: "none" })
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

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(newExpense({ friendsOnExpense, amount, title, userId, splitType: 'even', note, settledUp: false }))
    dispatch(getUserDebts(userId))
  }

  if (!expenseDisplay, friends === undefined) {
    return null;
  }


  return (
    <div className="modal" style={{ display: expenseDisplay }}>
      <div className="modal-background" onClick={modalOff}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create An Expense</p>
          <button className="delete" aria-label="close" onClick={modalOff}></button>
        </header>
        <section className="modal-card-body">
          {/* <h1 className="title is-5">Create An Expense</h1> */}
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Add Friends"
              name="addFriend"
              placeHolder="Type friends' names here..."
              value={addFriend}
              handleChange={handleChange}
              require={false}
            ></TextInput>
            <MatchingFriends
              string={addFriend}
              friends={friends}
              friendsOnExpense={friendsOnExpense}
              setFriendsOnExpense={setFriendsOnExpense}
              setAddFriend={setAddFriend}></MatchingFriends>
            <div>FRIENDS ADDED BELOW</div>
            {friendsOnExpense.map(friend => {
              return <FriendOnExpense key={friend.id} friend={friend}></FriendOnExpense>
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
            <button className="button is-success" type="submit">Split It!</button>
            <button className="button cancel" onClick={modalOff}>Cancel</button>
          </form>
        </section>
        <footer className="modal-card-foot">
        </footer>
      </div>
    </div>
  )
}

export default AddExpenseModal
