import { motion } from "framer-motion";
import { TrendingUp, Filter, FileText, BarChart, Zap, Users, ArrowRight } from "lucide-react";
import { Module } from "../types";
import { getColorClasses } from "../utils/helpers";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Filter,
  FileText,
  BarChart,
  Zap,
  Users,
};

interface ModuleCardProps {
  module: Module;
  index: number;
  onSelect: (id: string) => void;
}

export function ModuleCard({ module, index, onSelect }: ModuleCardProps) {
  const Icon = iconMap[module.icon];
  const colors = getColorClasses(module.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(module.id)}
      className="cursor-pointer"
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full hover:shadow-lg hover:border-slate-300 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${colors.light} ${colors.border} border`}>
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${colors.light} ${colors.text}`}>
            Active
          </span>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">{module.name}</h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">{module.description}</p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {module.stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-400 truncate">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-400">{module.features.length} features</span>
          <div className={`flex items-center gap-1 text-sm font-medium ${colors.text}`}>
            View Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}