import { useState, useEffect } from "react";

export interface QuizScore {
  topicId: string;
  streak: number;
  totalAnswered: number;
  correctAnswers: number;
  accuracy: number;
  timestamp: number;
  questionIndex: number;
}

export interface SessionData {
  scores: Record<string, QuizScore>;
}

const SESSION_KEY = "quiz_session";

function getDefaultSession(): SessionData {
  return { scores: {} };
}

function loadSession(): SessionData {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : getDefaultSession();
  } catch {
    return getDefaultSession();
  }
}

function saveSession(data: SessionData): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
}

export function useQuizSession(topicId: string) {
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    const loaded = loadSession();
    setSession(loaded);
  }, []);

  const currentScore = session?.scores[topicId];

  const updateScore = (data: {
    streak: number;
    totalAnswered: number;
    correctAnswers: number;
    questionIndex: number;
  }) => {
    if (!session) return;

    const updated: SessionData = {
      ...session,
      scores: {
        ...session.scores,
        [topicId]: {
          topicId,
          streak: data.streak,
          totalAnswered: data.totalAnswered,
          correctAnswers: data.correctAnswers,
          accuracy: data.totalAnswered > 0 
            ? Math.round((data.correctAnswers / data.totalAnswered) * 100)
            : 0,
          timestamp: Date.now(),
          questionIndex: data.questionIndex,
        },
      },
    };

    setSession(updated);
    saveSession(updated);
  };

  const clearTopicScore = (topic: string) => {
    if (!session) return;

    const updated: SessionData = {
      ...session,
      scores: {
        ...session.scores,
      },
    };
    delete updated.scores[topic];

    setSession(updated);
    saveSession(updated);
  };

  const clearAllScores = () => {
    const newSession = getDefaultSession();
    setSession(newSession);
    saveSession(newSession);
  };

  return {
    currentScore,
    updateScore,
    clearTopicScore,
    clearAllScores,
    allScores: session?.scores || {},
  };
}
