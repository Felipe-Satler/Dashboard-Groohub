import { BarChart3, ChevronDown, DollarSign, Headphones, Layout, LogOut, Megaphone, Settings, ShoppingCart } from "lucide-react";

const navItems = [
  { icon: DollarSign, label: "Receita" },
  { icon: ShoppingCart, label: "Vendas" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Headphones, label: "CS", active: true, hasSubmenu: true },
  { icon: Layout, label: "Produto" },
  { icon: Settings, label: "Configurações", hasSubmenu: true },
  { icon: BarChart3, label: "Workspace" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-56 min-h-screen bg-sidebar border-r border-sidebar-border px-3 py-6">
      <div className="flex items-center gap-2 px-3 mb-8">
        <span className="text-primary font-bold text-lg tracking-wider">VN</span>
        <div>
          <p className="text-sidebar-primary text-sm font-semibold tracking-widest">VIVER DE IA</p>
          <p className="text-muted-foreground text-[10px] tracking-widest">PLATAFORMA DE DADOS</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon size={18} />
            <span className="flex-1 text-left">{item.label}</span>
            {item.hasSubmenu && <ChevronDown size={14} className="text-muted-foreground" />}
          </button>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 text-sidebar-foreground hover:text-sidebar-accent-foreground text-sm transition-colors">
        <LogOut size={18} />
        <span>Sair</span>
      </button>
    </aside>
  );
};

export default Sidebar;
