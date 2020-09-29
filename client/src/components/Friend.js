import React from "react";
import { apiUrl } from "../config";

const Friend = (props) => {
  const { url } = props.user.image_url;
  return (
    <tr>
      <td>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            className="user-icon"
            src={url}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <p style={{ fontSize: "12px", color: "#5F4F4A" }}>
            {props.user.name}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default Friend;
