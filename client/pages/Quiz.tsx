import { useParams, Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { getQuestionsByTopic, TOPICS } from "@/data/questions";
import { ChevronLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { useQuizSession } from "@/hooks/useQuizSession";

export default function Quiz() {
  const { topicId } = useParams<{ topicId: string }>();
  const { currentScore, updateScore } = useQuizSession(topicId || "");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const topic = TOPICS.find((t) => t.id === topicId);
  const questions = useMemo(
    () => getQuestionsByTopic(topicId || ""),
    [topicId]
  );
  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    if (currentScore) {
      setQuestionIndex(currentScore.questionIndex);
      setStreak(currentScore.streak);
      setTotalAnswered(currentScore.totalAnswered);
      setCorrectAnswers(currentScore.correctAnswers);
    }
  }, []);

  if (!topic || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Topic not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswer = (optionIndex: number) => {
    if (answered) return;
    setSelectedAnswer(optionIndex);
    setAnswered(true);

    const newTotal = totalAnswered + 1;
    setTotalAnswered(newTotal);

    if (optionIndex === currentQuestion.correctAnswer) {
      const newStreak = streak + 1;
      const newCorrect = correctAnswers + 1;
      setStreak(newStreak);
      setCorrectAnswers(newCorrect);
      updateScore({
        streak: newStreak,
        totalAnswered: newTotal,
        correctAnswers: newCorrect,
        questionIndex,
      });
    } else {
      updateScore({
        streak,
        totalAnswered: newTotal,
        correctAnswers,
        questionIndex,
      });
    }
  };

  const handleNext = () => {
    if (answered) {
      if (selectedAnswer !== currentQuestion.correctAnswer) {
        // Keep the same question if wrong
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        // Move to next question if correct
        const nextIndex = (questionIndex + 1) % questions.length;
        setQuestionIndex(nextIndex);
        setSelectedAnswer(null);
        setAnswered(false);
        updateScore({
          streak,
          totalAnswered,
          correctAnswers,
          questionIndex: nextIndex,
        });
      }
    }
  };

  const handleReset = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setStreak(0);
    setTotalAnswered(0);
    setCorrectAnswers(0);
  };

  const isCorrect = answered && selectedAnswer === currentQuestion.correctAnswer;
  const isWrong = answered && selectedAnswer !== currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </Link>

            <div className="flex-1 text-center">
              <h1 className="text-xl font-bold text-slate-900">{topic.name}</h1>
            </div>

            <div className="text-right">
              <div className="text-sm font-medium text-slate-600">
                Question {questionIndex + 1} / {questions.length}
              </div>
              <div className="text-xs text-slate-500">
                Streak: {streak}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{
                width: `${((questionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {currentQuestion.question}
              </h2>

              {/* Explanation - only show when answered incorrectly */}
              {isWrong && (
                <p className="text-slate-600 bg-slate-50 rounded-lg p-4 mb-8 border border-slate-200">
                  {currentQuestion.explanation}
                </p>
              )}

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption = index === currentQuestion.correctAnswer;

                  let buttonClass =
                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-300 font-medium";

                  if (!answered) {
                    buttonClass += " border-slate-300 hover:border-primary hover:bg-primary/5 cursor-pointer";
                  } else {
                    if (isCorrectOption) {
                      buttonClass +=
                        " border-emerald-500 bg-emerald-50 text-emerald-900";
                    } else if (isSelected && !isCorrect) {
                      buttonClass +=
                        " border-red-500 bg-red-50 text-red-900";
                    } else {
                      buttonClass += " border-slate-300 text-slate-600";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={buttonClass}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                          {answered && isCorrectOption && (
                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                          )}
                          {answered && isSelected && !isCorrect && (
                            <XCircle className="w-6 h-6 text-red-500" />
                          )}
                          {!answered && !isSelected && (
                            <span className="w-2 h-2 bg-current rounded-full" />
                          )}
                          {!answered && isSelected && (
                            <span className="w-3 h-3 bg-primary rounded-full" />
                          )}
                        </div>
                        <span className="text-lg">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback */}
            {answered && (
              <div className={`p-4 rounded-xl mb-8 ${
                isCorrect
                  ? "bg-emerald-50 border border-emerald-200"
                  : "bg-red-50 border border-red-200"
              }`}>
                <p className={`font-medium ${
                  isCorrect ? "text-emerald-900" : "text-red-900"
                }`}>
                  {isCorrect ? "🎉 Correct!" : "Try again!"}
                </p>
                {isWrong && (
                  <p className="text-sm text-red-800 mt-1">
                    The correct answer is:{" "}
                    <span className="font-bold">
                      {currentQuestion.options[currentQuestion.correctAnswer]}
                    </span>
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              {answered && isCorrect && (
                <button
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Next Question
                </button>
              )}
              {answered && isWrong && (
                <button
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 bg-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-400 transition-colors"
                >
                  Try Again
                </button>
              )}
              {!answered && (
                <button
                  onClick={() => handleAnswer(0)}
                  disabled
                  className="flex-1 px-6 py-3 bg-slate-300 text-slate-600 font-semibold rounded-lg cursor-not-allowed"
                >
                  Select an answer
                </button>
              )}

              <button
                onClick={handleReset}
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            {/* Stats */}
            {totalAnswered > 0 && (
              <div className="mt-8 grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {streak}
                  </div>
                  <div className="text-xs text-slate-600">Current Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {totalAnswered}
                  </div>
                  <div className="text-xs text-slate-600">Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    {totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0}%
                  </div>
                  <div className="text-xs text-slate-600">Accuracy</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
