import { Link } from "react-router-dom";
import { TOPICS } from "@/data/questions";
import { BookOpen, Sparkles } from "lucide-react";

export default function Index() {
  const mathsCategories = [
    { id: "number", name: "Number", color: "from-purple-500 to-purple-600" },
    { id: "algebra", name: "Algebra", color: "from-blue-500 to-blue-600" },
    { id: "geometry", name: "Geometry", color: "from-pink-500 to-pink-600" },
    { id: "probability", name: "Probability", color: "from-emerald-500 to-emerald-600" },
  ];

  const scienceCategories = [
    { id: "biology", name: "Biology", color: "from-teal-500 to-teal-600" },
    { id: "physics", name: "Physics", color: "from-orange-500 to-orange-600" },
    { id: "earth-science", name: "Earth Science", color: "from-amber-500 to-amber-600" },
  ];

  const topicsByMathCategory = {
    "Number": TOPICS.filter((t) => t.category === "Number" && t.subject === "Maths"),
    "Algebra": TOPICS.filter((t) => t.category === "Algebra" && t.subject === "Maths"),
    "Geometry": TOPICS.filter((t) => t.category === "Geometry" && t.subject === "Maths"),
    "Probability": TOPICS.filter((t) => t.category === "Probability" && t.subject === "Maths"),
  };

  const topicsByScienceCategory = {
    "Biology": TOPICS.filter((t) => t.category === "Biology" && t.subject === "Science"),
    "Physics": TOPICS.filter((t) => t.category === "Physics" && t.subject === "Science"),
    "Earth Science": TOPICS.filter((t) => t.category === "Earth Science" && t.subject === "Science"),
  };

  const renderTopicCard = (topic: typeof TOPICS[0]) => (
    <Link
      key={topic.id}
      to={`/quiz/${topic.id}`}
      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-semibold text-slate-900 text-lg group-hover:text-primary transition-colors">
            {topic.name}
          </h4>
          <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-slate-500 mb-4">
          100 questions
        </p>
        <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
          Start learning
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">RevisionHub</h1>
              <p className="text-sm text-slate-600">KS3 Year 9 Summer Revision</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Master Your Exam Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Challenge yourself with multiple choice questions across 35 topics in Maths and Science. Keep answering until you get it right!
          </p>
        </div>

        {/* MATHS SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-blue-500 rounded" />
            Maths
          </h2>

          <div className="space-y-12">
            {mathsCategories.map((category) => (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded`} />
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topicsByMathCategory[category.name as keyof typeof topicsByMathCategory].map(
                    renderTopicCard
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* SCIENCE SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-1.5 h-10 bg-gradient-to-b from-teal-500 to-orange-500 rounded" />
            Science
          </h2>

          <div className="space-y-12">
            {scienceCategories.map((category) => (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded`} />
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topicsByScienceCategory[category.name as keyof typeof topicsByScienceCategory].map(
                    renderTopicCard
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 pt-12 border-t border-slate-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">35</div>
            <div className="text-sm text-slate-600">Topics</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3,500</div>
            <div className="text-sm text-slate-600">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-slate-600">Practice</div>
          </div>
        </div>
      </main>
    </div>
  );
}
