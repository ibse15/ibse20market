import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModuleNavigation } from "./components/ModuleNavigation";
import { Dashboard } from "./components/Dashboard";
import { ModuleDetails } from "./components/ModuleDetails";
import { modules } from "./utils/constants";

function App() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const selectedModule = modules.find((m) => m.id === activeModule);

  const handleNavigate = (id: string) => {
    setActiveModule(id || null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <ModuleNavigation activeModule={activeModule} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        {selectedModule ? (
          <ModuleDetails
            key="details"
            module={selectedModule}
            onBack={() => setActiveModule(null)}
          />
        ) : (
          <Dashboard key="dashboard" onSelectModule={handleNavigate} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;