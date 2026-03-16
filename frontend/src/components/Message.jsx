import React from 'react';

const Message = ({ type = 'info', children }) => (
  <div className={`message message-${type}`} role="alert">
    {children}
  </div>
);

export default Message;
