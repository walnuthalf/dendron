import { userReply } from '../helpers';

export const sendMessage = (messageBody) => (dispatch) => {
  dispatch({
    type: 'SEND_MESSAGE',
    newMessage: {
      id: Math.random(),
      firstMessageDate: Date.now(),
      messages: [{
        id: Math.random(),
        type: 'plain',
        role: 'admin',
        author: 'Мария',
        imgSrc: '/img/mariya.jpg',
        messageBody,
        sentDate: Date.now()
      }]
    }
  });

  const replyMessage = userReply(messageBody);

  setTimeout(() => {
    dispatch({
      type: 'SEND_MESSAGE',
      newMessage: {
        id: Math.random(),
        firstMessageDate: Date.now(),
        messages: [{
          id: Math.random(),
          type: 'plain',
          role: 'user',
          author: 'Дэн',
          imgSrc: '/img/dan.jpg',
          messageBody: replyMessage,
          sentDate: Date.now()
        }]
      }
    });
  }, 1000);
};

export const bootstrapMessage = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'SEND_MESSAGE',
      newMessage: {
        id: Math.random(),
        firstMessageDate: Date.now(),
        messages: [{
          id: Math.random(),
          type: 'plain',
          role: 'user',
          author: 'Дэн',
          imgSrc: '/img/dan.jpg',
          messageBody: 'Привет, могу рассказать анекдот, узнать погоду, сказать как у меня дела и занять денег, если попросишь',
          sentDate: Date.now()
        }]
      }
    });
  }, 2000);
}

export const sendOperation = (operation, currency) => ({
  type: 'SEND_MESSAGE',
  newMessage: {
    id: Math.random(),
    firstMessageDate: Date.now(),
    messages: [{
      id: Math.random(),
      type: 'operation',
      role: 'admin',
      author: 'Мария',
      imgSrc: '/img/mariya.jpg',
      operationDate: operation.date,
      operationType: operation.type,
      operationSum: operation.sum,
      operationCurrency: currency,
      sentDate: Date.now()
    }]
  }
})
