import React, { Component } from 'react';
import {FeedbackSection} from "components/FeedbackSection/FeedbackSection"
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions"
import {StatSection} from "components/StatSection/StatSection"
import {Statistics} from "components/Statistics/Statistics"
import { Container } from 'components/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    leaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
    };

    countTotalFeedback = () => 
      Object.values(this.state).reduce(
      (total, number) => (total + number),
        0);
    countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()!==0 ? Math.round(this.state.good / this.countTotalFeedback() * 100) : 0;

  render() {
    const options = this.state;

    return (
      <Container>
        <FeedbackSection title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </FeedbackSection>   
        <StatSection title="Statistics">
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </StatSection>
      </Container>
  );
}

}
