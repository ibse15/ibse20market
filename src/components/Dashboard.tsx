import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Clock, Activity } from "lucide-react";
import { ModuleCard } from "./ModuleCard";
import { modules } from "../utils/constants";

interface DashboardProps {
  onSelectModule: (id: string) => void;
}

export function Dashboard({ onSelectModule }: DashboardProps) {
  const totalStats = modules.reduce(
    (acc, m) => ({
      campaigns: acc.campaigns + parseInt(m.stats[0].value) || 0,
      growth: acc.growth + parseFloat(m.stats[2].value) || 0,
    }),
    { campaigns: 0, growth: 0 }
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-emerald-600 font-medium mb-4">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Marketing Intelligence Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Your Marketing Command Center
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mb-8">
              Unify your marketing operations with AI-powered tools for growth, content, analytics, and automation.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Active Modules", value: "6", icon: TrendingUp },
                { label: "Total Campaigns", value: "24", icon: ArrowUpRight },
                { label: "Avg. Performance", value: "94%", icon: Activity },
                { label: "Last Updated", value: "2m ago", icon: Clock },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-200"
                >
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Marketing Modules</h2>
          <span className="text-sm text-slate-400">{modules.length} modules available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index}
              onSelect={onSelectModule}
            />
          ))}
        </div>
      </div>
    </div>
  );
}