export const CURRENCIES_FETCHED = 'CURRENCIES:FETCHED';

export const currenciesFetched = currencies => ({
  type: CURRENCIES_FETCHED,
  currencies,
});
