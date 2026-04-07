import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Filter, FileText, BarChart, Zap, Users, Check } from "lucide-react";
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

interface ModuleDetailsProps {
  module: Module;
  onBack: () => void;
}

export function ModuleDetails({ module, onBack }: ModuleDetailsProps) {
  const Icon = iconMap[module.icon];
  const colors = getColorClasses(module.color);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${colors.bg} to-${module.color}-600`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{module.name}</h1>
              <p className="text-white/80 max-w-2xl">{module.description}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {module.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
            >
              <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                {stat.change && (
                  <span className="text-sm font-medium text-emerald-600 mb-1">
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {module.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className={`flex items-center gap-3 p-4 rounded-xl ${colors.light} border ${colors.border}`}
              >
                <div className={`p-1 rounded-full ${colors.bg}`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Action */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Ready to get started?</h3>
            <p className="text-sm text-slate-500">Launch this module and start optimizing your marketing operations.</p>
          </div>
          <button className={`w-full md:w-auto px-6 py-3 rounded-xl font-medium text-white ${colors.bg} hover:opacity-90 transition-opacity`}>
            Launch Module
          </button>
        </motion.div>
      </div>
    </div>
  );
}