import PropTypes from 'prop-types';
import {
  Container,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {Object.keys(options).map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {' '}
          {option}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
