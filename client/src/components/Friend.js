import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiUrl } from "../config";

const Friend = (props) => {
  return (
    <tr>
      <td>
        <a>
          <i className="user-icon">{/* <FontAwesomeIcon icon='user' /> */}</i>{" "}
          {props.user.name}
        </a>
      </td>
    </tr>
  );
};

export default Friend;
