export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-600",
      border: "border-emerald-200",
      light: "bg-emerald-50",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
      light: "bg-blue-50",
    },
    violet: {
      bg: "bg-violet-500",
      text: "text-violet-600",
      border: "border-violet-200",
      light: "bg-violet-50",
    },
    amber: {
      bg: "bg-amber-500",
      text: "text-amber-600",
      border: "border-amber-200",
      light: "bg-amber-50",
    },
    rose: {
      bg: "bg-rose-500",
      text: "text-rose-600",
      border: "border-rose-200",
      light: "bg-rose-50",
    },
    cyan: {
      bg: "bg-cyan-500",
      text: "text-cyan-600",
      border: "border-cyan-200",
      light: "bg-cyan-50",
    },
  };
  return colorMap[color] || colorMap.blue;
};