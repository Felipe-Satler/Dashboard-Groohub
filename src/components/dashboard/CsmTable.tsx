import { useState } from "react";
import { TrendingUp, Users, BarChart3 } from "lucide-react";

const csmData = [
  { rank: 1, name: "Bruna Martins Barboza", email: "bruna.barboza@viverdei...", meta: 32, emAnalise: 0, pontos: 14, pctMeta: 42 },
  { rank: 2, name: "Joana Stanieski", email: "joana@viverdeia.ai", meta: 32, emAnalise: 0, pontos: 12, pctMeta: 38 },
];

const CsmTable = () => {
  const [tab, setTab] = useState<"csm" | "dist">("csm");

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center gap-2 mb-5">
        <div className="flex bg-secondary rounded-lg overflow-hidden">
          <button
            onClick={() => setTab("csm")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-colors ${
              tab === "csm" ? "bg-muted text-foreground" : "text-muted-foreground"
            }`}
          >
            <Users size={14} /> Por CSM
          </button>
          <button
            onClick={() => setTab("dist")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-colors ${
              tab === "dist" ? "bg-muted text-foreground" : "text-muted-foreground"
            }`}
          >
            <BarChart3 size={14} /> Distribuições
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Users size={16} className="text-muted-foreground" />
        <h3 className="text-sm font-semibold text-foreground">Performance por CSM</h3>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-muted-foreground border-b border-border">
            <th className="text-left py-2 font-medium">CSM</th>
            <th className="text-center py-2 font-medium">Meta</th>
            <th className="text-center py-2 font-medium">Em Análise</th>
            <th className="text-center py-2 font-medium">Pontos</th>
            <th className="text-center py-2 font-medium">% Meta</th>
            <th className="text-center py-2 font-medium">Progresso</th>
          </tr>
        </thead>
        <tbody>
          {csmData.map((csm) => (
            <tr key={csm.rank} className="border-b border-border/50">
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">
                    {csm.rank}
                  </span>
                  <div>
                    <p className="text-foreground font-medium text-sm">{csm.name}</p>
                    <p className="text-xs text-muted-foreground">{csm.email}</p>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span className="text-muted-foreground">⊙ {csm.meta} ✏</span>
              </td>
              <td className="text-center">
                <span className="inline-flex items-center gap-1">
                  <span className="bg-kpi-yellow/20 text-kpi-yellow text-xs px-2 py-0.5 rounded-full">{csm.emAnalise}</span>
                </span>
              </td>
              <td className="text-center">
                <span className="bg-kpi-blue/20 text-kpi-blue text-xs px-2 py-0.5 rounded-full">{csm.pontos}</span>
              </td>
              <td className="text-center">
                <span className="text-kpi-red font-semibold">{csm.pctMeta}%</span>
              </td>
              <td className="text-center">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-kpi-blue rounded-full"
                      style={{ width: `${csm.pctMeta}%` }}
                    />
                  </div>
                  <TrendingUp size={14} className="text-muted-foreground" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsmTable;
