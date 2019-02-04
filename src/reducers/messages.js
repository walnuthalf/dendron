import { messages } from '../data/messages';

export default (state = messages , action) => {
  const { type, newMessage } = action
  switch (type) {
    case 'SEND_MESSAGE':
      if (newMessage.firstMessageDate - state[0].firstMessageDate < 86400000){ // gap is less than 1 day
        // adding new messages to existing date block
        return [
          { ...state[0],
            messages: [...state[0].messages, ...newMessage.messages]
          },
          ...state.filter((item,index) => index !== 0)
        ];
      }
      // creating new date block with new message
      return [
        newMessage,
        ...state
      ]

    default:
      return state;
  }
};
