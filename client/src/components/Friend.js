import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Friend = (props) => {
    const url = `#/friends/${props.user.id}`
    return (
        <td>
            <a href={url}>
                <i className='user-icon'>
                <FontAwesomeIcon icon='coffee' />::before
                </i> {props.user.name}
            </a>
        </td>
    )
}