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

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = value => {
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((total, number) => total + number, 0);
//   countPositiveFeedbackPercentage = () =>
//     this.countTotalFeedback() !== 0
//       ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
//       : 0;

//   render() {
//     const options = this.state;

//     return (
//       <Container>
//         <FeedbackSection title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.leaveFeedback}
//           />
//         </FeedbackSection>
//         <StatSection title="Statistics">
//           <Statistics
//             good={options.good}
//             neutral={options.neutral}
//             bad={options.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </StatSection>
//       </Container>
//     );
//   }
// }
