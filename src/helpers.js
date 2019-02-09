export const getBalanceSign = (currency) => (currency === 'dollars' && '$') || (currency === 'rubles' && '₽');

export const formatDate = (timeStamp, withSeconds) => {
  const date = new Date(timeStamp);
  if (withSeconds) return `${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()} | ${("0" + (date.getHours() + 1)).slice(-2)}:${("0" + (date.getMinutes() + 1)).slice(-2)}`;
  return `${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
}

export const userReply = (message) => {
  message = message.toLowerCase();

  let response = 'Не понимаю вас, но могу рассказать пару анекдотов если попросите';

  const repliesTo = [
    {
      keys: ['привет', 'добрый день', 'добрый вечер', 'здарова', 'добрый ночи', 'здравствуйте', 'приветствую'],
      replies: ['Да, Здравствуйте!', 'Добрый денек', 'Привет, как дела?']
    },
    {
      keys: ['погода'],
      replies: ['В Москве сегодня солнечно', 'В Лондоне сегодня туманно ']
    },
    {
      keys: ['дела', 'у тебя'],
      replies: ['Хорошо', 'Плохо']
    },
    {
      keys: ['почему'],
      replies: ['Заработался']
    },
    {
      keys: ['займи денег', 'одолжи до зарплаты', 'дай в долг', 'дай в займ'],
      replies: ['Да, давай свою карту рокет банка', 'Живу от зарплаты до зарплаты', 'Без проблем', 'Не сегодня', 'У меня нет']
    },
    {
      keys: ['анекдот', 'расскажи', 'давай', 'прошу', 'еще', 'ещё'],
      replies: ['Заходят как-то русский, американец и грузин в бар...', 'Шел медведь по лесу, видит машина горит...', 'Купил мужик шляпу...', 'Играл мальчик на травке в машинку. Она сломалась. Сидит плачет. Подходит наркоман...', 'Лупа и Пупа пошли получать зарплату...', 'Прапорщик садится в машину и говорит водителю...']
    },
    {
      keys: ['спасибо'],
      replies: ['Пожалуйста']
    },
    {
      keys: ['react', 'реакт'],
      replies: ['React?!']
    },
    {
      keys: ['vue', 'angular', 'backbone', 'jquery'],
      replies: ['React!']
    }
  ];

  repliesTo.forEach(item => {
    item.keys.forEach(key => {
      if (message.includes(key)) {
        response = item.replies[Math.floor(Math.random() * item.replies.length)];
      }
    });
  });

  return response;
}
