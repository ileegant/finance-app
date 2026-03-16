import { useForm, type SubmitHandler } from "react-hook-form";
import type { Transaction } from "../../data/mockTransactions";
import { CATEGORY_MAP } from "../../constants/categories";

export default function TransactionForm() {
  const { register, handleSubmit, setValue, watch } = useForm<Transaction>({
    defaultValues: {
      type: "expense",
      date: new Date().toISOString().slice(0, 16),
    },
  });

  const currentType = watch("type");

  const onSubmit: SubmitHandler<Transaction> = (data) => {
    console.log(data);
  };

  const inputBaseStyles =
    "w-full p-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-neutral-50 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-6"
    >
      <div className="space-y-4">
        <div className="flex gap-3">
          <input
            {...register("title")}
            type="text"
            placeholder="Опис (Сільпо, ЗП...)"
            className={`${inputBaseStyles} flex-2`}
          />
          <div className="relative flex-1">
            <select
              {...register("category")}
              className={`${inputBaseStyles} appearance-none pr-8 cursor-pointer`}
            >
              <option value="">Категорія</option>
              {Object.entries(CATEGORY_MAP).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
              ▼
            </div>
          </div>
        </div>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-xl font-medium">
            ₴
          </span>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            step="0.01"
            placeholder="0.00"
            className="w-full h-20 pl-10 pr-6 bg-white border-2 border-neutral-200 rounded-2xl text-4xl font-bold text-right focus:border-neutral-500 focus:outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex p-1 bg-neutral-200 rounded-2xl w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setValue("type", "income")}
              className={`flex-1 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                currentType === "income"
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700 cursor-pointer"
              }`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setValue("type", "expense")}
              className={`flex-1 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                currentType === "expense"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700 cursor-pointer"
              }`}
            >
              Expense
            </button>
          </div>

          <input
            {...register("date")}
            type="datetime-local"
            className="w-full sm:w-auto p-2 bg-transparent text-sm text-neutral-500 font-medium cursor-pointer"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 text-white bg-neutral-900 rounded-2xl font-bold hover:bg-black active:scale-[0.98] transition-all shadow-lg shadow-neutral-200"
      >
        Add Transaction
      </button>
    </form>
  );
}
