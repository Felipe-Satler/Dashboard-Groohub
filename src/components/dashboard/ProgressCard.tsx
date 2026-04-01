import { TrendingUp, Calendar } from "lucide-react";

const ProgressCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Progresso MTD */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={16} className="text-kpi-green" />
          <span className="text-xs font-semibold text-kpi-green tracking-wider uppercase">Progresso MTD</span>
        </div>
        <div className="flex items-end justify-between mb-1">
          <div>
            <p className="text-3xl font-bold text-foreground">52%</p>
            <p className="text-xs text-kpi-red font-semibold">Atrasado</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-foreground">26 <span className="text-muted-foreground text-sm">/ 50</span></p>
            <p className="text-xs text-muted-foreground">Faltam 24 pts p/ meta proporcional</p>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
          <span>Realizado</span>
          <span>Meta MTD</span>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-kpi-blue rounded-full" style={{ width: "52%" }} />
        </div>
      </div>

      {/* Dias Úteis */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={16} className="text-kpi-blue" />
          <span className="text-xs font-semibold text-kpi-blue tracking-wider uppercase">Dias Úteis do Período</span>
        </div>
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-3xl font-bold text-foreground">24 <span className="text-muted-foreground text-lg">/ 31</span></p>
            <p className="text-xs text-muted-foreground">dias passados</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-kpi-orange">⏱ 7</p>
            <p className="text-xs text-muted-foreground">dias restantes</p>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
          <span>Progresso</span>
          <span>77%</span>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-kpi-blue rounded-full" style={{ width: "77%" }} />
        </div>
        <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
          <span>⊙ Média/dia</span>
          <span className="ml-auto text-foreground font-bold text-lg">1.07</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
