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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} type="text" placeholder="Title" />
      <select {...register("category")}>
        <option value="">Choose category</option>
        {Object.entries(CATEGORY_MAP).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
      <input
        {...register("amount", { valueAsNumber: true })}
        type="number"
        placeholder="Amount"
      />
      <div>
        <button
          type="button"
          onClick={() => setValue("type", "income")}
          className={`${
            currentType === "income" ? "bg-green-500" : "bg-gray-200"
          }`}
        >
          Income
        </button>
        <button
          type="button"
          onClick={() => setValue("type", "expense")}
          className={`${
            currentType === "expense" ? "bg-red-500" : "bg-gray-200"
          }`}
        >
          Expense
        </button>
      </div>
      <input {...register("date")} type="datetime-local" placeholder="Date" />
      <button
        type="submit"
        className="w-full py-1 text-neutral-50 bg-neutral-700 rounded-xl hover:bg-neutral-800 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
