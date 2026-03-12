export const formatAmount = (amount: number): [string, string] => {
  return amount.toFixed(2).split(".") as [string, string];
};
