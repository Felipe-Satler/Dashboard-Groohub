import { TrendingUp, Zap, AlertTriangle } from "lucide-react";

const cards = [
  { label: "FORECAST TOTAL", value: "1", subtitle: "Projeção de pontos no período", icon: TrendingUp, color: "text-kpi-green" },
  { label: "FORECAST HOJE", value: "0", subtitle: "Projeção até hoje", icon: Zap, color: "text-kpi-yellow" },
  { label: "GAP P/ META", value: "37", subtitle: "Diferença entre projeção e meta (pts)", icon: AlertTriangle, color: "text-kpi-red" },
];

const ForecastCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs font-semibold tracking-wider uppercase ${card.color}`}>{card.label}</span>
            <card.icon size={18} className={card.color} />
          </div>
          <p className="text-3xl font-bold text-foreground">{card.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCards;
