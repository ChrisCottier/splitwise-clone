import React from 'react';

export const Expense = (props) => {
  const { id, creator, title, amount, created_at, image_url } = props.expense;
  // Expenses returned from the query are always only associated with the current user,
  return (  // therefore we do not need additional logic.
    <>
      <span key={id} style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <img src={image_url.url} style={{ height: '60px', width: '60px' }}></img>
        </div>
        <div>
          <p><strong>{creator.name}</strong> added <strong>"{title}."</strong></p>
          <p>{creator.name} paid ${amount}.</p>
          <p>{created_at}</p>
        </div>
      </span>
    </>
  );
};

export default Expense;