import React from 'react';


function User(props) {
    return (
        <>
            <strong>ID:</strong> {props.user.id}<br />
            <strong>Username:</strong> {props.user.name}<br />
            <strong>Email:</strong> {props.user.email}<br />
            <strong>Created:</strong> {props.user.created_at}<br />
            <strong>Updated:</strong> {props.user.update_at}<br />
            <hr />
        </>
    );
}
export default User;
