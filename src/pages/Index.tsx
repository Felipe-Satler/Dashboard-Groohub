import { Calendar, ClipboardList, FileText, Star, Target, TrendingUp, Eye, RefreshCw } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import KpiCard from "@/components/dashboard/KpiCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import ForecastCards from "@/components/dashboard/ForecastCards";
import CasesChart from "@/components/dashboard/CasesChart";
import CsmTable from "@/components/dashboard/CsmTable";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-kpi-green/20 flex items-center justify-center">
              <ClipboardList size={20} className="text-kpi-green" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dashboard de Cases</h1>
              <p className="text-sm text-muted-foreground">Acompanhe a criação e aprovação de cases de sucesso</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar size={16} />
            <span>Mês atual</span>
            <span>•</span>
            <span>1–31 mar</span>
            <button className="ml-2 p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <KpiCard label="Cases Aprovados" value={26} subtitle="+ 0 em análise" icon={FileText} color="text-kpi-green" />
          <KpiCard label="Meta do Período" value={64} subtitle="Faltam: 38 pts" icon={Target} color="text-kpi-blue" />
          <KpiCard
            label="% Atingimento"
            value="40%"
            icon={TrendingUp}
            color="text-kpi-yellow"
            className="border-kpi-yellow/30"
          />
          <KpiCard label="Forecast Total" value={1} subtitle="Projeção: 27 / 64" icon={ClipboardList} color="text-kpi-purple" />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
            <FileText size={16} className="text-muted-foreground" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Ano</p>
              <p className="text-lg font-bold text-foreground">25</p>
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
            <Eye size={16} className="text-muted-foreground" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Publicados</p>
              <p className="text-lg font-bold text-foreground">25</p>
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
            <Star size={16} className="text-muted-foreground" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Destaques</p>
              <p className="text-lg font-bold text-foreground">0</p>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-4">
          <ProgressCard />
        </div>

        {/* Forecast Cards */}
        <div className="mb-4">
          <ForecastCards />
        </div>

        {/* Chart */}
        <div className="mb-4">
          <CasesChart />
        </div>

        {/* CSM Table */}
        <CsmTable />
      </main>
    </div>
  );
};

export default Index;
