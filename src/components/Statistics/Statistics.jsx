import PropTypes from 'prop-types';
import {Container, StatData, Total, PositiveFeedback} from 'components/Statistics/Statistics.styled';
import {Notification} from 'components/Notification/Notification';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    total > 0 ? <Container>
                  <StatData>Good: {good}</StatData>
                  <StatData>Neutral: {neutral}</StatData>
                  <StatData>Bad: {bad}</StatData>
                  <Total>Total: {total}</Total>
                  <PositiveFeedback>Positive feedback: {positivePercentage}%</PositiveFeedback>
                </Container>
              : <Notification message="There is no feedback" />
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};