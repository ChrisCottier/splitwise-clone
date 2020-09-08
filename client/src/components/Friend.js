import React from "react";
import { apiUrl } from "../config";

const Friend = (props) => {
  const { url } = props.user.image_url
  return (
    <tr>
      <td>
        <a style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <img className="user-icon" src={url} alt='' style={{ width: '25px', height: '25px' }} />
          <p style={{fontSize:"13px"}}>{props.user.name}</p>
        </a>
      </td>
    </tr>
  );
};

export default Friend;
