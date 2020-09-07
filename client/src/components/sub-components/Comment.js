import React from 'react';
import { imageUrl } from '../../config';
import { splitAmount, getCommentDate } from '../../utils';
export const Comment = (props) => {
    const { message, created_at, commentor } = props.message;
    // const { name } = commentor;
    console.log(commentor)
    return (
        <>
            <div>
                <p style={{ fontSize: '12px' }}>{commentor.name} on {getCommentDate(created_at)}</p>
                <textarea value={message} readOnly={true} rows="5" cols="30"></textarea>
            </div>
        </>
    )
}
export const Debt = (props) => {
    const { lender, borrower, expense } = props.debt;
    const { url: lenderUrl } = lender.image_url;
    const { url: borrowerUrl } = borrower.image_url;
    const owed = splitAmount(expense.amount)
    // console.log(lender, borrower, lenderUrl, borrowerUrl, expense)
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img id="lender-image" src={lenderUrl} alt='' style={{ height: '60px', width: '60px' }} />
                <p><strong>{lender.name}</strong> paid <strong>${expense.amount}</strong></p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img id='borrower-image' src={borrowerUrl} alt='' style={{ height: '60px', width: '60px' }} />
                <p><strong>{borrower.name}</strong> owes <strong>${owed}</strong></p>
            </div>
        </>
    )
}
export default { Comment, Debt };
