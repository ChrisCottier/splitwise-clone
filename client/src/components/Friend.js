import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { apiUrl } from '../config';

const Friend = (props) => {
    const url = `${apiUrl}/friends/${props.user.id}`
    return (
        <tr>
            <td>
                <a href={url}>
                    <i className='user-icon'>
                        {/* <FontAwesomeIcon icon='coffee' /> */}
                    </i> {props.user.name}
                </a>
            </td>
        </tr>
    )
}

export default Friend;
