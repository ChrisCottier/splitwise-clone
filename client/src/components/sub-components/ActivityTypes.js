import React from 'react';

export const Comment = (props) => {
    const {comment} = props;
    return (
        <p key={comment.id}><strong>{comment.commentor.name}</strong> commented on <strong>"{comment.expense.title}":</strong> "{comment.message}"</p>
        )
    }

    export const Debt = (props) => {
        const {debt} = props;

}

export const Expense = () => {

}

export const Friend = () => {

}

export const Group = () => {

}

export const Transaction = () => {

}

export default {
    Comment,
    Debt,
    Expense,
    Friend,
    Group,
    Transaction
};
