import React from "react";

const Message = ({msg,status="success"}) => {
  return (
    <div className={msg !== "" ? `alert alert-${status}` : "d-none"}>
      {msg}
    </div>
  );
};

export default Message;
