const dateFormat = (date, locales = 'en') => {
  if (date) {
    const _date = Date.parse(date);
    const now = Date.parse(new Date());
    const diff = Math.abs(now - _date);
    let res = new Intl.DateTimeFormat(locales).format(_date);
    switch (true) {
      case (diff <= 1000):
        res = 'Just';
        break;
      case (diff <= 30000):
        res = '30 seconds ago';
        break;
      case (diff <= 300000):
        res = '5 minutes ago';
        break;

      default:
        break;
    }

    return res;
  }
};

export default dateFormat;
