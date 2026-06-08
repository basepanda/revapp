import { SCIENCE_QUESTIONS } from "./scienceQuestions";
export interface Question {
  id: string;
  topic: string;
  question: string;
  explanation: string;
  options: string[];
  correctAnswer: number;
  category: string;
  subject?: string;
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

const QUESTIONS_PER_TOPIC = 20;

function pick<T>(arr: T[], i: number) {
  return arr[i % arr.length];
}

function shuffleOptions(correct: string, wrongs: string[]) {
  const uniqueWrongs = Array.from(new Set(wrongs)).filter((w) => w !== correct).slice(0, 3);

  if (uniqueWrongs.length < 3) {
    console.warn(`Not enough unique wrong answers for "${correct}". Only ${uniqueWrongs.length} unique wrongs.`);
  }

  const options = [correct, ...uniqueWrongs];
  return options;
}

function makeMathQuestion(
  id: string,
  topic: string,
  category: string,
  question: string,
  explanation: string,
  correct: string,
  wrongs: string[]
): Question {
  return {
    id,
    topic,
    category,
    question,
    explanation,
    options: shuffleOptions(correct, wrongs),
    correctAnswer: 0,
  };
}

function makeScienceQuestion(
  id: string,
  topic: string,
  category: string,
  question: string,
  explanation: string,
  correct: string,
  wrongs: string[]
): Question {
  return {
    id,
    topic,
    category,
    question,
    explanation,
    options: shuffleOptions(correct, wrongs),
    correctAnswer: 0,
  };
}

function generateQuestions(topicId: string): Question[] {
  const questions: Question[] = [];

  for (let i = 0; i < QUESTIONS_PER_TOPIC; i++) {
    const n = i + 1;

    switch (topicId) {
      case "hcf": {
        const a = 12 + n;
        const b = 18 + n * 2;
        const hcf = (x: number, y: number) => {
          while (y !== 0) {
            const t = y;
            y = x % y;
            x = t;
          }
          return x;
        };
        const ans = hcf(a, b);
        questions.push(
          makeMathQuestion(
            `hcf-${n}`,
            "hcf",
            "Number",
            `Find the highest common factor of ${a} and ${b}.`,
            "The HCF is the largest number that divides into both numbers exactly.",
            `${ans}`,
            [`${ans + 1}`, `${Math.max(1, ans - 1)}`, `${ans * 2}`]
          )
        );
        break;
      }

      case "solving-equations": {
        const x = n + 2;
        const c = 3 + n;
        const rhs = 2 * x + c;
        questions.push(
          makeMathQuestion(
            `solving-equations-${n}`,
            "solving-equations",
            "Algebra",
            `Solve: 2x + ${c} = ${rhs}.`,
            "Subtract the constant term, then divide by 2 to find x.",
            `${x}`,
            [`${x + 1}`, `${x - 1}`, `${x * 2}`]
          )
        );
        break;
      }

      case "rounding": {
        const value = 4.12 + n * 0.137;
        const rounded = Math.round(value * 10) / 10;
        questions.push(
          makeMathQuestion(
            `rounding-${n}`,
            "rounding",
            "Number",
            `Round ${value.toFixed(3)} to 1 decimal place.`,
            "Look at the hundredths digit to decide whether to round the tenths digit up or keep it the same.",
            `${rounded.toFixed(1)}`,
            [`${(rounded + 0.1).toFixed(1)}`, `${(rounded - 0.1).toFixed(1)}`, `${value.toFixed(1)}`]
          )
        );
        break;
      }

      case "ratio": {
        const a = 2 * n;
        const b = 4 * n;
        questions.push(
          makeMathQuestion(
            `ratio-${n}`,
            "ratio",
            "Number",
            `Simplify the ratio ${a}:${b}.`,
            "Divide both parts by the highest common factor.",
            `1:2`,
            [`2:1`, `2:4`, `1:4`]
          )
        );
        break;
      }

      case "form-solve-equations": {
        const x = 8 + n;
        const add = 3 + n;
        const total = x + add;
        questions.push(
          makeMathQuestion(
            `form-solve-equations-${n}`,
            "form-solve-equations",
            "Algebra",
            `A number plus ${add} is ${total}. What is the number?`,
            "Write the situation as x + ${add} = ${total}, then subtract ${add}.",
            `${x}`,
            [`${x + 2}`, `${x - 2}`, `${total}`]
          )
        );
        break;
      }

      case "enlargement": {
        const scale = 2 + (n % 4);
        const length = 3 + n;
        const newLength = scale * length;
        questions.push(
          makeMathQuestion(
            `enlargement-${n}`,
            "enlargement",
            "Geometry",
            `A line is enlarged by scale factor ${scale}. The original length is ${length} cm. What is the new length?`,
            "Multiply the original length by the scale factor.",
            `${newLength} cm`,
            [`${length + scale} cm`, `${length - scale} cm`, `${newLength + scale} cm`]
          )
        );
        break;
      }

      case "pythagoras": {
        const a = 3 + n;
        const b = 4 + n;
        const c = Math.sqrt(a * a + b * b);
        questions.push(
          makeMathQuestion(
            `pythagoras-${n}`,
            "pythagoras",
            "Geometry",
            `A right-angled triangle has sides ${a} cm and ${b} cm. What is the hypotenuse?`,
            "Use Pythagoras' theorem: a² + b² = c².",
            `${c.toFixed(2)} cm`,
            [`${(c + 1).toFixed(2)} cm`, `${(c - 1).toFixed(2)} cm`, `${(a + b).toFixed(2)} cm`]
          )
        );
        break;
      }

      case "tree-diagrams": {
        questions.push(
          makeMathQuestion(
            `tree-diagrams-${n}`,
            "tree-diagrams",
            "Probability",
            "Two outcomes from a tree diagram have probabilities that add to 1. Which statement is correct?",
            "Probabilities from one point must total 1.",
            "They add to 1",
            ["They add to 2", "They multiply to 1", "They must be equal"]
          )
        );
        break;
      }

      case "angles-polygons": {
        const sides = 5 + (n % 5);
        const sum = (sides - 2) * 180;
        questions.push(
          makeMathQuestion(
            `angles-polygons-${n}`,
            "angles-polygons",
            "Geometry",
            `What is the sum of the interior angles of a ${sides}-sided polygon?`,
            "Use the formula (n - 2) × 180.",
            `${sum}°`,
            [`${sides * 180}°`, `${sides * 90}°`, `${sum - 180}°`]
          )
        );
        break;
      }

      case "factor": {
        const value = 12 + n * 2;
        const factors = [];
        for (let f = 1; f <= value; f++) if (value % f === 0) factors.push(f);
        questions.push(
          makeMathQuestion(
            `factor-${n}`,
            "factor",
            "Algebra",
            `Which number is a factor of ${value}?`,
            "A factor divides the number exactly with no remainder.",
            `${pick(factors, n)}`,
            [`${value + 1}`, `${value - 1}`, `${value + 2}`]
          )
        );
        break;
      }

      case "prime": {
        const value = 17 + n * 2;
        const isPrime = (x: number) => {
          if (x < 2) return false;
          for (let d = 2; d * d <= x; d++) if (x % d === 0) return false;
          return true;
        };
        questions.push(
          makeMathQuestion(
            `prime-${n}`,
            "prime",
            "Number",
            `Is ${value} a prime number?`,
            "A prime number has exactly two factors: 1 and itself.",
            isPrime(value) ? "Yes" : "No",
            isPrime(value) ? ["No", "Not sure", "Only sometimes"] : ["Yes", "Not sure", "Only sometimes"]
          )
        );
        break;
      }

      case "decimal-place": {
        const value = 4.321 + n * 0.11;
        const rounded = Math.round(value * 100) / 100;
        const wrong1 = Math.round((rounded + 0.01) * 100) / 100;
        const wrong2 = Math.round((rounded - 0.01) * 100) / 100;
        const wrong3 = Math.round(value * 10) / 10;

        const wrongs = [wrong1.toFixed(2), wrong2.toFixed(2), wrong3.toFixed(2)].filter(
          (w) => w !== rounded.toFixed(2)
        );

        questions.push(
          makeMathQuestion(
            `decimal-place-${n}`,
            "decimal-place",
            "Number",
            `Round ${value.toFixed(3)} to 2 decimal places.`,
            "Check the third decimal place to decide whether to round up.",
            `${rounded.toFixed(2)}`,
            wrongs.length >= 3 ? wrongs : [`${(rounded + 0.01).toFixed(2)}`, `${(rounded - 0.01).toFixed(2)}`, `${(rounded + 0.02).toFixed(2)}`]
          )
        );
        break;
      }

      case "significant-figure": {
        const value = 12340 + n * 137;
        const rounded = Math.round(value / 1000) * 1000;
        questions.push(
          makeMathQuestion(
            `significant-figure-${n}`,
            "significant-figure",
            "Number",
            `Round ${value} to 2 significant figures.`,
            "Start at the first non-zero digit and round to the second significant digit.",
            `${rounded}`,
            [`${rounded + 1000}`, `${rounded - 1000}`, `${value}`]
          )
        );
        break;
      }

      case "scale-factor": {
        const original = 4 + n;
        const scale = 2 + (n % 3);
        const newLength = original * scale;
        questions.push(
          makeMathQuestion(
            `scale-factor-${n}`,
            "scale-factor",
            "Geometry",
            `A shape has a length of ${original} cm and is enlarged to ${newLength} cm. What is the scale factor?`,
            "Divide the new length by the original length.",
            `${scale}`,
            [`${scale + 1}`, `${scale - 1}`, `${newLength}`]
          )
        );
        break;
      }

      case "factorise": {
        const a = 2 + n;
        const b = 4 + n * 2;
        const common = Math.min(a, b);
        questions.push(
          makeMathQuestion(
            `factorise-${n}`,
            "factorise",
            "Algebra",
            `Factorise: ${a}x + ${b}.`,
            "Find the highest common factor of the terms and factor it out.",
            `${common}(x + ${b / common})`,
            [`x(${a} + ${b})`, `${a}(x + ${b})`, `${common}x + ${b}`]
          )
        );
        break;
      }

      case "probability": {
        const num = 1;
        const den = 6;
        questions.push(
          makeMathQuestion(
            `probability-${n}`,
            "probability",
            "Probability",
            `What is the probability of rolling a 3 on a fair six-sided die?`,
            "There is 1 favourable outcome out of 6 equally likely outcomes.",
            `1/6`,
            [`1/3`, `1/2`, `3/6`]
          )
        );
        break;
      }

      case "interest": {
        const principal = 100 + n * 10;
        const rate = 5 + (n % 6);
        const interest = (principal * rate) / 100;
        questions.push(
          makeMathQuestion(
            `interest-${n}`,
            "interest",
            "Number",
            `Find the simple interest on £${principal} at ${rate}% for 1 year.`,
            "Simple interest = principal × rate × time.",
            `£${interest.toFixed(2)}`,
            [`£${principal.toFixed(2)}`, `£${(interest + 10).toFixed(2)}`, `£${(principal * rate).toFixed(2)}`]
          )
        );
        break;
      }

      
    }
  }

  return questions;
}

export function getAllQuestions(): Question[] {
  const allQuestions: Question[] = [];

  TOPICS.forEach((topic) => {
    if (SCIENCE_QUESTIONS[topic.id]) {
      allQuestions.push(...SCIENCE_QUESTIONS[topic.id]);
    } else {
      allQuestions.push(...generateQuestions(topic.id));
    }
  });

  return allQuestions.map(shuffleQuestion);
}
/*

export function getAllQuestions(): Question[] {
  const allQuestions: Question[] = [];

  TOPICS.forEach((topic) => {
    if (SCIENCE_QUESTIONS[topic.id]) {
      allQuestions.push(...SCIENCE_QUESTIONS[topic.id]);
    } else {
      allQuestions.push(...generateQuestions(topic.id));
    }
  });

  return allQuestions;
}
*/

function shuffleQuestion(question: Question): Question {
  const correctOption = question.options[question.correctAnswer];

  const options = [...question.options];

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return {
    ...question,
    options,
    correctAnswer: options.indexOf(correctOption),
  };
}

export function getQuestionsByTopic(topicId: string): Question[] {
  const questions = SCIENCE_QUESTIONS[topicId]
    ? SCIENCE_QUESTIONS[topicId]
    : generateQuestions(topicId);

  return questions.map(shuffleQuestion);
}
/*
export function getQuestionsByTopic(topicId: string): Question[] {
  if (SCIENCE_QUESTIONS[topicId]) {
    return SCIENCE_QUESTIONS[topicId];
  }

  return generateQuestions(topicId);
}
*/
