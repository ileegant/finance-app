import { useForm, type SubmitHandler } from "react-hook-form";
import { CATEGORY_MAP } from "../../constants/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  transactionSchema,
  type TransactionForm,
} from "../../schemas/transaction";

export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TransactionForm>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: "expense",
      date: new Date().toISOString().slice(0, 16),
    },
  });

  const currentType = watch("type");

  const onSubmit: SubmitHandler<TransactionForm> = (data) => {
    console.log(data);
  };

  const inputBaseStyles =
    "w-full p-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-md flex-col gap-6 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm"
    >
      {Object.keys(errors).length > 0 && (
        <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4">
          <p className="mb-2 font-bold text-red-800">
            Виправте наступні помилки:
          </p>
          <ul className="list-inside list-disc text-sm text-red-600">
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>
                <strong>{field}:</strong> {error?.message as string}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-1">
            <input
              {...register("title")}
              type="text"
              placeholder="Title"
              className={`${inputBaseStyles} flex-2 ${
                errors.title && "focus:ring-red-400"
              }`}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="relative flex-1">
              <select
                {...register("category")}
                className={`${inputBaseStyles} cursor-pointer appearance-none pr-8 ${
                  errors.category && "focus:ring-red-400"
                }`}
              >
                <option value="">Категорія</option>
                {Object.entries(CATEGORY_MAP).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400">
                ▼
              </div>
            </div>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="relative">
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-xl font-medium text-neutral-400">
              ₴
            </span>
            <input
              {...register("amount")}
              type="number"
              step="0.01"
              placeholder="0.00"
              className={`h-20 w-full rounded-2xl border-2 border-neutral-200 bg-white pr-6 pl-10 text-right text-4xl font-bold transition-colors focus:border-neutral-500 focus:outline-none ${
                errors.amount && "focus:border-red-400"
              }`}
            />
          </div>
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex w-full rounded-2xl bg-neutral-200 p-1 sm:w-auto">
            <button
              type="button"
              onClick={() => setValue("type", "income")}
              className={`flex-1 rounded-xl px-6 py-2 text-sm font-bold transition-all ${
                currentType === "income"
                  ? "bg-white text-green-600 shadow-sm"
                  : "cursor-pointer text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setValue("type", "expense")}
              className={`flex-1 rounded-xl px-6 py-2 text-sm font-bold transition-all ${
                currentType === "expense"
                  ? "bg-white text-red-600 shadow-sm"
                  : "cursor-pointer text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Expense
            </button>
          </div>

          <input
            {...register("date")}
            type="datetime-local"
            className="w-full cursor-pointer bg-transparent p-2 text-sm font-medium text-neutral-500 sm:w-auto"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-neutral-900 py-4 font-bold text-white shadow-lg shadow-neutral-200 transition-all hover:bg-black active:scale-[0.98]"
      >
        {isSubmitting ? "Submiting..." : "Add Transaction"}
      </button>
    </form>
  );
}
