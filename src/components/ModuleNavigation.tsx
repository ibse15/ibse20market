import { motion } from "framer-motion";
import { Home, TrendingUp, Filter, FileText, BarChart, Zap, Users } from "lucide-react";
import { cn } from "../utils/helpers";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "growth-engine", label: "Growth", icon: TrendingUp },
  { id: "sales-pipeline", label: "Sales", icon: Filter },
  { id: "content-ops", label: "Content", icon: FileText },
  { id: "analytics-hub", label: "Analytics", icon: BarChart },
  { id: "automation-center", label: "Automation", icon: Zap },
  { id: "customer-insights", label: "Customers", icon: Users },
];

interface ModuleNavigationProps {
  activeModule: string | null;
  onNavigate: (id: string) => void;
}

export function ModuleNavigation({ activeModule, onNavigate }: ModuleNavigationProps) {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-bold text-lg tracking-tight">MarketingOS</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeModule === item.id || (!activeModule && item.id === "dashboard");
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate(item.id === "dashboard" ? "" : item.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">
              JD
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}