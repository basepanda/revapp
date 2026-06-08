import type { Question } from "./questions";

import { cellularProcessesQuestions } from "./science/cellular-processes";
import { cellDifferentiationQuestions } from "./science/cell-differentiation";
import { osmosisQuestions } from "./science/osmosis";
import { enzymeQuestions } from "./science/enzyme";
import { activeSiteQuestions } from "./science/active-site";
import { digestionQuestions } from "./science/digestion";
import { nutritionQuestions } from "./science/nutrition";
import { energyQuestions } from "./science/energy";
import { workPowerQuestions } from "./science/work-power";
import { energyStoresQuestions } from "./science/energy-stores";
import { energyTransfersQuestions } from "./science/energy-transfers";
import { energyEfficiencyQuestions } from "./science/energy-efficiency";
import { powerQuestions } from "./science/power";
import { nonRenewableQuestions } from "./science/non-renewable";
import { renewableQuestions } from "./science/renewable";
import { earthScienceQuestions } from "./science/earth-science";
import { atmosphereQuestions } from "./science/atmosphere";
import { resourcesQuestions } from "./science/resources";

export const SCIENCE_QUESTIONS: Record<string, Question[]> = {
  "cellular-processes": cellularProcessesQuestions,
  "cell-differentiation": cellDifferentiationQuestions,
  osmosis: osmosisQuestions,
  enzyme: enzymeQuestions,
  "active-site": activeSiteQuestions,
  digestion: digestionQuestions,
  nutrition: nutritionQuestions,
  energy: energyQuestions,
  "work-power": workPowerQuestions,
  "energy-stores": energyStoresQuestions,
  "energy-transfers": energyTransfersQuestions,
  "energy-efficiency": energyEfficiencyQuestions,
  power: powerQuestions,
  "non-renewable": nonRenewableQuestions,
  renewable: renewableQuestions,
  "earth-science": earthScienceQuestions,
  atmosphere: atmosphereQuestions,
  resources: resourcesQuestions,
};