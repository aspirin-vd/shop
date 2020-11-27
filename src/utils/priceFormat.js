const priceFormat = (price, locales = 'en', currency = 'EUR') =>
  new Intl.NumberFormat(locales,
    { style: 'currency', currency: currency }).format(price);

export default priceFormat;
