import useTransactionStats from "../../hooks/useTransactionStats";
import ActionButton from "./ActionButton";

interface TotalBalanceProps {
  change: string;
}

export default function TotalBalance({ change }: TotalBalanceProps) {
  const { balance } = useTransactionStats();

  return (
    <div className="flex justify-between p-4 rounded-2xl bg-white/60 border border-white/40 shadow-sm">
      <div className="flex flex-col justify-between">
        <p>Total balance</p>
        <h5 className="text-4xl font-bold">
          ₴{balance}
          <span className="text-xl">
            .<span className="text-neutral-400">00</span>
          </span>
        </h5>
        <p className="text-xs text-neutral-500">
          <span className="text-green-600">{change}%</span> compared to last
          month
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <ActionButton />
        <ActionButton variant="receive" />
      </div>
    </div>
  );
}
