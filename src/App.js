import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const feedback = e.currentTarget.textContent;

    this.setState((prevState) => {
      console.log(prevState);
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  handleTotalAmount = (e) => {
    const feedbacksAmounts = Object.values(this.state);
    return feedbacksAmounts.reduce((sum, current) => {
      return sum + current;
    }, 0);
  };

  countPositiveFeedback() {
    const total = this.handleTotalAmount();
    const { good } = this.state;

    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.handleTotalAmount();
    const positivePercentage = this.countPositiveFeedback();

    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            state={this.state}
            onLeaveFeedback={this.handleIncrement}
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
}

export default App;
