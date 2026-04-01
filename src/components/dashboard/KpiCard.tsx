import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  color?: string;
  className?: string;
}

const KpiCard = ({ label, value, subtitle, icon: Icon, color = "text-foreground", className = "" }: KpiCardProps) => {
  return (
    <div className={`bg-card rounded-xl border border-border p-4 flex flex-col gap-1 ${className}`}>
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold tracking-wider uppercase ${color}`}>{label}</span>
        {Icon && <Icon size={18} className="text-muted-foreground" />}
      </div>
      <span className="text-2xl font-bold text-foreground">{value}</span>
      {subtitle && <span className="text-xs text-muted-foreground">{subtitle}</span>}
    </div>
  );
};

export default KpiCard;
