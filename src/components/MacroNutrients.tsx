import React, { useState, useEffect } from "react";
import { defaultMacroNutrients } from "./calculations";

import "./../App.css";
import MacroNutrient from "./MacroNutrient";
import MacroPieChart from "./MacroPieChart";

export interface MacroNutrientData {
  name: string;
  raw: number;
  amount: number;
  unit: string;
}

interface MacroNutrientsProps {
  macroNutrients: {
    calories: MacroNutrientData;
    proteins: MacroNutrientData;
    carbs: MacroNutrientData;
    fats: MacroNutrientData;
    sugars: MacroNutrientData;
  };
}

const MacroNutrients: React.FC<MacroNutrientsProps> = ({
  macroNutrients = defaultMacroNutrients,
}) => {
  const [macroNutrientList, setMacroNutrientList] = useState<
    MacroNutrientData[]
  >([]);

  useEffect(() => {
    setMacroNutrientList([
      macroNutrients.calories,
      macroNutrients.proteins,
      macroNutrients.carbs,
      macroNutrients.fats,
      macroNutrients.sugars,
    ]);
  }, [macroNutrients]);

  return (
    <div className="macroNutrients">
      {macroNutrientList.map((macroNutrient) => (
        <MacroNutrient
          key={macroNutrient.name}
          name={macroNutrient.name}
          amount={macroNutrient.amount}
          units={macroNutrient.unit}
        />
      ))}
      <MacroPieChart
        proteins={macroNutrients.proteins.amount}
        carbohydrates={macroNutrients.carbs.amount}
        fat={macroNutrients.fats.amount}
        sugar={macroNutrients.sugars.amount}
      />
    </div>
  );
};

export default MacroNutrients;
