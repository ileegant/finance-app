export const getStatsPeriod = () => {
  const now = new Date();

  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  return {
    current: { start: startOfCurrentMonth, end: now },
    last: { start: startOfLastMonth, end: startOfCurrentMonth },
  };
};
