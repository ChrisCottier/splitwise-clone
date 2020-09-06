import React from 'react';

export const Comment = (props) => {
    const { id, commentor, expense, message, created_at } = props.comment;
    // I would like the messages to be limited to 75 characters only.
    let trimmedMessage = message.substring(0, 75) + "...";
    if (message.length <= 75) trimmedMessage = message;
    return (  // We render the component with inline style for now.
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ minWidth: '10%' }}>
                    <img src={commentor.image_url.url} style={{ height: '60px', width: '60px' }}></img>
                </div>
                <div>
                    <p style={{ wordWrap: 'break-word' }}><strong>{commentor.name}</strong> commented on <strong>"{expense.title}":</strong> "{trimmedMessage}"</p>
                    <p>{created_at}</p>
                </div>
            </span>
        </>
    )
}

export const Debt = (props) => {
    const { currentUser } = props;
    const { id, borrower_id, amount, created_at, lender } = props.debt;
    // If the currunt user in not the borrower, they do not have a debt associated with the current expense
    if (currentUser !== borrower_id) return;
    return (
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <img src={lender.image_url.url} style={{ height: '60px', width: '60px' }}></img>
                </div>
                <div>
                    <p><strong>{lender.name}</strong> added <strong>"{title}."</strong></p>
                    <p>{creator.name} paid ${amount}</p>
                    <p>{created_at}</p>
                </div>
            </span>
        </>
    )

}

export const Expense = (props) => {
    const { id, creator, title, amount, created_at, image_url } = props.expense;
    return (
        <>
            <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <img src={image_url.url} style={{ height: '60px', width: '60px' }}></img>
                </div>
                <div>
                    <p><strong>{creator.name}</strong> added <strong>"{title}."</strong></p>
                    <p>{creator.name} paid ${amount}</p>
                    <p>{created_at}</p>
                </div>
            </span>
        </>
    );
};

export const Group = (props) => {
    const { currentUser } = props;
    const { id, name, user1_id, created_at } = props.group

    if (currentUser.userId === user1_id) {
        return (
            <div key={id}>
                <p><strong>{currentUser.name}</strong> created the group <strong>"{name}".</strong></p>
                <p>{created_at}</p>
            </div>
        )
    } else {
        return (
            <div key={id}>
                <p><strong>{currentUser.name}</strong> joined the group <strong>"{name}."</strong></p>
                <p>{created_at}</p>
            </div>
        );
    };
}

export const Transaction = (props) => {
    const { currentUser } = props;
    const { id, amount, created_at, } = props.transaction

}

export default {
    Comment,
    Debt,
    Expense,
    Group,
    Transaction
};
