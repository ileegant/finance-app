import useCalculatedStats from "../../hooks/useCalculateStats";
import useTransactionStats from "../../hooks/useTransactionStats";
import { formatAmountWithSeparators } from "../../utils/formatAmount";
import ActionButton from "./ActionButton";

export default function TotalBalance() {
  const { balance } = useTransactionStats();
  const { balanceChange } = useCalculatedStats();

  const [integerPart, decimalPart] = formatAmountWithSeparators(balance);

  return (
    <div className="flex justify-between p-4 rounded-2xl bg-white/60 border border-white/40 shadow-sm">
      <div className="flex flex-col justify-between">
        <p>Total balance</p>
        <h5 className="text-4xl font-bold">
          ₴{integerPart}
          <span className="text-xl">
            .<span className="text-neutral-400">{decimalPart}</span>
          </span>
        </h5>
        <p className="text-xs text-neutral-500">
          <span
            className={
              Number(balanceChange) < 0 ? "text-red-600" : "text-green-600"
            }
          >
            {Number(balanceChange) > 0 && "+"}
            {balanceChange}%
          </span>{" "}
          compared to last month
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <ActionButton />
        <ActionButton variant="receive" />
      </div>
    </div>
  );
}
