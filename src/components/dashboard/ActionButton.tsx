import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";

const VARIANTS = {
  send: { label: "Send", icon: BanknoteArrowUp },
  receive: { label: "Receive", icon: BanknoteArrowDown },
};

type ActionButtonVariant = keyof typeof VARIANTS;

interface ActionButtonProps {
  variant?: ActionButtonVariant;
}

export default function ActionButton({ variant = "send" }: ActionButtonProps) {
  const config = VARIANTS[variant];
  const Icon = config.icon;

  return (
    <button className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-1 pr-16 shadow-sm hover:bg-slate-50">
      <div className="rounded-full bg-slate-100 p-2">
        <Icon />
      </div>
      {config.label}
    </button>
  );
}
