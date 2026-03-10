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
    <button className="flex items-center gap-2 p-1 pr-16 rounded-full bg-white hover:bg-slate-50 shadow-sm cursor-pointer">
      <div className="p-2 rounded-full bg-slate-100">
        <Icon />
      </div>
      {config.label}
    </button>
  );
}
