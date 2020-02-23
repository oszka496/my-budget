export const groupByDate = (items) => {
  const dates = new Set(items.map(({ date }) => date));
  const itemsByDate = items.reduce((prev, curr) => {
    const { date } = curr;
    const arr = prev[date] || [];
    return { ...prev, [date]: [...arr, curr] };
  },
  {});
  return { dates, itemsByDate };
};
