import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, ComposedChart } from "recharts";

const dailyData = [
  { date: "01/03", cases: 0, pace: 2 },
  { date: "03/03", cases: 0, pace: 4 },
  { date: "05/03", cases: 1, pace: 6 },
  { date: "07/03", cases: 2, pace: 9 },
  { date: "09/03", cases: 3, pace: 11 },
  { date: "11/03", cases: 5, pace: 14 },
  { date: "13/03", cases: 7, pace: 17 },
  { date: "15/03", cases: 10, pace: 20 },
  { date: "17/03", cases: 14, pace: 24 },
  { date: "19/03", cases: 18, pace: 28 },
  { date: "21/03", cases: 22, pace: 33 },
  { date: "23/03", cases: 24, pace: 39 },
  { date: "25/03", cases: 25, pace: 45 },
  { date: "27/03", cases: 26, pace: 52 },
  { date: "29/03", cases: 26, pace: 58 },
  { date: "31/03", cases: 26, pace: 64 },
];

const CasesChart = () => {
  const [view, setView] = useState<"daily" | "accumulated">("accumulated");
  const [showMeta, setShowMeta] = useState(true);

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-foreground">Evolução de Cases</h3>
        <div className="flex items-center gap-3">
          <div className="flex bg-secondary rounded-lg overflow-hidden">
            <button
              onClick={() => setView("daily")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                view === "daily" ? "bg-muted text-foreground" : "text-muted-foreground"
              }`}
            >
              Diário
            </button>
            <button
              onClick={() => setView("accumulated")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                view === "accumulated" ? "bg-muted text-foreground" : "text-muted-foreground"
              }`}
            >
              Acumulado
            </button>
          </div>
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <div
              onClick={() => setShowMeta(!showMeta)}
              className={`w-9 h-5 rounded-full transition-colors relative ${showMeta ? "bg-kpi-cyan" : "bg-secondary"}`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full bg-foreground absolute top-0.5 transition-transform ${
                  showMeta ? "translate-x-4" : "translate-x-1"
                }`}
              />
            </div>
            Meta
          </label>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(225 15% 20%)" />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(215 15% 55%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(215 15% 55%)" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(225 20% 14%)",
              border: "1px solid hsl(225 15% 20%)",
              borderRadius: "8px",
              color: "hsl(210 20% 90%)",
              fontSize: "12px",
            }}
          />
          <Area
            type="monotone"
            dataKey="cases"
            stroke="hsl(168 70% 45%)"
            fill="hsl(168 70% 45% / 0.15)"
            strokeWidth={2}
            name="Cases Aprovados"
          />
          {showMeta && (
            <Line
              type="monotone"
              dataKey="pace"
              stroke="hsl(215 15% 55%)"
              strokeWidth={1.5}
              strokeDasharray="6 3"
              dot={false}
              name="PACE Meta"
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-6 mt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-kpi-green rounded" /> Cases Aprovados
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-muted-foreground rounded border-dashed" style={{ borderTop: "1.5px dashed" }} /> PACE Meta
        </span>
      </div>
    </div>
  );
};

export default CasesChart;
