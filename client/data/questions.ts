export interface Question {
  id: string;
  topic: string;
  question: string;
  explanation: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const TOPICS = [
  // MATHS TOPICS
  { id: "hcf", name: "HCF (Highest Common Factor)", category: "Number", subject: "Maths" },
  { id: "solving-equations", name: "Solving Equations", category: "Algebra", subject: "Maths" },
  { id: "rounding", name: "Rounding", category: "Number", subject: "Maths" },
  { id: "ratio", name: "Ratio", category: "Number", subject: "Maths" },
  { id: "form-solve-equations", name: "Form and Solve Equations", category: "Algebra", subject: "Maths" },
  { id: "enlargement", name: "Enlargement", category: "Geometry", subject: "Maths" },
  { id: "pythagoras", name: "Pythagoras' Theorem", category: "Geometry", subject: "Maths" },
  { id: "tree-diagrams", name: "Tree Diagrams", category: "Probability", subject: "Maths" },
  { id: "angles-polygons", name: "Angles in Polygons", category: "Geometry", subject: "Maths" },
  { id: "factor", name: "Factor", category: "Algebra", subject: "Maths" },
  { id: "prime", name: "Prime Numbers", category: "Number", subject: "Maths" },
  { id: "decimal-place", name: "Decimal Place", category: "Number", subject: "Maths" },
  { id: "significant-figure", name: "Significant Figures", category: "Number", subject: "Maths" },
  { id: "scale-factor", name: "Scale Factor", category: "Geometry", subject: "Maths" },
  { id: "factorise", name: "Factorise", category: "Algebra", subject: "Maths" },
  { id: "probability", name: "Probability", category: "Probability", subject: "Maths" },
  { id: "interest", name: "Interest", category: "Number", subject: "Maths" },

  // SCIENCE TOPICS - BIOLOGY
  { id: "cellular-processes", name: "Cellular Processes", category: "Biology", subject: "Science" },
  { id: "cell-differentiation", name: "Cell Differentiation", category: "Biology", subject: "Science" },
  { id: "osmosis", name: "Osmosis", category: "Biology", subject: "Science" },
  { id: "enzyme", name: "Enzyme", category: "Biology", subject: "Science" },
  { id: "active-site", name: "Active Site", category: "Biology", subject: "Science" },
  { id: "digestion", name: "Digestion", category: "Biology", subject: "Science" },
  { id: "nutrition", name: "Nutrition, Digestion and Health", category: "Biology", subject: "Science" },

  // SCIENCE TOPICS - PHYSICS/ENERGY
  { id: "energy", name: "Energy", category: "Physics", subject: "Science" },
  { id: "work-power", name: "Efficiency, Work, and Power", category: "Physics", subject: "Science" },
  { id: "energy-stores", name: "Energy Stores", category: "Physics", subject: "Science" },
  { id: "energy-transfers", name: "Energy Transfers", category: "Physics", subject: "Science" },
  { id: "energy-efficiency", name: "Energy Efficiency", category: "Physics", subject: "Science" },
  { id: "power", name: "Power", category: "Physics", subject: "Science" },
  { id: "non-renewable", name: "Non-renewable Energy", category: "Physics", subject: "Science" },
  { id: "renewable", name: "Renewable Energy", category: "Physics", subject: "Science" },

  // SCIENCE TOPICS - EARTH SCIENCE
  { id: "earth-science", name: "Earth Science", category: "Earth Science", subject: "Science" },
  { id: "atmosphere", name: "Atmosphere", category: "Earth Science", subject: "Science" },
  { id: "resources", name: "Resources", category: "Earth Science", subject: "Science" },
];

function generateQuestions(topicId: string): Question[] {
  const questions: Question[] = [];
  const questionTemplates: { [key: string]: (i: number) => Question } = {
    "hcf": (i) => ({
      id: `hcf-${i}`,
      topic: "hcf",
      category: "Number",
      question: `Find the HCF of ${12 + i} and ${18 + i * 2}`,
      explanation: "The HCF (Highest Common Factor) is the largest number that divides evenly into both numbers. Find all factors of each number and identify the largest one they share.",
      options: [`${6 + i}`, `${3 + i}`, `${2 + i}`, `${9 + i}`],
      correctAnswer: 0,
    }),
    "solving-equations": (i) => ({
      id: `solving-equations-${i}`,
      topic: "solving-equations",
      category: "Algebra",
      question: `Solve: 2x + ${4 + i} = ${12 + i * 2}`,
      explanation: "To solve an equation, isolate the variable x by performing the same operations on both sides. First subtract the constant, then divide by the coefficient of x.",
      options: [`${4 + i}`, `${3 + i}`, `${5 + i}`, `${2 + i}`],
      correctAnswer: 0,
    }),
    "rounding": (i) => ({
      id: `rounding-${i}`,
      topic: "rounding",
      category: "Number",
      question: `Round ${3.456 + i * 0.1} to 1 decimal place`,
      explanation: "Look at the second decimal place. If it's 5 or more, round the first decimal place up. If it's less than 5, keep the first decimal place as is.",
      options: [`${3.5 + i * 0.1}`, `${3.4 + i * 0.1}`, `${3.6 + i * 0.1}`, `${3.3 + i * 0.1}`],
      correctAnswer: 0,
    }),
    "ratio": (i) => ({
      id: `ratio-${i}`,
      topic: "ratio",
      category: "Number",
      question: `Simplify the ratio ${2 * (i + 1)}:${4 * (i + 1)}`,
      explanation: "To simplify a ratio, divide both parts by their greatest common factor. Keep dividing until no common factors remain.",
      options: [`1:2`, `2:4`, `${i + 1}:${2 * (i + 1)}`, `1:1`],
      correctAnswer: 0,
    }),
    "form-solve-equations": (i) => ({
      id: `form-solve-equations-${i}`,
      topic: "form-solve-equations",
      category: "Algebra",
      question: `Form an equation and solve: A number plus ${5 + i} equals ${15 + i * 2}. What is the number?`,
      explanation: "Convert the word problem into an equation. Let x be the unknown number. Write it as x + (constant) = result, then solve for x.",
      options: [`${10 + i}`, `${8 + i}`, `${12 + i}`, `${6 + i}`],
      correctAnswer: 0,
    }),
    "enlargement": (i) => ({
      id: `enlargement-${i}`,
      topic: "enlargement",
      category: "Geometry",
      question: `A shape is enlarged by scale factor ${2 + i}. If the original length is ${3 + i} cm, what is the new length?`,
      explanation: "When a shape is enlarged, multiply all lengths by the scale factor. New length = Original length × Scale factor.",
      options: [`${(3 + i) * (2 + i)}`, `${(3 + i) + (2 + i)}`, `${(3 + i) - (2 + i)}`, `${(3 + i) / (2 + i)}`],
      correctAnswer: 0,
    }),
    "pythagoras": (i) => ({
      id: `pythagoras-${i}`,
      topic: "pythagoras",
      category: "Geometry",
      question: `Right triangle with legs ${3 + i} and ${4 + i}. What is the hypotenuse?`,
      explanation: "Use Pythagoras' theorem: a² + b² = c², where a and b are the legs and c is the hypotenuse. Substitute the values and solve for c.",
      options: [`${Math.sqrt((3 + i) ** 2 + (4 + i) ** 2).toFixed(2)}`, `${5 + i}`, `${7 + i}`, `${6 + i}`],
      correctAnswer: 0,
    }),
    "tree-diagrams": (i) => ({
      id: `tree-diagrams-${i}`,
      topic: "tree-diagrams",
      category: "Probability",
      question: `A tree diagram shows two branches with probabilities 0.${4 + i} and 0.${6 - i}. What is the sum?`,
      explanation: "In a tree diagram, the probabilities on all branches from one point must add up to 1. This represents all possible outcomes.",
      options: [`1`, `0.${9}`, `0.${8}`, `1.${9}`],
      correctAnswer: 0,
    }),
    "angles-polygons": (i) => ({
      id: `angles-polygons-${i}`,
      topic: "angles-polygons",
      category: "Geometry",
      question: `Sum of interior angles of a ${5 + i}-sided polygon is?`,
      explanation: "The sum of interior angles in a polygon with n sides is (n - 2) × 180°. Subtract 2 from the number of sides, then multiply by 180.",
      options: [`${(5 + i - 2) * 180}°`, `${(5 + i) * 180}°`, `${(5 + i) * 90}°`, `${(5 + i) * 360}°`],
      correctAnswer: 0,
    }),
    "factor": (i) => ({
      id: `factor-${i}`,
      topic: "factor",
      category: "Algebra",
      question: `List all factors of ${12 + i * 2}`,
      explanation: "Factors are numbers that divide evenly into the given number with no remainder. Check each whole number starting from 1.",
      options: [`1, ${12 + i * 2}, 2, ${6 + i}, 3, ${4 + i}`, `1, 2, 3, 4, 6, 12`, `${12 + i * 2} only`, `None`],
      correctAnswer: 0,
    }),
    "prime": (i) => ({
      id: `prime-${i}`,
      topic: "prime",
      category: "Number",
      question: `Is ${17 + i * 2} a prime number?`,
      explanation: "A prime number has exactly two factors: 1 and itself. It cannot be divided evenly by any other number.",
      options: [`Yes`, `No`, `Maybe`, `Not defined`],
      correctAnswer: 0,
    }),
    "decimal-place": (i) => ({
      id: `decimal-place-${i}`,
      topic: "decimal-place",
      category: "Number",
      question: `Round ${4.5678 + i * 0.01} to 2 decimal places`,
      explanation: "Look at the third decimal place. If it's 5 or more, round the second decimal place up. Otherwise, keep it as is.",
      options: [`${(4.57 + i * 0.01).toFixed(2)}`, `${(4.56 + i * 0.01).toFixed(2)}`, `${(4.58 + i * 0.01).toFixed(2)}`, `${(4.59 + i * 0.01).toFixed(2)}`],
      correctAnswer: 0,
    }),
    "significant-figure": (i) => ({
      id: `significant-figure-${i}`,
      topic: "significant-figure",
      category: "Number",
      question: `Write ${45678 + i * 100} to 2 significant figures`,
      explanation: "Significant figures are the important digits in a number. Start counting from the first non-zero digit. Round to the required number of significant figures.",
      options: [`${46000 + i * 100}`, `${45000 + i * 100}`, `${47000 + i * 100}`, `${44000 + i * 100}`],
      correctAnswer: 0,
    }),
    "scale-factor": (i) => ({
      id: `scale-factor-${i}`,
      topic: "scale-factor",
      category: "Geometry",
      question: `Original length ${5 + i}, new length ${15 + i * 3}. What is the scale factor?`,
      explanation: "The scale factor is the ratio of the new length to the original length. Scale factor = New length ÷ Original length.",
      options: [`${(15 + i * 3) / (5 + i)}`, `${(5 + i) / (15 + i * 3)}`, `${(15 + i * 3) - (5 + i)}`, `${(15 + i * 3) + (5 + i)}`],
      correctAnswer: 0,
    }),
    "factorise": (i) => ({
      id: `factorise-${i}`,
      topic: "factorise",
      category: "Algebra",
      question: `Factorise: ${4 + i * 2}x + ${8 + i * 4}`,
      explanation: "Factorising means finding the common factors and taking them out. Look for the greatest common factor (GCF) of all terms.",
      options: [`${2 + i}(${2 + i}x + ${4 + i * 2})`, `2(${2 + i}x + ${4 + i * 2})`, `${4 + i * 2}(x + 2)`, `x(${4 + i * 2} + ${8 + i * 4})`],
      correctAnswer: 0,
    }),
    "probability": (i) => ({
      id: `probability-${i}`,
      topic: "probability",
      category: "Probability",
      question: `Probability of rolling a ${2 + i} on a fair die is?`,
      explanation: "Probability = Number of favorable outcomes ÷ Total number of possible outcomes. A fair die has 6 faces, each with equal chance.",
      options: [`1/6`, `1/${2 + i}`, `${2 + i}/6`, `1/2`],
      correctAnswer: 0,
    }),
    "interest": (i) => ({
      id: `interest-${i}`,
      topic: "interest",
      category: "Number",
      question: `Simple interest on £${100 + i * 10} at ${5 + i}% per year for 1 year is £?`,
      explanation: "Simple interest = Principal × Rate × Time. Multiply the amount by the percentage rate (as a decimal) and the time period in years.",
      options: [`£${(100 + i * 10) * (5 + i) / 100}`, `£${100 + i * 10}`, `£${(100 + i * 10) * (5 + i)}`, `£${(100 + i * 10) / (5 + i)}`],
      correctAnswer: 0,
    }),
    // SCIENCE TOPICS - BIOLOGY
    "cellular-processes": (i) => ({
      id: `cellular-processes-${i}`,
      topic: "cellular-processes",
      category: "Biology",
      subject: "Science",
      question: `Which of the following is a key cellular process?`,
      explanation: "Cellular processes include respiration, photosynthesis, protein synthesis, and cell division. These are the fundamental life activities that occur in cells.",
      options: ["Respiration", "Digestion", "Photosynthesis", "All of the above"],
      correctAnswer: 3,
    }),
    "cell-differentiation": (i) => ({
      id: `cell-differentiation-${i}`,
      topic: "cell-differentiation",
      category: "Biology",
      subject: "Science",
      question: `What is cell differentiation?`,
      explanation: "Cell differentiation is the process by which cells become specialized to perform specific functions. It involves changes in gene expression.",
      options: ["Cells splitting into two", "Cells becoming specialized for a specific function", "Cells dying", "Cells growing larger"],
      correctAnswer: 1,
    }),
    "osmosis": (i) => ({
      id: `osmosis-${i}`,
      topic: "osmosis",
      category: "Biology",
      subject: "Science",
      question: `Osmosis is the movement of ${["water", "salt", "glucose", "ions"][i % 4]} across a ${["semi-permeable", "impermeable", "permeable", "non-porous"][i % 4]} membrane.`,
      explanation: "Osmosis is the diffusion of water molecules across a semi-permeable membrane from an area of higher water potential to lower water potential.",
      options: ["True", "False", "Sometimes", "Cannot determine"],
      correctAnswer: 0,
    }),
    "enzyme": (i) => ({
      id: `enzyme-${i}`,
      topic: "enzyme",
      category: "Biology",
      subject: "Science",
      question: `What do enzymes do in biological systems?`,
      explanation: "Enzymes are biological catalysts that speed up chemical reactions without being used up. They lower the activation energy needed for reactions.",
      options: ["Provide energy", "Speed up reactions", "Store genetic information", "Transport materials"],
      correctAnswer: 1,
    }),
    "active-site": (i) => ({
      id: `active-site-${i}`,
      topic: "active-site",
      category: "Biology",
      subject: "Science",
      question: `Where does a substrate bind on an enzyme?`,
      explanation: "The substrate binds to the active site of an enzyme. The active site is the specific region where the enzyme and substrate interact.",
      options: ["At the enzyme's inactive site", "At the active site", "Anywhere on the enzyme surface", "Outside the enzyme"],
      correctAnswer: 1,
    }),
    "digestion": (i) => ({
      id: `digestion-${i}`,
      topic: "digestion",
      category: "Biology",
      subject: "Science",
      question: `In which part of the digestive system is most nutrient absorption?`,
      explanation: "The small intestine is where most nutrient absorption occurs. It has a large surface area with villi and microvilli to maximize absorption.",
      options: ["Mouth", "Stomach", "Small intestine", "Large intestine"],
      correctAnswer: 2,
    }),
    "nutrition": (i) => ({
      id: `nutrition-${i}`,
      topic: "nutrition",
      category: "Biology",
      subject: "Science",
      question: `Which nutrient is essential for building and repairing body tissues?`,
      explanation: "Proteins are essential for building and repairing body tissues. They are made up of amino acids and are crucial for cell growth and maintenance.",
      options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
      correctAnswer: 1,
    }),
    // SCIENCE TOPICS - PHYSICS
    "energy": (i) => ({
      id: `energy-${i}`,
      topic: "energy",
      category: "Physics",
      subject: "Science",
      question: `Energy cannot be created or destroyed, only transformed. This is known as:`,
      explanation: "This is the Law of Conservation of Energy. Energy can change from one form to another (e.g., kinetic to potential) but the total amount remains constant.",
      options: ["Newton's Law", "Law of Conservation of Energy", "Law of Motion", "Law of Thermodynamics"],
      correctAnswer: 1,
    }),
    "work-power": (i) => ({
      id: `work-power-${i}`,
      topic: "work-power",
      category: "Physics",
      subject: "Science",
      question: `Work is calculated as Force × Distance. If a force of ${10 + i}N is applied over ${5 + i}m, how much work is done?`,
      explanation: "Work = Force × Distance (when force is in the direction of motion). Multiply the force in Newtons by the distance in meters.",
      options: [`${(10 + i) + (5 + i)}J`, `${(10 + i) - (5 + i)}J`, `${(10 + i) * (5 + i)}J`, `${(10 + i) / (5 + i)}J`],
      correctAnswer: 2,
    }),
    "energy-stores": (i) => ({
      id: `energy-stores-${i}`,
      topic: "energy-stores",
      category: "Physics",
      subject: "Science",
      question: `Which of the following is a type of energy store?`,
      explanation: "Energy can be stored in various forms: gravitational potential, elastic potential, thermal, chemical, kinetic, nuclear, and electrical.",
      options: ["Kinetic energy", "Gravitational potential energy", "Chemical energy", "All of the above"],
      correctAnswer: 3,
    }),
    "energy-transfers": (i) => ({
      id: `energy-transfers-${i}`,
      topic: "energy-transfers",
      category: "Physics",
      subject: "Science",
      question: `When a ball falls from a height, what type of energy conversion occurs?`,
      explanation: "As a ball falls, gravitational potential energy is converted to kinetic energy. The total mechanical energy (kinetic + potential) remains constant.",
      options: ["Kinetic to potential", "Potential to kinetic", "Chemical to thermal", "Electrical to kinetic"],
      correctAnswer: 1,
    }),
    "energy-efficiency": (i) => ({
      id: `energy-efficiency-${i}`,
      topic: "energy-efficiency",
      category: "Physics",
      subject: "Science",
      question: `If a machine has an efficiency of 80%, it means:`,
      explanation: "Efficiency = (Useful energy output / Total energy input) × 100%. An 80% efficiency means 80% of input energy is used usefully, and 20% is wasted.",
      options: ["80% of energy is wasted", "80% of energy is used usefully", "Only 80% of the machine works", "The machine produces 80% more energy"],
      correctAnswer: 1,
    }),
    "power": (i) => ({
      id: `power-${i}`,
      topic: "power",
      category: "Physics",
      subject: "Science",
      question: `Power is calculated as Energy ÷ Time. If ${100 + i * 10}J of energy is used in ${5 + i}s, what is the power?`,
      explanation: "Power = Energy ÷ Time. It measures how quickly energy is transferred. The unit is Watts (W), where 1W = 1J/s.",
      options: [`${(100 + i * 10) + (5 + i)}W`, `${(100 + i * 10) - (5 + i)}W`, `${(100 + i * 10) / (5 + i)}W`, `${(100 + i * 10) * (5 + i)}W`],
      correctAnswer: 2,
    }),
    "non-renewable": (i) => ({
      id: `non-renewable-${i}`,
      topic: "non-renewable",
      category: "Physics",
      subject: "Science",
      question: `Which of the following is a non-renewable energy source?`,
      explanation: "Non-renewable energy sources (fossil fuels and nuclear) are finite and will eventually run out. They take millions of years to form.",
      options: ["Solar", "Wind", "Coal", "Hydroelectric"],
      correctAnswer: 2,
    }),
    "renewable": (i) => ({
      id: `renewable-${i}`,
      topic: "renewable",
      category: "Physics",
      subject: "Science",
      question: `Which of the following is a renewable energy source?`,
      explanation: "Renewable energy sources (solar, wind, hydroelectric, geothermal, biomass) are naturally replenished and sustainable.",
      options: ["Natural gas", "Coal", "Wind", "Nuclear"],
      correctAnswer: 2,
    }),
    // SCIENCE TOPICS - EARTH SCIENCE
    "earth-science": (i) => ({
      id: `earth-science-${i}`,
      topic: "earth-science",
      category: "Earth Science",
      subject: "Science",
      question: `The Earth's structure consists of:`,
      explanation: "The Earth has three main layers: the crust (thin outer layer), mantle (thick middle layer), and core (inner solid and liquid layers).",
      options: ["Only a crust", "Crust, mantle, and core", "Crust and magma", "Only a solid core"],
      correctAnswer: 1,
    }),
    "atmosphere": (i) => ({
      id: `atmosphere-${i}`,
      topic: "atmosphere",
      category: "Earth Science",
      subject: "Science",
      question: `Which gas makes up the majority of Earth's atmosphere?`,
      explanation: "Nitrogen (N₂) makes up about 78% of the atmosphere. Oxygen makes up about 21%, with other gases making up the remaining 1%.",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
      correctAnswer: 2,
    }),
    "resources": (i) => ({
      id: `resources-${i}`,
      topic: "resources",
      category: "Earth Science",
      subject: "Science",
      question: `Which of the following is a finite natural resource?`,
      explanation: "Finite resources (like fossil fuels and metals) are limited and will eventually run out. Renewable resources can be replenished naturally.",
      options: ["Trees", "Water", "Oil", "Solar energy"],
      correctAnswer: 2,
    }),
  };

  // Generate 100 questions per topic
  for (let i = 0; i < 100; i++) {
    const generator = questionTemplates[topicId];
    if (generator) {
      questions.push(generator(i));
    }
  }

  return questions;
}

export function getAllQuestions(): Question[] {
  const allQuestions: Question[] = [];
  TOPICS.forEach((topic) => {
    allQuestions.push(...generateQuestions(topic.id));
  });
  return allQuestions;
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return generateQuestions(topicId);
}
