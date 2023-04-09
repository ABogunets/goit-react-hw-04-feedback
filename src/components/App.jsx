import { useState } from 'react';
import { FeedbackSection } from 'components/FeedbackSection/FeedbackSection';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StatSection } from 'components/StatSection/StatSection';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from 'components/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() !== 0
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;

  return (
    <Container>
      <FeedbackSection title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={leaveFeedback}
        />
      </FeedbackSection>
      <StatSection title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </StatSection>
    </Container>
  );
};
