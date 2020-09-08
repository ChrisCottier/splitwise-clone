import React from 'react';
export const Comment = (props) => {
    const { id, commentor, expense, message, created_at } = props.comment;
    // I would like the messages to be limited to 75 characters only.
    let trimmedMessage = message.substring(0, 75) + "..."; // We add trailing '...' for effect...
    if (message.length <= 75) trimmedMessage = message; // We take a substring of the message only if it is too long.
    return (  // We render the component with inline style for now.
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div id='profileImg' style={{ minWidth: '10%' }}>
                    <img src={commentor.image_url.url} style={{ height: '55px', width: '55px' }} alt=''></img>
                </div>
                <div id='content' className='comment'>
                    <p style={{ wordWrap: 'break-word' }}><strong>{commentor.name}</strong> commented on <strong id='expense'>"{expense.title}":</strong> "{trimmedMessage}"</p>
                    <p id='timestamp'>{created_at}</p>
                </div>
            </span>
        </>
    )
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  -- -- -- -- -- Just a head's up: -- -- -- -- -- --
// Additional implementation may yet be required,
// for instance, we do not yet test for if settle_up === true with regard to any expense,
// which may change what gets rendered and where.
// So far, no test expenses have been seeded true, they are all assumed false.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const Debt = (props) => {
    const { currentUser } = props;
    const { id, borrower_id, amount, created_at, lender, expense } = props.debt;
    // If the currunt user in not the borrower, they do not have a debt associated with the current expense
    if (currentUser.userId !== borrower_id) return null;
    return (
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div id='profileImg'>
                    <img src={lender.image_url.url} style={{ height: '55px', width: '55px' }}></img>
                </div>
                <div id='content' className='debt'>
                    <p><strong>{expense.creator.name}</strong> added <strong id='expense'>"{expense.title}."</strong></p>
                    <p>{currentUser.name} owes ${amount}.</p>
                    <p id='timestamp'>{created_at}</p>
                </div>
            </span>
        </>
    );
}

export const Expense = (props) => {
    const { id, creator, title, amount, created_at, image_url } = props.expense;
    // Expenses returned from the query are always only associated with the current user,
    return (  // therefore we do not need additional logic.
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div id='profileImg'>
                    <img src={image_url.url} style={{ height: '55px', width: '55px' }}></img>
                </div>
                <div id='content' className='expense'>
                    <p><strong>{creator.name}</strong> added <strong>"{title}."</strong></p>
                    <p>{creator.name} paid <strong id='expense'>${amount}</strong>.</p>
                    <p id='timestamp'>{created_at}</p>
                </div>
            </span>
        </>
    );
};

export const Group = (props) => {
    const { currentUser } = props;
    const { id, name, created_at, creator } = props.group;
    // Here we are going to check to see if you created the group
    let you = '';
    if (currentUser.userId === creator.id) { you = ' created the group '; }
    else { you = ' joined the group ' } // if you are not the creator, you have joined the group
    return (
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div id='profileImg'>
                    <img src={creator.image_url.url} style={{ height: '55px', width: '55px' }}></img>
                </div>
                <div id='content' className='group'>
                    <p><strong>{currentUser.name}</strong> {you} <strong>"{name}".</strong></p>
                    <p id='timestamp'>{created_at}</p>
                </div>
            </span>
        </>
    )
}

export const Transaction = (props) => {
    const { currentUser } = props;
    const { id, amount, created_at, reciever_id, sender_id, reciever, sender } = props.transaction;
    // As per the actual splitwise site, all transactions are being rendered with respect to the current user.
    // It will reflect whether or not you're recording a payment from another user or making a payment to another user.
    let imageUrl = '';
    let paidOrPayer = '';
    let payOrRecieve = '';
    if (currentUser.userId === reciever_id) {
        imageUrl = reciever.image_url.url;
        paidOrPayer = 'recorded a payment from';
        payOrRecieve = 'recieved'
    } else if (currentUser.userId === sender_id) {
        imageUrl = sender.image_url.url;
        paidOrPayer = 'paid'
        payOrRecieve = 'paid';
    } else { // should there be an error in the database query, the edge cases are reject here:
        return null;
    }
    return (
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div id='profileImg'>
                    <img src={imageUrl} style={{ height: '55px', width: '55px' }}></img>
                </div>
                <div id='content' className='transaction'>
                    <p><strong>{currentUser.name}</strong> {paidOrPayer} <strong>{sender.name}.</strong></p>
                    <p>{currentUser.name} {payOrRecieve} <strong id='expense'>${amount}</strong>.</p>
                    <p id='timestamp'>{created_at}</p>
                </div>
            </span>
        </>
    )
}

export default {
    Comment,
    Debt,
    Expense,
    Group,
    Transaction
};
