import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacksAmounts = { good, neutral, bad };

  const handleIncrement = (e) => {
    const feedback = e.currentTarget.textContent;

    switch (feedback) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        console.log(`Такой типа ${feedback} не обрабатывается `);

        break;
    }
  };

  const handleTotalAmount = (e) => {
    const feedbacksValue = Object.values(feedbacksAmounts);
    return feedbacksValue.reduce((sum, current) => {
      return sum + current;
    }, 0);
  };

  const countPositiveFeedback = () => {
    const total = handleTotalAmount();
    const { good } = feedbacksAmounts;

    return Math.round((good * 100) / total);
  };
  const positivePercentage = countPositiveFeedback();
  const total = handleTotalAmount();

  return (
    <div className="App">
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          state={feedbacksAmounts}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title={"Statistics"}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
}
