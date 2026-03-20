export const formatAmount = (amount: number): [string, string] => {
  return amount.toFixed(2).split(".") as [string, string];
};

export const formatAmountWithSeparators = (
  amount: number,
): [string, string] => {
  const formatter = new Intl.NumberFormat("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount).split(",") as [string, string];
};
