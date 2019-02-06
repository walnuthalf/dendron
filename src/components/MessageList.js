import React from 'react';

import MessageItem from './MessageItem';
import MessageOperation from './MessageOperation';

const MessageList = ({ messages }) => (
  <div>
    { messages.map(message => {
      switch (message.type) {
      case 'plain':
        return <MessageItem key={ message.id } { ...message } isReversed={ message.role === 'user' } />;
      case 'operation':
        return <MessageOperation key={ message.id } { ...message } />;
      default:
        return null;
      }
    }) }
  </div>
);

export default MessageList;
